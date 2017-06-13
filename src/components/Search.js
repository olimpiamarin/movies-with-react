import React, {Component} from 'react';

 class Search extends Component {
   movieUpdate(){
     const searchCrit = this.searchCont.value;
     const {movies} = this.props;
     const filterMovies = movies.filter(film => {
       return film.title.toLowerCase().indexOf(searchCrit.toLowerCase()) >= 0
     });
     this.props.movieUpdate(filterMovies);
   }

  render(){
    return (
      <div className="movie">
        <div className="search">
          <div className="search-field">
            <h3>Looking for a specific movie?</h3>
            <input
                type="search"
                ref={ (value) => {this.searchCont = value} }
                onChange={this.movieUpdate.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
