let movies = [{name: "idk", rah: "bro"}, {name: "gabo", rah: "broski"}]

let btn = document.querySelector("button")


btn.addEventListener("click", () => {
    let newer = movies.filter((val, ind) => {
        return val.name != "gabo"
    })
    movies = newer
    console.log(movies)
})