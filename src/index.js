import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDzHKm8wBzdCBq7RDrvjwFGB0Lvwo0e_iU'

// Create a new component. this should produce some html
// Class. Not an Instance
// const App = function() {
const App = () => {
    // Returning JSx. JSx is tranpiled into vanilla JavaScript.
    // JSx produces actual html put into DOM when rendering.
    return <div>Hi!</div>; 
}

// Take this componet's generated HTML and put it on the page (in the DOM)
// Instantiating App Class defined in Line 5
// .container comes from root Container defined in index.html.
// All component will be nested under here
ReactDOM.render(<App />, document.querySelector('.container'));
// ReactDOM.render(<App></App>, );
