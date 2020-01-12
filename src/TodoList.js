import React from 'react';
import './TodoContainer.css'

const TodoList = (props) => (
  <ul>
    {
      props.items.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>
);

export default TodoList;