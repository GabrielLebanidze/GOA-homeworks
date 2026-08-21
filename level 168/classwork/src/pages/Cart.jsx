import Navig from "../components/Navig.jsx"
import { Link } from "react-router-dom"
import { useCart } from "../Hooks/useCart.js"


function Cart() {

    const { curUser, remove, order } = useCart()

    const price = curUser.cart.reduce((acc, product) => { return acc + product.price }, 0).toFixed(2)

    return (
        <>
            <Navig /><br />
            {curUser.cart.length ? <> {curUser.cart.map((product) => {
                return (
                    <div key={product.id} style={{ border: '5px solid black', width: 500, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <p>{product.title}</p>
                        <p>price: {product.price}</p>
                        <p>category: {product.category}</p>
                        <img src={product.image} style={{ width: 200 }} /><br />
                        <button value={product.id} onClick={remove} >remove from cart</button><br />
                        <Link to={`/product/${product.id}`}>see details</Link>
                    </div>
                )
            })}
            <p>total price: {price}</p>
            <button onClick={() => order(price)}>order items</button>
            </>
            : <p>no products added</p>}<br />
        </>
    )
}

export default Cart