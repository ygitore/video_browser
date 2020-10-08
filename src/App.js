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
    this.setState({videos:response.data.items, selectedVideo:response.data.items[0]})
  }
  onVideoSelect = (video) => {
    this.setState({selectedVideo:video})
  }
  componentDidMount(){
    this.onTermSubmit("buildings")
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
