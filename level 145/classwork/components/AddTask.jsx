function AddTask({setTasks}){
    function add(){
        let input = prompt("enter task here")
        if(input){
            setTasks(prev => [...prev, {task: input, completed: false}]) 
        }
    }
    return <button onClick={add}>add task</button>
}

export default AddTask