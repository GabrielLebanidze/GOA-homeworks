import { useEffect, useState } from "react"
import UsersList from "./UsersList"

function UsersContainer(){
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((idk) => {
                setUsers([...idk])
                setLoading(false)
            })
            .catch((error) => error)
    }, [])    
    let [users, setUsers] = useState([])
    let [loading, setLoading] = useState(true)
    let [search, setSearch] = useState("")


    function handleClick(){
        let newUsers = [...users]
        newUsers.sort((a, b) => {
            if(a.name < b.name) return -1
            if (a.name > b.name) return 1
            return 0
        })
        setUsers(newUsers)
    }

    function handleChange(e){
        setSearch(e.target.value)
    }

    const filteredUsers = users.filter((cur) => {
        return cur.name.toLowerCase().includes(search.toLowerCase())
    })

    return <UsersList handleClick={handleClick} handleChange={handleChange} filteredUsers={filteredUsers} loading={loading}/>
}

export default UsersContainer