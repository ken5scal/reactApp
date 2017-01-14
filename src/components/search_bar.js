import React, { Component } from 'react';

//const SearchBar = () => { // Functional Component
//    return <input />  // React.createComment(
//};

//class SearchBar extends React.Component {
class SearchBar extends Component { // Class Base Component
    // Consturctor is alwsys executed when Class is instantiatd
    constructor(props) {
        super(props);
        // State is plain JS component that exists on Class Base Component
        this.state = { term: '' }; // Only inside constructor, state is manipulated in this way. NO OTHER PART.
    }

    // When State of componet changes, then it renders asap
    render() {
       //return <input onChange={this.onInputChange} />;
       //return <input onChange={event => console.log(event.target.value)} />;
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
}

// Exporting SearchBar Component
export default SearchBar;
