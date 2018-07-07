import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import './index.css';


// ActionCreator
const inputTask = (task) => ({
    type: 'INPUT_TASK',
    payload: {
        task
    }
});

const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: {
        task
    }
});

const initialState = {
    task: '',
    tasks: []
}

function taskReducer(state = initialState, action) {
    switch(action.type) {
        case 'INPUT_TASK':
            return {
                ...state,
                task: action.payload.task,
            }
        case 'ADD_TASK': {
            return {
                ...state,
                tasks: state.tasks.concat([action.payload.task])
            }
        }
        default:
            return state;
    }
}

const store = createStore(taskReducer);


function TodoApp(props) {
    const store = props.store;
    const {task, tasks} = store.getState();

    return (
        <div>
            <input type="text" onChange = {(e) => store.dispatch(inputTask(e.target.value))}/>
            <input type="button" value="add" onClick={()=>store.dispatch(addTask(task))}/>
            <ul>
                {
                    tasks.map(function(item, i) {
                        return (
                            <li key={i}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

function renderApp() {
    render(
        <TodoApp store={store}/>,
        document.getElementById('root')
    )
}
store.subscribe(()=>renderApp(store)); // これを書かないと描画されない
renderApp();
