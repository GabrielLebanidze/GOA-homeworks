import { useContext } from "react"
import { AuthContext } from "../context/AuthContext.jsx"
import { Link } from "react-router-dom"

function History() {
    const { curUser } = useContext(AuthContext)
    return (
        <>
            {curUser.orderHistory.map((cur) => {
                return (
                    <div key={cur.time} style={{border: '5px solid black'}}>
                        <p>order time: {cur.time}</p>
                        <p>products: {cur.products.map((cur) => cur.title)}</p>
                        <p>total price: {cur.price}</p>
                    </div>
                )
            })}
            <Link to={'/profile'}>close history</Link>
        </>
    )
}

export default History