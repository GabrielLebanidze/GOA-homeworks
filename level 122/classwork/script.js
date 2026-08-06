let idk = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(true){
            resolve("yes")
        }
    }, 2000);
})

setTimeout(() => {
    console.log(idk)
}, 2001);

let idk1 = new Promise((resolve, reject) => {
    let input = prompt("enter number here")
    setTimeout(() => {
        if(Number(input) % 2 == 0){
            resolve("yes")
        }else{
            reject("no")
        }
    }, 3000);
})

setTimeout(() => {
    console.log(idk1)
}, 3001);