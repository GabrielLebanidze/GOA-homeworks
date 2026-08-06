import { useState } from 'react'
import Header from "./components/Header";
import Movies from "./components/Movies";
import Favorites from "./components/Favorites";

function App() {
    return(
        <>
            <Header/>
            <Movies/>
            <Favorites/>
        </>
    )
}

export default App
