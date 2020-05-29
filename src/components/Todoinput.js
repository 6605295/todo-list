import React, { Component } from "react";

class Todoinput extends Component {
  state = {};
  render() {
    return (
      <div className="text-center text-capitalize">
        <h1>todo input</h1>{" "}
        <div className="card card-body my-5">
          <div className="input-group">
            <div className="input-group-prepend bg-primary text-white p-2">
              <i className="fa fa-book"></i>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Add a Todo Item"
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Todoinput;
