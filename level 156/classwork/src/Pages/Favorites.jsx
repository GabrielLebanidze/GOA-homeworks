import NavBar from "../components/NavBar"
function Favorites({ curUser, setCurUser }) {
    const accounts = JSON.parse(localStorage.getItem("accounts"))

    function removeFavorite(e){
        let title = e.target.parentElement.children[0].innerHTML
        let favorites = accounts[accounts.indexOf(accounts.find(a => a.active == true))].favorites
        favorites.splice(favorites.indexOf(favorites.find(a => a.title === title)), 1)
        localStorage.setItem("accounts", JSON.stringify(accounts))
        setCurUser({ ...curUser, favorites})
    }

    return (
        <>
            <NavBar setCurUser={setCurUser}/>
            <div>
                {curUser.favorites.length ? curUser.favorites.map((cur) => {
                    return (
                        <div key={cur.id} style={{ border: '2px solid red', width: 500, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <p>{cur.title}</p>
                            <p>author: {cur.authors.length ? cur.authors[0].name : "unknown"}</p>
                            <img src={cur.formats['image/jpeg']} style={{ width: 200, height: 300 }} />
                            <p style={{ textAlign: "center" }}>{cur.bookshelves}</p>
                            <button onClick={removeFavorite}>remove from favorites</button>
                        </div>
                    )
                }) : <p>you have no favorites</p>}
            </div>
        </>
    )
}

export default Favorites