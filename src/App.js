import React, { Component } from 'react';
import Header from "./components/Header.js";
import Search from './components/Search';
import FilmList from './components/FilmList';
import moviesList from './constants/movies';
import uuid from 'uuid';
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: moviesList
    }
  }

  movieUpdate(filterMovies){
    this.setState({
      movies: filterMovies
    })
  }

  render () {
    return(
      <div>
        <Header />
        <Search
          movies = {moviesList}
          movieUpdate = {this.movieUpdate.bind(this)}
        />
        <FilmList
          movies = {this.state.movies}
        />
      </div>
    );
  }
  }

export default App;
