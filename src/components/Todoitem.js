import React, { Component } from "react";
class Todoitem extends Component {
  state = {};
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <div className="card card-body">
        <div className="row">
          <div className="col-md-4">{title}</div>
          <div className="col-md-4"></div>
          <div className="col-md-4 float-right">
            <i
              className="fa fa-edit bg-success text-white p-2 mr-2"
              onClick={handleEdit}
            ></i>
            <i
              className="fa fa-trash bg-danger text-white p-2 mr-2"
              onClick={handleDelete}
            ></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Todoitem;
