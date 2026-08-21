import { useState } from "react";
import { fetchBooks } from "../utils/fetchBooks.js";
import { getLocal, setLocal } from "../utils/localStorage.js";
import { Link } from "react-router-dom";

const Home = ({ curUser, setCurUser }) => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    console.log(books);

    const handleSearch = (e) => {
        e.preventDefault();

        const book = e.target.book.value;

        fetchBooks(book).then(data => setBooks(data));
    }

    const addToFavorites = (cur) => {
        const bool = curUser.favorites.some(obj => obj.title === cur.title && obj.author === cur.author);

        if (!bool) {
            const users = getLocal("users");
            const newCurUser = { ...curUser, favorites: [...curUser.favorites, cur] };

            setLocal("users", users.map(obj => obj.email === curUser.email? newCurUser : obj))
            setCurUser(newCurUser);
        }
    }

    return (
        <main onSubmit={handleSearch}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1>Home</h1>
                <Link to='/'>Home</Link>
                <Link to='/favorites'>Favorites</Link>
                <button onClick={() => setCurUser({})}>Log Out</button>
            </div>

            <form style={{ display: "flex", gap: 10 }}>
                <label htmlFor="book">Book</label>
                <input type="text" name="book" id="book" placeholder="Search book..." required />
            </form>

            <h2>Books List</h2>
            <div>
                {
                    isLoading ? <h4>Loading...</h4> : (!books.length ? <h4>No books</h4> : books.map((cur, index) => {
                        return (
                            <div key={index} style={{ border: "2px solid black", marginTop: 10, padding: 15 }}>
                                <img src={cur.src} alt={cur.title} style={{ height: 200 }} />
                                <h5>{cur.title}</h5>
                                <p>Year: {cur.year}</p>
                                <p>Author: {cur.author}</p>
                                <button onClick={() => addToFavorites({ ...cur, isRead: false })}>Add to favorites</button>
                            </div>
                        );
                    }))
                }
            </div>
        </main>
    );
}

export default Home;