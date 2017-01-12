import React, { Component } from 'react';

//const SearchBar = () => { // Functional Component
//    return <input />  // React.createComment(
//};

//class SearchBar extends React.Component {
class SearchBar extends Component { // Class Base Component
    render() {
       //return <input onChange={this.onInputChange} />;  
       return <input onChange={event => console.log(event.target.value)} />;  
    }

    onInputChange(event) {
        console.log(event.target.value);
    }
}

// Exporting SearchBar Component
export default SearchBar;
