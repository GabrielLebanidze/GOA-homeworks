const input1 = document.querySelector("input")
const input2 = document.getElementById("aa")
const btn = document.querySelector("button")


btn.addEventListener("click", () => {
    if (input1.value != "" && input2.value != ""){
        console.log(Number(input1.value) + Number(input2.value))
    }
})