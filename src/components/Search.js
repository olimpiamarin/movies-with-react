import React from 'react';

export default class Search extends React.Component {
 

  render(){
    return (
      <div>
        <input type="text"
            placeholder="Search..."
            placeholder="Search movies"
            value={this.state.search}
            //onChange={this.search.bind(this)}
            class="input"
        />
      </div>
    );
  }
}
