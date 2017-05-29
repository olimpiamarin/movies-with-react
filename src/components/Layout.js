import React from "react";

import Header from "./Header.js";
import SearchMovie from "./SearchMovie.js";
import FilmList from "./FilmList.js";


export default class Layout extends React.Component {

  render () {
    return(
      <div>
        <Header />;
        <SearchMovie />;
        <FilmList />;
      </div>
    );
  }
}
