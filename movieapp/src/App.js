
import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


//const movie = 'http://www.omdbapi.com/?apikey=c16b2d1d&&s='

//let axios = require('axios');


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies: '',
      currentMovies: [],

    };
   this.handleMovieChange = this.handleMovieChange.bind(this);
   this.onButtonClick = this.onButtonClick.bind(this);

  }
getMovieName(event, movieName){
  //let movieName = this.state
  //return axios.get(movie + )
  console.log(movieName)
}


handleMovieChange(event){

   console.log(event.target.value)
   this.setState({movies: event.target.value})
  }

onButtonClick(event, movie){
  //console.log("onclick:" )
  let movieName = this.state.movies.slice(0)
  console.log(movieName)
  //http://www.omdbapi.com/?apikey=c16b2d1d&t=batman&plotl
  const promise = axios.get('http://www.omdbapi.com/?apikey=c16b2d1d&&s=' + movieName+'&plot=full')
  //http://www.omdbapi.com/?apikey=c16b2d1d&t=batman&plot=full

  console.log(promise)

  promise.then (data => {
    //console.log (data.data.Response)
    if (data.data.Response === "True") {
     this.setState({currentMovies: data.data.Search} )
    }
  })

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
           {this.state.currentMovies.map((title, idx)=> ( 
          <div className="row">
            <p key={idx} className="title"> {this.state.currentMovies[idx].Title}</p> 
            <p key={idx} className="type"> {this.state.currentMovies[idx].Type}</p>  
            <p key={idx} className="year"> {this.state.currentMovies[idx].Year}</p>  
          </div> 
         ))}
         
      
      </div>
    );
  }
}

export default App;
