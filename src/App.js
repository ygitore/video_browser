import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Youtube from './Youtube';

class App extends Component {
  state={term:''}
  onTermSubmit = async term => {
    const response = await Youtube.get('/search', {
      params:{
        q:term
      }
    })
    console.log(response)
  }
  render(){
    return (
      <div className="App">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
