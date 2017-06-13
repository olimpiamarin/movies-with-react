import React, { Component } from 'react';
import Layout from "./components/Layout.js";
import uuid from 'uuid';
import "./App.css";

class App extends Component {

    render() {
        return (
          <div className="row">
          <Layout />
          </div>
        );
    }
}

export default App;
