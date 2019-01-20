import React, { Component } from 'react';
import './TodoContainer.css';
import TodoList from './TodoList';

export default class TodoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };

        this.deleteTodo = this.deleteTodo.bind(this)
    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onSubmit = (event) => {
        // prevent from refreshing 
        event.preventDefault();

        // reset term
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term] // binding the term to the array of items
        });
    }

    deleteTodo(text) {
        this.setState({
            items: this.state.items.filter(t => t != text)
        });
    }

    render() {
        return (
        <div>
            <form className="todo-container" onSubmit={this.onSubmit}>
                <input placeholder="Add a Task" value={this.state.term} onChange={this.onChange} />
                <button>Submit</button>
            </form>
            <div className="todolist">
                <TodoList items={this.state.items} deleteTodo={this.deleteTodo} /> 
            </div>
           
        </div>
        );
    }
}