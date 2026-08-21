import Idk from "./idk";

const FavoritesPresentational = ({ curUser, obj, handleDelete, handleRead }) => {
    if (obj.all) {
        return !(curUser.favorites.length) ? <h3>No favorites</h3> :
            curUser.favorites.map((cur, index) => {
                return (
                    <div key={index} style={{ border: "2px solid black", marginTop: 10, padding: 15 }}>
                        <img src={cur.src} alt={cur.title} style={{ height: 200 }} />
                        <h5>{cur.title}</h5>
                        <p>Year: {cur.year}</p>
                        <p>Author: {cur.author}</p>
                        <label htmlFor={index}>Read: </label>
                        <input type="checkbox" id={index} checked={cur.isRead} onChange={() => handleRead(index)} />
                        <br /><br />
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                )
            })
    } else if (obj.read) {
        return !(curUser.favorites.length) ? <h3>No favorites</h3> :
            curUser.favorites.map((cur, index) => {
                if (cur.isRead) {
                    return (
                        <div key={index} style={{ border: "2px solid black", marginTop: 10, padding: 15 }}>
                            <img src={cur.src} alt={cur.title} style={{ height: 200 }} />
                            <h5>{cur.title}</h5>
                            <p>Year: {cur.year}</p>
                            <p>Author: {cur.author}</p>
                            <label htmlFor={index}>Read: </label>
                            <input type="checkbox" id={index} checked={cur.isRead} onChange={() => handleRead(index)} />
                            <br /><br />
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    );
                }
            })
    } else if (obj.unread) {
        return !(curUser.favorites.length) ? <h3>No favorites</h3> :
            curUser.favorites.map((cur, index) => {
                if (!cur.isRead) {
                    return (
                        <div key={index} style={{ border: "2px solid black", marginTop: 10, padding: 15 }}>
                            <img src={cur.src} alt={cur.title} style={{ height: 200 }} />
                            <h5>{cur.title}</h5>
                            <p>Year: {cur.year}</p>
                            <p>Author: {cur.author}</p>
                            <label htmlFor={index}>Read: </label>
                            <input type="checkbox" id={index} checked={cur.isRead} onChange={() => handleRead(index)} />
                            <br /><br />
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    )
                }
            })
    }
}

export default FavoritesPresentational