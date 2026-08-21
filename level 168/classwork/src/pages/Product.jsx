import { useParams } from "react-router-dom"
import Navig from "../components/Navig.jsx"
import { useCart } from "../Hooks/useCart.js"

function Product() {

    const { error, addCart, products, loading } = useCart()
    const { id } = useParams()

    if(loading){
        return(
            <>
                <Navig />
                <p>loading...</p>
            </>
        )
    }else{
        const product = products.find(a => a.id == id)
        console.log(products)
        if(!product){
            return(
                <>
                    <Navig />
                    <p>product not found</p>
                </>
            )
        }else{
            return(
                <>
                    <Navig />
                    <div>
                        <h1>{product.title}</h1>
                        <img src={product.image} style={{width:300}} />
                        <p>category: {product.category}</p>
                        <p>price: {product.price}</p>
                        <p>description: {product.description}</p>
                        <p>rate: {product.rating.rate}, count: {product.rating.count}</p>
                        <button value={product.id} onClick={addCart}>add to cart</button>
                        <p style={{color:'red', height:10}}>{error.e ? 'already added' : ''}</p>
                    </div>
                </>
            )
        }
    }
}

export default Product