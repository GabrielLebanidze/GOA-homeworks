import { useContext } from "react"
import { MovieContext } from "../context/MovieProvider"
import { ThemeContext } from "../context/ThemeProvider"

function Favorites() {
    let { favs } = useContext(MovieContext)
    let {dark, toggleTheme} = useContext(ThemeContext)

    return (
        favs.map((cur, ind) => {
            return (
                <div key={ind} style={{backgroundColor:dark? "black" : "white", width:300, height:300}}>
                    <h1>{cur}</h1>
                    <button value={cur} onClick={(e) => addFav(e)}>add to favorites</button>
                </div>
            )
        })
    )
}

export default Favorites