function TaskItem({task, onDelete, onToggle}){
    return (
        <li>
            <h1>{task.task}</h1>
            <input type="checkbox" onChange={() => onToggle(task)}/><br/><br/>
            <button onClick={() => onDelete(task)}>delete</button>
        </li>
    )
}

export default TaskItem