import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";
import { Link } from "react-router-dom";
import { like } from "../utils/like.js";
import { remove } from "../utils/remove.js";

const Home = () => {
    const { posts, curUser, setUsers } = useContext(AuthContext);


    return (
        <div>
            <h1>Home</h1>
            <div>
                {
                    posts.length === 0 ? <h3>No posts</h3> :
                        posts.map((cur, index) => {
                            return (
                                <div key={index} style={{ width: 400, padding: 20, backgroundColor: "gray", borderRadius: 15 }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                                        <div style={{ width: 50, height: 50, borderRadius: "50%", backgroundColor: "black" }}></div>
                                        <Link to={`/${cur.author}`} >{cur.author}</Link>
                                    </div>
                                    <h4 style={{ color: "white" }}>Title: {cur.title}</h4>
                                    <img src={cur.ImgUrl} style={{ width: "100%", borderRadius: 5 }} />
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

export default Home;