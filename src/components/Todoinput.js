import React, { Component } from "react";

class Todoinput extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props;
    return (
      <div className="text-center text-capitalize">
        <h1>todo input</h1>{" "}
        <form onSubmit={handleSubmit}>
          <div className="card card-body my-5">
            <div className="input-group">
              <div className="input-group-prepend bg-primary text-white p-2">
                <i className="fa fa-book"></i>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Add a Todo Item"
                value={item}
                onChange={handleChange}
              ></input>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block text-uppercase my-3"
            >
              Add item
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Todoinput;
