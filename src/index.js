import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Clock';
import TodoContainer from './TodoContainer';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <div>
        <Clock/>
        <TodoContainer/>
    </div>, 
    document.getElementById('root')
);

serviceWorker.unregister();
