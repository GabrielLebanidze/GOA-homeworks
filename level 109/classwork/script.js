const box = document.querySelector("#box");
let left = 0;
let up = 0


const myAnimation = setInterval(() => {
    if (left <= 170 && up == 0){
        left++
    }else if (left >= 170 && up <= 170){
        up++
    }else if (left >= 0 && up >= 170){
        left--
    }else if (left <= 0 && up >= 0){
        up--
    }
    box.style.left = `${left}px`;
    box.style.top = `${up}px`
    console.log("interval ფუნქცია გაეშვა");
}, 1)

box.addEventListener("click", () => {
    clearInterval(myAnimation);
})