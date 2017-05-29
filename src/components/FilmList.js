import React, {Component} from 'react';

export default class FilmList extends Component {

  render(){
    return (
      <div>
        <p>{this.props.movies.title}</p>;
        <p>Year: {this.props.movies.year}</p>;
      </div>
    );
  }
}
