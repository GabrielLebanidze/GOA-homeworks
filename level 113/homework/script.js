let inputs = document.getElementsByTagName("input")
let btn = document.querySelector("button")
btn.addEventListener("click", (event) => {
    event.preventDefault()
    for(let i of inputs){
        console.log(i.value)
    }
})