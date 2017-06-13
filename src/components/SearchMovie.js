import React from 'react';
import Search from './Search.js';


export default class SearchMovie extends React.Component {
  constructor(){
    super();
    this.state = {
      search: '',
    };
  }
  render(){
    return (
      <div class="search">
        <h2 class="header">Looking for a specific movie?</h2>
        <Search />
      </div>
    );
  }
}
