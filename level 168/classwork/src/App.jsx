import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Product from './pages/Product.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import ProtectedAuth from './components/ProtectedAuth.jsx'
import Profile from './pages/Profile.jsx'
import Cart from './pages/Cart.jsx'
import History from './pages/History.jsx'

function App() {


    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={
                <ProtectedAuth>
                    <Register />                    
                </ProtectedAuth>
            } />
            <Route path='/login' element={
                <ProtectedAuth>
                    <Login />
                </ProtectedAuth>
            } />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/profile' element={
                <ProtectedRoute>
                    <Profile />
                </ProtectedRoute>
            }>
                <Route path='/profile/history' element={<History />}/>
            </Route>
            <Route path='/profile/cart' element={
                <ProtectedRoute>
                    <Cart />
                </ProtectedRoute>
            } />
            
            <Route path='*' element={<h1>404 page not found</h1>}/>
        </Routes>
    )
}

export default App
