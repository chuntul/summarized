import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Clock';
import Todo from './Todo';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <div>
        <Clock/>
        <Todo addTask={this.addTask}/>
    </div>, 
    document.getElementById('root')
);

serviceWorker.unregister();
