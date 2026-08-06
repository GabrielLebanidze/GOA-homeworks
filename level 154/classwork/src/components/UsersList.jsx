function UsersList({ handleClick, users, loading, handleChange, filteredUsers}){


    return (
        <>
            <button onClick={handleClick}>sort a-z</button><br /><br />
            <input type="text" placeholder="name" name="name" onChange={handleChange}/>
            {loading? <p>loading...</p> : filteredUsers.map((cur, ind) => {
                return (
                <div key={cur.id}>
                    <p>name: {cur.name}</p>
                    <p>email: {cur.email}</p>
                    <p>website: {cur.website}</p>
                    <p>phone: {cur.phone}</p><br /><br />
                </div>
                )
            })}
        </>
    )   
}

export default UsersList