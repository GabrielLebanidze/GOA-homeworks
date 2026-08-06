const idk = {
    name: "gabro",
    age: 15,
    height: 176
}

// const input = prompt()
// console.log(idk[input])

const aaaa = Object.entries(idk)

for (let i of aaaa){
    console.log(`${i[0]}: ${i[1]}`)
}

// დესტრუქცია არის ობიექტიდან ან სიიდან ცვლადების შექმნა, ობიექტის ან სიის თანმიმდევრობით უტოლდება შექმნილი ცვლადები. მაგ: მოცემულია let idk = [1, 2, 3]
// let [a, b, c] = idk, აქ a გაუტოლდება 1-ს, b 2-ს, c 3-ს.

