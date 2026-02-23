let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.splice(2,3)
let newarr = arr.splice(2,3)
console.log(newarr)
for(i = 0; i<=newarr.length; i++){
    console.log(newarr[i])
}

for(i=100; i<=200; i+=5){
    console.log(i)
}

for(i=200; i>=100; i-=5){
    console.log(i)
}