import React from 'react';

function TodoApp({task, tasks, inputTask, addTask, redirectToError }) {
    return(
        <div>
            <input type="text" onChange={(e) => inputTask(e.target.value)} />
            <input type="button" value="add" onClick={() => addTask(task)} />
            <ul>
                {
                    tasks.map(function(item, i) {
                        return (
                            <li key={i}>{item}</li>
                        );
                    })
                }
            </ul>
            <button onClick={() => redirectToError()}> Error </button>
        </div>
    );
}

export default TodoApp;
