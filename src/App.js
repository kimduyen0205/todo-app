import React, { Component } from "react";
import TodoList from "./component/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }
  render() {
    const {text,items} = this.state;
    return (
      <div>
        <h3>What needs to be done?</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter new task..."
            onChange={this.handleChange}
            value={text}
          />
          <button>Add Item</button>
        </form>
        <TodoList items={items} />
      </div>
    );
  }
}

export default App;
