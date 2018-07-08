import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import taskReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';

const store = createStore(taskReducer);


//import TodoApp from './components/TodoApp';


ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);
