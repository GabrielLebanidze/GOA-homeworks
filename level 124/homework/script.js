/*fetch არის ასინქრონული ფუნქცია რომლითაც ინფორმაციის წამოღების მოთხოვნას ვგზავნით რამე სერვერზე. წარმატების შემთხვევაში პასუხს დააბრუნებს .then მეთოდი,
ერორის შემთხვევაში .catch მეთოდი, ორივეს callback ფუნქცია გადაეცემა. .finally მეთოდი ნებაყოფლობითია და ნებისმიერ შემთხვევაში დააბრუნებს პასუხს, მასაც callback ფუნქცია გადაეცემა.
*/

let div = document.querySelector("div")

let users = []

fetch("https://fakestoreapi.com/users")
    .then((pasuxi) => pasuxi.json())
    .then((yes) => {
        for(let i of yes){
            users.push(i)        
        }
        render()
    })
    .catch((error) => error)


function render(){
    users.forEach((i, ind) => {
    div.innerHTML += `
        <div class="card">
            <h1 class="user">username: ${i.username}</h1>
            <p class="email">email: ${i.email}</p>
            <p>password: ${i.password}</p>
            <button onclick="deletee(${ind})">delete</button>
        </div>
    `    
})
}


function deletee(a){
    users.splice(a, 1)
    console.log(users)
    div.innerHTML = ''
    render()
}