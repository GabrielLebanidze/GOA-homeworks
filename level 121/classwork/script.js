let idk = new Set([])

let randoms = [1, 1, 2, 3, 3, 4, 5, 5, 6, 6]

for(let i of randoms){
    idk.add(i)
}

while(true){
    let aaa = prompt("guess")
    if(idk.has(Number(aaa))){
        console.log("you guessed right")
        idk.delete(Number(aaa))
        console.log(idk)
        break
    }
}

let mapp = new Map()

mapp.set("idk", "gyatbro")
mapp.set("hola", "yes")
console.log(mapp)
mapp.delete("idk")
mapp.get("hola")

console.log(mapp)