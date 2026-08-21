import { createContext, useEffect, useState } from "react";


export const ProductContext = createContext()

function ProductProvider({ children }){

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    async function fetchProducts(){
        try{
            const d = await fetch('https://fakestoreapi.com/products')
            const data = await d.json()
            setProducts(data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts()
        setLoading(false)
    }, [])

    return(
        <ProductContext.Provider value={{products, fetchProducts, loading, setLoading}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider