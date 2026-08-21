import { useState } from "react";
import { changeAllUsers } from "../utils/localStorage.js";
import { Link } from "react-router-dom";
import FavoritesPresentational from "../components/FavoritesPresentational.jsx";

const Favorites = ({ curUser, setCurUser }) => {
    const [read, setRead] = useState("All");

    const obj = curUser.obj

    const handleDelete = (delIndex) => {
        const favorites = curUser.favorites.filter((_, i) => i !== delIndex);
        changeAllUsers("favorites", favorites, curUser, setCurUser);
    }

    const handleRead = (i) => {
        const favorites = curUser.favorites.map((cur, index) => index === i ? { ...cur, isRead: !cur.isRead } : cur);
        changeAllUsers("favorites", favorites, curUser, setCurUser);
    }

    const handleCheck = (e) => {
        const val = e.target.value
        Object.keys(obj).forEach((cur) => cur == val? obj[cur] = !obj[cur] : obj[cur] = false)
        console.log(obj)
        changeAllUsers("obj", obj, curUser, setCurUser)
    }

    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1>Favorites</h1>
                <Link to='/'>Home</Link>
                <Link to='/favorites'>Favorites</Link>
                <button onClick={() => setCurUser({})}>Log Out</button>
            </div>

            <div>
                <input type="radio" id="all" value='all' name="idk" checked={obj.all} onChange={(e)=>handleCheck(e)}/>
                <label htmlFor="all">All</label>
                <input type="radio" value='read' id="read" name="idk" checked={obj.read}  onChange={(e)=>handleCheck(e)}/>
                <label htmlFor="read">Read</label>
                <input type="radio" value='unread' id="unread" name="idk" checked={obj.unread} onChange={(e) => handleCheck(e)}/>
                <label htmlFor="unread">Unread</label>
            </div>

            <div>
                <FavoritesPresentational curUser={curUser} obj={obj} handleDelete={handleDelete} handleRead={handleRead}/>
            </div>
        </div>
    );
}

export default Favorites;