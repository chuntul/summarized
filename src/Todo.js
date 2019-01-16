import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
        <div className="todo">
            <div className="container">
                <form onSubmit={this.props.addTask}>
                    <input placeholder="Task" />
                    <button type="submit"> Add Task </button>
                </form>
            </div>
        </div>
    
    );
  }
}

export default Todo;