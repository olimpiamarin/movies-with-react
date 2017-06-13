import React, {Component} from 'react';
import {movies} from "./constants/movies.js";

export default class FilmList extends Component {

  render(){
    const movies = this.props.movies;
    const filmList = movies.map((film, index) => {
      return (
        <div key={index} class="film">
            <h6 class="title">{film.title}</h6>
            <p class="year">Year: {film.year}</p>
        </div>
      );
    })

    return (
      <div class="movie">
        {filmList}
      </div>
    );
  }
}
