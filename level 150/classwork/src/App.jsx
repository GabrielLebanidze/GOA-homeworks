import { useEffect, useState } from "react";

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(err => console.log("Error:", err))
    }, [])

    console.log(products);
    
    return (
        <main> 
            {products.map((cur, ind) => {
              return(
              <div>
                <h1>{cur.title}</h1>
                <p>{cur.price}</p>
                <p>{cur.description}</p>
                <img src={cur.image} alt="image" />
                <p>{cur.category}</p>
              </div>
              )
            })}
        </main>
    );
}

export default App;
