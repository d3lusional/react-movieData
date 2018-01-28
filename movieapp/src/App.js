import React, { Component } from 'react';
import './App.css';


const movie = 'http://www.omdbapi.com/?apikey=c16b2d1d&&s='

let axios = require('axios');

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies: '',

    };
   this.handleMovieChange = this.handleMovieChange.bind(this);
   this.onButtonClick = this.onButtonClick.bind(this);

  }
handleMovieChange(event){
   let movieName = this.state
   console.log(event.target.value)
   this.setState({movies: event.target.value})
  }

onButtonClick(event, movie){
  console.log(event)
  axios.get('http://www.omdbapi.com/?apikey=c16b2d1d&&s=' + movie)
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Data</h1>
        </header>
      <div className="row">
          <input onChange={this.handleMovieChange} value={this.state.movie} type="text"/>
          <button onClick={this.onButtonClick}>Search</button>
      </div> 
       
      </div>
    );
  }
}

export default App;
