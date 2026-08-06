import { useState } from "react"
import TaskItem from "../components/TaskItem"



function TaskList({tasks, onDelete, onToggle}){
    // const [done, setDone] = useState(0)
    // for(let i of tasks){
    //     if(i.completed){
    //         setDone(done+=1)
    //         console.log(done)
    //     }
    // }
    return (
        <>
            {/* <h1>tasks done: {done}</h1> */}
            {tasks.map((task, ind) => (
                <TaskItem
                    key={ind}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
                )
            )}
        </>
    )
}


export default TaskList