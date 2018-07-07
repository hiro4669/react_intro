import {createStore, replaceReducer} from 'redux';

// data
const initialState = {
    tasks : []
}

// AddReducer
function addReducer(state = initialState, action) {
//    console.log("taskReducer called");
    switch(action.type) {
        case 'ADD_TASK':
            console.log("addTask invoked");
            return {
                ...state,
                tasks: state.tasks.concat([action.task])
            };
        default:
            return state;
    }
}

// ResetReducer
function resetReducer(state = initialState, action) {
    switch(action.type) {
        case 'RESET_TASK':
            return {
                ...state,
                tasks: []
            };
        default:
            return state;
    }
}

// ActionCreator
const addTask = (task) => (
    {
    type: 'ADD_TASK',
    payload: {
        task
    }
});

const resetTask = () => ({
    type: 'RESET_TASK'
});

// Observer
function handleChange() {
    console.log("handleChange invoked");
    console.log(store.getState());
}

const store = createStore(addReducer);
const unsubscribe = store.subscribe(handleChange);


// dispatch Action
store.dispatch(addTask('Study Store')); // state change
// replace Reducer
store.replaceReducer(resetReducer); // state change why??
// dispatch Action
store.dispatch(resetTask()); // state change
