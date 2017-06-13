import React, {Component} from 'react';

export default class FilmList extends Component {
  moviesList(){
    const {movies} = this.props;
    const moviesList = movies.map((film, index) => {
      return (
        <div key={index} className="film">
            <h6 className="title">{film.title}</h6>
            <p className="year">Year: {film.year}</p>
        </div>
      )
  })
  return moviesList;
}
  render(){
    return (
      <div className="movie">
        <div className="film-list">
          {this.moviesList()}
        </div>
      </div>
    );
  }
}
