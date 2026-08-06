import fetchData from "../utils/fetchData"
import NavBar from "../components/NavBar"
import { useEffect, useState } from "react"
import { getLocal, setLocal } from "../utils/localStorage"

function Home({ curUser, setCurUser }) {
    const accounts = getLocal()
    let [info, setInfo] = useState(false)
    let [error, setError] = useState(false)

    useEffect(() => {
        async function load() {
            let data = await fetchData()
            setInfo(data)
        }

        load()
    }, [])

    function addToFavorites(e) {
        let title = e.target.parentElement.children[0].innerHTML
        let alreadyExists = curUser.favorites.some(a => a.title == title)
        if (!alreadyExists) {
            setError(false)
            accounts[accounts.indexOf(accounts.find((a) => a.active === true))].favorites.push(info.find((book) => book.title == title))
            setCurUser({ ...curUser, favorites: [...curUser.favorites, info.find((book) => book.title == title)] })
            setLocal(accounts)
        }else setError(title)
    }

    return (
        <>
            <NavBar setCurUser={setCurUser}/>
            <div>
                {info ? info.map((cur, ind) => {
                    return (
                        <div key={cur.id} style={{ border: '2px solid red', width: 500, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <p>{cur.title}</p>
                            <p>author: {cur.authors.length ? cur.authors[0].name : "unknown"}</p>
                            <img src={cur.formats['image/jpeg']} style={{ width: 200, height: 300 }} />
                            <p style={{ textAlign: "center" }}>{cur.bookshelves}</p>
                            <button onClick={addToFavorites}>add to favorites</button>
                            {error === cur.title ? <p key={ind} style={{color:'red'}}>already added</p> : undefined}
                        </div>
                    )
                }) : <p>loading</p>}
            </div>
        </>
    )
}

export default Home