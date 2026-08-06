let add = document.querySelector("button")
let clear = document.getElementById("clear")
let random = document.getElementById("random")
let div = document.querySelector("div")


let movies = []

add.addEventListener("click", () => {
    let name = prompt("enter movie name here")
    let pic = prompt("enter movie pic URL here")
    if (name && pic){
        movies.push({name, pic})
    }
    renderMovies()
})

let renderMovies = () => {
    div.innerHTML = ""
    movies.forEach((val, ind) => {
        div.innerHTML += `
            <div>
                <p>#${ind + 1}</p>
                <h1>${val.name}</h1>
                <img src="${val.pic}"><br>
                <button class="delete">delete</button>
            </div>
        `
        let buttons = document.querySelectorAll(".delete")

        buttons.forEach((val, ind) => {
            val.addEventListener("click", () => {
                
            })
        })
    })
}


let deleteMovie = (index) => {
    let filtered = movies.filter((val, ind) => {
        
    })
}
