import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Favorites from './Pages/Favorites'
import Profile from './Pages/Profile'

function App() {
  // const accounts = JSON.parse(localStorage.getItem("accounts")) || []

  let [curUser, setCurUser] = useState(() => {
    const accounts = JSON.parse(localStorage.getItem("accounts")) || []
    if(accounts.some(a => a.active)){
      return accounts.find(a => a.active)      
    }else return {active:false}
  })
  


  const home = <Home curUser={curUser} setCurUser={setCurUser}/>
  return(
    <>
      <Routes>
        <Route path='/' element={curUser.active ? home : <Register />}/>
        <Route path='/login' element={curUser.active ? home : <Login setCurUser={setCurUser}/>}/>
        <Route path='/home' element={curUser.active ? home : <Register />} />
        <Route path='/favorites' element={curUser.active ? <Favorites curUser={curUser} setCurUser={setCurUser}/> : <Register />}/>
        <Route path='/test' element={home} />
        <Route path='*' element={<h1>404 page not found</h1>}/>
      </Routes>
    </>

  )
}

export default App
