// for in გამოიყენება იმისთვის რომ ადვილად მივწვდეთ ობიექტის ყველა key-ს. for of გამოიყენება იმისთვის, რომ მნიშვნელობებს მივწვდეთ სიაში.

//for in მაგალითი

const idk = {
    idk: "yappington",
    aaaaaaa: "aaaaaaaaaa"
}

for (let i in idk){
    console.log(i)
}

//for of

const idk1 = [1, 2, 3, 4, 5]

for (let i of idk1){
    console.log(i)
}