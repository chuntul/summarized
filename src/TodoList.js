import React, { Component } from 'react';

export default class TodoList extends Component {
  deleteItem(item) {
    this.props.deleteTodo(item);
  }

  render() {
    return(
      <ul>
        {
          this.props.items.map((item, index) => <li onClick={() => { this.deleteItem(item)}} key={index}>{item}</li>)
        }
      </ul>
    );
}
}