//getelementbyid, addeventlistener, style, 

// ბრაუზერში ჩვენი ვებსაიტი გამოდის parsing (ჯერ html გარდაიქმნება javascript ობიექტად), manipulation (v8 კითხულობს გარდაქმნილ html-ს) და render-ის (browser rendering მოწყობილობას გამოაქვს შედეგი) საშუალებით. 
// dom ანუ document object model არის html-ის სტრუქტურა

let btn = document.getElementById("btn")
let dv = document.getElementById("dv")

btn.addEventListener("click", () => {
    if (dv.style.backgroundColor != "red"){
        dv.style.backgroundColor = "red";
    } else {
        dv.style.backgroundColor = "blue"
    }
})


let btn1 = document.getElementById("btn1")
let dv1 = document.getElementById("dv1")
let idk = 50

btn1.addEventListener("click", () => {
  idk = idk + 10;
  let d = document.getElementById("dv1");
  d.style.width = idk + "px";
  d.style.height = idk + "px";
})


let btn2 = document.getElementById("btn2")
let p = document.getElementById("name")

btn2.addEventListener("click", () => {
    p.innerHTML += " lebanidze"
})

let btn3 = document.getElementById("btn3")
let p1 = document.getElementById("1")

btn3.addEventListener("click", () => {
    p1.innerHTML *= 2
})