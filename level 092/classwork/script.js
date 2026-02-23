// const mapClone = (arr, fn) => {
//     const newArr = []
//     for (let i = 0; i < arr.length; i++){
//         const result = fn(arr[i], i, arr)
//         newArr.push(result)
//     }
//     return newArr
// }

const idk = [2, 21, 22, 4, 5, 6, 50]

// console.log(mapClone(idk, (a, b, c) => a * 2))

console.log(idk.every((a, b, c) => a > 20))

const names = ["gabo", "tazo", "sandro", "dato"]

const newArr = []
const newer = []

for (let i = 0; i < names.length; i++){
    if (names[i][0] == "s"){
        newArr.push(names[i])
    }
}

console.log(newArr)


// const filterClone = (arr, fn) => {
//     const newArr = []
//     for (let i = 0; i < arr.length; i++){
//         if (fn(arr[i], i, arr) == true){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(filterClone(idk, (a, b, c) =>{
//     for (let i = 0; i < idk.length; i++){
//         if (a != 2){
//             return true
//         }else {
//             return false
//         }
//     }
// }))

console.log(names.every((a, b, c) => a.length > 6))

const myself = {
    firstname: "gabriel",
    secondname: "lebanidze",
    age: 15,
    height: "1.75m",
    weight: "65kg"
}

console.log(`my name is ${myself["firstname"]} ${myself["secondname"]}. i am ${myself["age"]} years old. my height is ${myself["height"]}. i weigh ${myself["weight"]}`)

