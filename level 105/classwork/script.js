let div = document.querySelector("div")

let a = document.createElement("p")
a.textContent = "idk"

let b = document.createElement("div")
b.textContent = "gabo"

let c = document.createElement("li")
c.textContent = "guh"

let d = document.createElement("div")
d.textContent = "aaaaaa"

let e = document.createElement("a")
e.textContent = "lorem"

let idk = [a, b, c, d, e]

for (let i = 0; i < 5; i++){
    div.appendChild(idk[i])
}

a.remove()
e.remove()
