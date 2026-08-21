import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider.jsx";
import { useForm } from "../Hooks/useForm.js";
import { setLocal } from "../utils/localStorage.js";
import { like } from "../utils/like.js";
import { remove } from "../utils/remove.js";

const Profile = () => {
    const { id } = useParams();
    const { users, setUsers, curUser, setCurUser } = useContext(AuthContext);

    const userIndex = users.findIndex(cur => cur.id.toLowerCase() === id.toLowerCase());

    if (userIndex === -1) return <Navigate to="/error/404" />;

    const [handleSubmit] = useForm();

    const addPost = (formData, _, target) => {
        const newCurUser = { ...curUser, posts: [...curUser.posts, { id: Date.now(), ...formData, likes: [], author: curUser.id}] };

        setCurUser(newCurUser);
        setLocal("curUser", newCurUser);
        setUsers(users.map(cur => cur.id === curUser.id? newCurUser : cur));
        target.reset();
    }

    return (
        <div>
            {/* Profile-ის მონაცემების გამოტანა */}
            <div>
                <h1>Profile: {users[userIndex].name} {users[userIndex].surname}</h1>
            </div>


            {/* Post-ების დამატება, მხოლოდ იმ შემთხვევაში თუ გადასული ვართ იგივე
            მომხმარებლის პროფილზე, რომლიც არის curUser */}
            {
                users[userIndex].id === curUser.id &&
                <div>
                    <h3>Add new post</h3>
                    <form onSubmit={(e) => handleSubmit(e, addPost)}>
                        <label htmlFor="title">Title:</label><br />
                        <input type="text" id="title" name="title" placeholder="Enter post title" required />
                        <br /><br />
                        <label htmlFor="ImgUrl">ImgUrl:</label><br />
                        <input type="url" id="ImgUrl" name="ImgUrl" placeholder="Enter post ImgUrl" required />
                        <br /><br />
                        <button>Add post</button>
                    </form>
                </div>
            }

            <br />

            {/* კონკრეტული მომხმარებლის Post-ები */}
            <div>
                {
                    users[userIndex].posts.map((cur, index) => {
                        return (
                            <div key={index} style={{width: 400, padding: 20, backgroundColor: "gray", borderRadius: 15}}>
                                <div style={{display: "flex", alignItems: "center", gap: 20}}>
                                    <div style={{width: 50, height: 50, borderRadius: "50%", backgroundColor: "black"}}></div>
                                    <h4 style={{color: "blue", textDecoration: "underline", cursor: "pointer"}}>{users[userIndex].id}</h4>
                                </div>
                                <h4 style={{color: "white"}}>Title: {cur.title}</h4>
                                <img src={cur.ImgUrl} style={{ width: "100%", borderRadius: 5}} />
                                <p>Likes: {cur.likes.length}</p>
                                <button onClick={() => like(cur.id, cur.author, curUser, setUsers)}>like</button><br /><br />
                                {curUser.id == cur.author ? <button onClick={() => remove(cur.id, curUser, setUsers)}>delete</button> : ''}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Profile;