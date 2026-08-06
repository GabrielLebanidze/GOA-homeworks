function SearchBar({setCity}){

    function handleSubmit(e){
        e.preventDefault()
        setCity(e.target.city.value)
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="city" placeholder="enter city name here" required/>
            <button>search</button>
        </form>
    )
}

export default SearchBar