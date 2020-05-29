import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";
class App extends Component {
  state = {
    items: [],
    item: "",
    id: uuid(),
    edititem: false,
  };
  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newitem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updateditem = [...this.state.items, newitem];
    this.setState(
      {
        items: updateditem,
        item: "",
        edititem: false,
        id: uuid(),
      },
      console.log(this.state)
    );
  };
  clearlist = () => {
    this.setState({ items: [] });
  };
  handleDelete = (id) => {
    const list = this.state.items.filter((data) => data.id !== id);
    this.setState({ items: list });
  };
  handleEdit = (id) => {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8">
            <Todoinput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              edititem={this.state.edititem}
            />
            <Todolist
              items={this.state.items}
              clearlist={this.clearlist}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
