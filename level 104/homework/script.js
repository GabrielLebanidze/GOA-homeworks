let button = document.getElementById("idk")
let darkmode = false

button.addEventListener("click", () => {
    if (darkmode) {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        button.innerText = "dark mode"
        darkmode = false
    }else {
        document.body.style.backgroundColor = "#121212"
        document.body.style.color = "white"
        button.innerText = "light mode"
        darkmode = true
    }
})

let div = document.querySelector("div")
let add = document.getElementById("btn")
let count = 0

add.addEventListener("click", () => {
    let input = prompt("enter your task here")
    let div1 = document.createElement("div")
    let p = document.createElement("p")
    p.innerHTML = input
    let btn = document.createElement("button")
    div1.appendChild(p)
    div1.appendChild(btn)
    div.appendChild(div1)
    btn.onclick = () => {
        btn.parentElement.remove()
    }
})

