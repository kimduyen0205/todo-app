import React, { Component } from "react";

class TodoList extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul className="center-content">
        {items.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
