function Idk(){
    const students = ["John", "Emma", "Michael", "Sophia"];
    return (
    <ul>
        {students.map((cur, ind) => <li key={ind}>{cur}</li>)}
    </ul>
    )
}

export default Idk