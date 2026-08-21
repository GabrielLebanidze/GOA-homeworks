import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'


function App() {
    


    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='*' element={<h1>404 error</h1>}/>
        </Routes>
    )
}

export default App
