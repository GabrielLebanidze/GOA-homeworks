import Navig from "../components/Navig.jsx"
import { useForm } from "../Hooks/useForm.js"
import { Link } from "react-router-dom"
import { useCart } from "../Hooks/useCart.js"
import { useEffect, useState } from "react"


function Home() {
    const { handleSubmit } = useForm()

    const { error,  addCart, products, loading } = useCart()

    const [productss, setProductss] = useState([])

    useEffect(() => {
        setProductss([...products])
    }, [products])

    function search(formData){
        if(!formData.search.length){
            setProductss([...products])
            return
        }
        setProductss([...products].filter((a) => a.title.toLowerCase().includes(formData.search.toLowerCase())))
    }

    return (
        <>
            <Navig /><br />
            <form onSubmit={(e) => handleSubmit(e, search)}>
                <label htmlFor="search">search product</label><br />
                <input type="text" name="search" id="search"/>
                <button>search</button>
            </form><br /><br />
            {loading ? <p>loading...</p> : productss.map((product) => {
                return (
                    <div key={product.id} style={{ border: '5px solid black', width: 500, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <p>{product.title}</p>
                        <p>price: {product.price}</p>
                        <p>category: {product.category}</p>
                        <img src={product.image} style={{ width: 200 }} /><br />
                        <button value={product.id} onClick={addCart}>add to cart</button><br />
                        <Link to={`/product/${product.id}`}>see details</Link>
                        <p style={{color:'red', height:10}}>{error.e && error.id == product.id ? 'already added' : ''}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Home