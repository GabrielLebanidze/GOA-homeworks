let p = document.createElement("p")
let btn = document.createElement("button")
let div = document.createElement("div")

div.appendChild("p")
div.appendChild("button")
div.appendChild("div")

div.insertBefore("p", "button")
div.insertBefore("button", "p")
div.insertBefore("form", "div")

btn.remove()
p.remove()
div.firstElementChild.remove()

div.removeChild(div[0])
div.removeChild(div[1])
div.removeChild(div[2])