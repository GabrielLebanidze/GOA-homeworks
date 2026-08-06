let inputs = document.getElementsByTagName("input")
let submit = document.querySelector("button")
let sortPrice = document.getElementById("sortPrice")
let sortQuantity = document.getElementById("sortQuantity")
let renderDiv = document.querySelector("div")
let sortRange = document.getElementById("sortRange")
let ranges = document.getElementsByClassName("range")

let products = []


submit.addEventListener("click", (event) => {
    event.preventDefault()
    if(inputs.name.value && inputs.quantity.value && inputs.price.value){
        products.push({name: inputs.name.value, quantity: inputs.quantity.value, price: inputs.price.value, idk: 1})
    }
    render()
})

function render() {
    renderDiv.innerHTML = ""
    products.forEach((cur, ind) => {
        renderDiv.innerHTML += `
            <div id=${ind}>
                <h1>#${ind + 1}</h1>
                <h1>name: ${cur.name}</h1>
                <h2>price: ${cur.price}</h2>
                <h3>quantity: ${cur.quantity}</h3>
                <button onclick="incr(${ind})">+</button>
                <p>amount: ${cur.idk}</p>
                <button onclick="decr(${ind})">-</button>
                <p>jamuri fasi: ${cur.price * cur.idk}</p>
                <button onclick="deletee(${ind})">delete<button>
            </div>
        `
    });
}

function incr(a){
    if(products[a].idk < products[a].quantity){
        products[a].idk += 1 
    }
    render()
}

function decr(a){
    if(products[a].idk > 1){
        products[a].idk -= 1        
    }
    render()
}

sortPrice.addEventListener("click", () => {
    products.sort((a, b) => b.price - a.price)
    render()
})

sortQuantity.addEventListener("click", () => {
    products.sort((a, b) => b.quantity - a.quantity)
    render()
})

function deletee(a){
    products.splice(a, 1)
    render()
}

sortRange.addEventListener("click", (e) => {
    products = products.filter((cur) => cur.price >= ranges.range.value && cur.price <= ranges.range1.value)
    console.log(products)
    render()
})

