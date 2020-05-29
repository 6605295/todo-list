import React, { Component } from "react";
import Todoitem from "./Todoitem";
class Todolist extends Component {
  state = {};
  render() {
    return (
      <div>
        todo list
        <Todoitem />
      </div>
    );
  }
}

export default Todolist;
