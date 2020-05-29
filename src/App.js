import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8">
            <Todoinput />
            <Todolist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
