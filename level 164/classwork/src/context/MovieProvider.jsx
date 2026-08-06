import { createContext, useState } from "react"

export let MovieContext = createContext()

function MovieProvider({ children }){
    let [movies, setMovies] = useState([])
    let [favs, setFavs] = useState([])

    function addMovie(){
        let input=prompt("enter movie name")
        setMovies([...movies, input])
    }

    function addFav(e){
        const val = e.target.value
        if(!favs.includes(val)) setFavs([...favs, val])
    }

    return(
        <MovieContext.Provider value={{movies, addMovie, favs, addFav}}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieProvider