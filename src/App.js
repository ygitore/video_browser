import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import Youtube from './Youtube';

class App extends Component {
  state={videos:[], selectedVideo:null}
  onTermSubmit = async term => {
    const response = await Youtube.get('/search', {
      params:{
        q:term
      }
    })
    this.setState({videos:response.data.items})
    console.log(this.state.videos)
  }
  onVideoSelect = (video) => {
    this.setState({selectedVideo:video})
  }
  render(){
    return (
      <div className="App">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
