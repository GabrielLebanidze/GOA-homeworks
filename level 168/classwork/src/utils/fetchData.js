async function fetchData() {
    try {
        const d = await fetch('https://fakestoreapi.com/products')
        const data = await d.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export { fetchData }