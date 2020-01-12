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
    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }

    render() {
        return (
        <div>
            <form className="todo-container" onSubmit={this.onSubmit}>
                <input value={this.state.term} onChange={this.onChange} />
                <button>Submit</button>
            </form>
            <TodoList items={this.state.items} />
        </div>
        );
    }
}