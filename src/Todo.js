import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
        <div className="todo">
            <ul>
                <li>1 thing</li>
                <li>2 thing</li>
            </ul>
        </div>
    
    );
  }
}

export default Todo;