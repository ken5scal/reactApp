import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyDzHKm8wBzdCBq7RDrvjwFGB0Lvwo0e_iU';
import _ from 'lodash';

// Create a new component. this should produce some html
// Class. Not an Instance
// const App = function() {
//const App = () => {
// Use Calss base component whenever you want to save state.
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          videos: [],
          selectedVideo: null
         };

         this.videoSearch('darksouls')
    }

    videoSearch(term) {
      //YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
      YTSearch({key: API_KEY, term: term}, (videos) => {
        //this.setState({ videos: videos });
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        }); // If key and value are the same name, you can abbreviate it
      });
    }

    // Returning JSx. JSx is tranpiled into vanilla JavaScript.
    // JSx produces actual html put into DOM when rendering.
    render () {
      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
      return (

          <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                  videos={this.state.videos}
                  onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                />
            </div>
        );
    }
}

// Take this componet's generated HTML and put it on the page (in the DOM)
// Instantiating App Class defined in Line 5
// .container comes from root Container defined in index.html.
// All component will be nested under here
ReactDOM.render(<App />, document.querySelector('.container'));
// ReactDOM.render(<App></App>, );
