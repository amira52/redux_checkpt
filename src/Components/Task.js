import React from 'react'
import { useDispatch } from 'react-redux'
import {checkTask, deleteTask} from "../JS/actions/task"
import Edit from './Edit'
import './Task.css' 
const Task = ({task}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <p className={task.isDone? "Done":"Undone"}>{task.description}</p>
            <Edit task={task} />
            <button onClick={()=> dispatch(deleteTask(task.id))}>Delete</button>
            <button onClick={() => dispatch(checkTask(task.id))}>{task.isDone ? "Done":"Undone"}</button>
        </div>
    )
}

export default Task;
