/*
map არის ობიექტის კონსტრუქტორი ფუნქცია. მას აქვს თავისი მეთოდები, ობიექტია ოღონდ უკეთესი ვერსია, ნორმალურ ობიექტს ჯობია რადგან მუდმივი ცვლილებისას ამის გამოყენება 
უფრო ნაკლებ ენერგიას ხარჯავს და ასევე ნორმალურ ობიექტში key-ს ნებისმიერ მონაცემთა ტიპს ვერ გახდი, map-ში შეგიძლია.

set არის ობიექტის კონსტრუქტორი ფუნქცია, მასაც აქვს თავისი მეთოდები და გამოიყენება იმისთვის რომ სიაში მხოლოდ უნიკალური მონაცემები დატოვო.

stack და heap არის ადგილები სადაც სხვადასხვა სახის მონაცამები ინახება. stack-ში ინახება ადვილი ტიპის მონაცემები, მაგალითად string, number, ასევე მისამართები იმ
რთულ მონაცემთა ტიპებისთვის რომლებიც heap-ში ინახება. stack-ში მონაცემები თანმიმდევრობით ინახება.

heap არის ადგილი სადაც რთული მონაცემთა ტიპები არათანმიმდევრულად ინახება. რთული მონაცემთა ტიპებია მაგალითად ობიექტი, სია, ფუნქცია.
*/

let idk = new Map([["gabro", 10], ["mesxi", 2], ["idk", 6]])


function aaa(input){
    if(input == "gabro"){
        return idk.get("gabro")
    }else{
        return "n o"
    }
}
//console.log(aaa("gabro"))
//console.log(aaa("bro"))

let aaaaa = new Set([1, 1, 2, 3, 4, 5, 5, 6, 6, 7])

console.log(aaaaa)

function test(input){
    if(aaaaa.has(input)){
        return "aris"
    }else{
        return "ar aris"
    }
}

let array = ["gabro", "gabro", "tazo", "kuka", "ceycey", "ceycey"]

let arvici = new Set(array)
let namesList = new Map()

for(let i of arvici){
    namesList.set(i, i.length)
}

console.log(namesList)