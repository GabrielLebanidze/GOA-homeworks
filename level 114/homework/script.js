/* local storage aris adgili sadac inaxeba informacia mxolod shens kompiutershi, sxvas aravis aq wvdoma.
event obieqti aris obieqti, romelic gamoiyeneba ragacistvis event handler funqciis damatebisas. am obieqts aqvs mnishvnelovani metodebi, magalitad preventDefault().
*/
let inputs = document.getElementsByTagName("input")
let btn = document.querySelector("button")

const users = JSON.parse(localStorage.getItem("users")) || []

btn.addEventListener("click", (event) => {
    event.preventDefault()
    users.push({name: inputs.name.value, lastName: inputs.lastName.value, age: inputs.age.value, gender: inputs.gender.value})
    localStorage.setItem("users", JSON.stringify(users))
})