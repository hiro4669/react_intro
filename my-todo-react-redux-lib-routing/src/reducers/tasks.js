
/*
const initialState = {
    tasks: {
        task: '',
        tasks: []
    },
    router: {
        location: {
        }
    }
};
*/

const initialState = {
    task: 'aa',
    tasks: []
};

function taskReducer(state = initialState, action) {
    switch(action.type) {
        case 'INPUT_TASK':
            console.log("input task");
            return {
                ...state,
                task: action.payload.task
            };
        case 'ADD_TASK':
            console.log("add task");
            return {
                ...state,
                tasks: state.tasks.concat([action.payload.task])
            };
        default:
            return state;
    }
}

export default taskReducer;
