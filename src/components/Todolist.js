import React, { Component } from "react";
import Todoitem from "./Todoitem";
class Todolist extends Component {
  render() {
    const { items, clearlist, handleDelete, handleEdit } = this.props;
    return (
      <div className="text-center text-capitalize ">
        <h2 className="my-5">todo list</h2>
        {items.map((item) => (
          <Todoitem
            key={item.id}
            title={item.title}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
          />
        ))}
        <button
          className="btn btn-danger btn-block text-uppercase my-5"
          onClick={clearlist}
        >
          clear list
        </button>
      </div>
    );
  }
}

export default Todolist;
