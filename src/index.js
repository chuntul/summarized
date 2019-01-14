import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Clock';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <Clock/>
    </div>, 
    document.getElementById('root')
);

serviceWorker.unregister();
