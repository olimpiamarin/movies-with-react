import React from 'react';
import Search from './Search.js';


export default class SearchMovie extends React.Component {
  constructor(){
    super();
    this.state = {
      Search: '',
    };
  }
  render(){
    return (
      <div>
        <h2>Looking for a specific movie?</h2>
        <Search />
      </div>
    );
  }
}
