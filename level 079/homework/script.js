let random = Number(prompt())

if (random > 50) {
    console.log("big")
}else if (25 < random < 50){
    console.log("medium")
}else{
    console.log("small")
}

switch(true) {
    case random>50:
        console.log("big")
        break
    case 25<random<50:
        console.log("medium")
        break
    case random<25:
        console.log("small")
}

random > 50 ? console.log("big") : 25<random<50 ? console.log("medium") : console.log()