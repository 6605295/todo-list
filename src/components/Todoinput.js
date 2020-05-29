import React, { Component } from "react";

class Todoinput extends Component {
  render() {
    const { item, handleChange, handleSubmit, edititem } = this.props;

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
              disabled={item ? false : true}
              className={
                edititem
                  ? "btn btn-success btn-block text-uppercase my-3"
                  : "btn btn-primary btn-block text-uppercase my-3"
              }
            >
              {edititem ? "edit item" : "add item"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Todoinput;
