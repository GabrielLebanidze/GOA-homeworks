import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext.jsx"
import { ProductContext } from "../context/ProductContext.jsx"

function useCart() {
    const { products, loading } = useContext(ProductContext)
    const { setCurUser, curUser, navigate } = useContext(AuthContext)
    const [error, setError] = useState({ e: false, id: -1 })

    function addCart(e) {
        if(!Object.entries(curUser).length){
            navigate('/register')
            return
        }
        const product = products.find((a) => a.id == e.target.value)
        if (!curUser.cart.some((a) => a.id == product.id)) {
            setCurUser({ ...curUser, cart: [...curUser.cart, product] })
            return
        }
        setError({ e: true, id: e.target.value })
    }

    function remove(e){
        setCurUser({...curUser, cart: curUser.cart.filter((product) => product.id != e.target.value)})
    }

    function order(price){
        const now = new Date(Date.now())
        setCurUser({...curUser, orderHistory: [...curUser.orderHistory, {products:[...curUser.cart], price: price, time: now.toISOString()}], cart: []})
    }

    return { setCurUser, curUser, error, setError, addCart, products, loading, remove, order }
}

export { useCart }