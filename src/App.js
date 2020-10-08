import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import Youtube from './Youtube';

class App extends Component {
  state={videos:[]}
  onTermSubmit = async term => {
    const response = await Youtube.get('/search', {
      params:{
        q:term
      }
    })
    this.setState({videos:response.data.items})
    console.log(this.state.videos)
  }
  render(){
    return (
      <div className="App">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
