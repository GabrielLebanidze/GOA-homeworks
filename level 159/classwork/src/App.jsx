import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Articles from './pages/Articles'
import Article from './pages/Article'
import Home from './pages/Home'



function App() {
  return(
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/articles' element={<Articles />}/>
        <Route path='/articles/:article' element={<Article />} />
        <Route path='*' element={<h1>404 error</h1>}/>
    </Routes>
  )
}

export default App
