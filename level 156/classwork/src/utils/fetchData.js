async function fetchData() {
    try {
        let response = await fetch("https://gutendex.com/books")
        let data = await response.json()
        let result = data.results
        console.log(result)
        return result
    }catch (error){
        console.log(error)
    }
}

export default fetchData