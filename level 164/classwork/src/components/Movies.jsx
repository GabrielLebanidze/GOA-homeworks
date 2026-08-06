import { useContext } from "react"
import { MovieContext } from "../context/MovieProvider"
import { ThemeContext } from "../context/ThemeProvider"

function Movies(){
    let {movies, addMovie, addFav} = useContext(MovieContext)
    let {dark, toggleTheme} = useContext(ThemeContext)
    return(
        <>
            <button onClick={addMovie}>add movie</button>
            {movies.map((cur, ind) => {
                return(
                    <div key={ind} style={{backgroundColor:dark? "black" : "white", height:300, width:300}}>
                        <h1 style={{color:dark? "white" : "black"}}>{cur}</h1>
                        <button value={cur} onClick={(e) => addFav(e)}>add to favorites</button>
                    </div>
                )
            })}
        </>
    )
}

export default Movies