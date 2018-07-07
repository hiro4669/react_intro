import React from 'react';
import {render} from 'react-dom'
import './index.css';
import TodoApp from './components/TodoApp';
import taskReducer from './reducers/tasks';
import {createStore} from 'redux';

const store = createStore(taskReducer);

function renderApp() {
    render(
        <TodoApp store={store}/>,
        document.getElementById('root')
    );
}

store.subscribe(()=>renderApp());
renderApp();
