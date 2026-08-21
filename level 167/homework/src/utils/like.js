function like(id, author, curUser, setUsers) {
    setUsers(prevUsers =>
        prevUsers.map(user => {
            if (user.id !== author) return user;

            return {
                ...user,
                posts: user.posts.map(post => {
                    if (post.id !== id) return post;

                    if (post.likes.includes(curUser.id)) {
                        return {
                            ...post,
                            likes: post.likes.filter(id => id !== curUser.id)
                        };
                    }

                    return {
                        ...post,
                        likes: [...post.likes, curUser.id]
                    };
                })
            };
        })
    );
}

export { like }