function remove(id, curUser, setUsers){
    setUsers(prevUsers => {
        return prevUsers.map((user) => {
            if(user.id == curUser.id){
                return(
                    {...user, posts: user.posts.filter((cur) => {
                        return cur.id != id
                    })}
                )
            }
            return user
        })
    })
}

export { remove }