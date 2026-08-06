let div = document.querySelector("div")

fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        div.innerHTML = ""
        data.forEach(cur => {
            div.innerHTML += `
                <div id="${cur.id}">
                    <h2>${cur.title}</h2>
                    <img src="${cur.image}">
                    <p>price:${cur.price}</p>
                    <p>${cur.description}</p>
                    <p>${cur.category}</p>
                </div>
            `
        });
    })
    .catch((error) => console.log(error))
    .finally((response) => console.log("idk"))

