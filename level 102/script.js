// getElementById-ს ელემენტი მოაქვს html-დან id-ით. getElementByTagName-ს მოაქვს ელემენტი html-დან თეგის სახელით, getElementByClassName-ს კლასით, querySelector-ს შეუძლია
// რომ წამოიღოს ელემენტი თეგის სახელით, id-ით და კლასითაც, ოღონდ id-ს თუ ვწერთ უნდა დავიწყოთ #-ით წერა, თუ კლასს .-ით. querySelectorAll-ს ყველა ის ელემენტი მოაქვს რასაც ჩაწერ.
// მაგ: თუ თეგის სახელს ჩაწერ ყველა იმ თეგს წამოიღებს html-დან.

let img = document.querySelector("img")
let btns = document.querySelectorAll("button")

let imgs = ["1.jpg", "2.jpg", "3.jpg", "4.png", "5.png"]
let i = 0

btns[0].addEventListener("click", () => {
    if (i != imgs.length - 1){
        i += 1
        img.src = imgs[i]
    }
})

btns[1].addEventListener("click", () => {
    if (i != 0){
        i -= 1
        img.src = imgs[i]
    }
})