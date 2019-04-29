import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OnOffButton from './on-off-button'

class App extends Component {
  render(){
      return(
    <div className="App">
        <OnOffButton />
        <OnOffButton />
        <OnOffButton />
        <OnOffButton />
        <OnOffButton />
        <OnOffButton />
        <OnOffButton />
    </div>
    )
  }
}

export default App;
