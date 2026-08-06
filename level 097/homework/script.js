// addEventListener არის მოვლენის მსმენელი, რაღაც მოვლენის დროს რაღაც უნდა მოხდეს. გადაეცემა 2 არგუმენტი, მოვლენა და ფუნქცია, რომელიც უნდა გაეშვას რაიმე მოვლენის დროს.
const btn = document.querySelector("button")
const p = document.querySelector("p")

let checker = true

btn.addEventListener("click", () => {
    if (checker){
        checker = !checker
        p.innerHTML = "no"
    }else{
        checker = !checker
        p.innerHTML = "yes"
    }
})

const div = document.querySelector("div")
const randBtn = document.querySelector("#idk")

randBtn.addEventListener("click", () => {
    div.style.backgroundColor = `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`
})

const p1 = document.querySelector("#a")
const btn1 = document.querySelector("#aa")

btn1.addEventListener("click", () => {
    p1.innerHTML += "gabro "
})

const p2 = document.querySelector("#aaa")
const btn2 = document.querySelector("#aaaa")

const anbani = "abcdefghijklmnopqrstuvwxyz"
const ferebi = ["red", "black"]

btn2.addEventListener("click", () => {
    p2.innerHTML = `${anbani[Math.floor(Math.random()*anbani.length)]}`
    p2.style.color = `${ferebi[Math.floor(Math.random()*2)]}`
})

