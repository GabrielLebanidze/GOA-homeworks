import { setLocal } from "./localStorage.js"

async function searchInfo(e) {
    try{
        const response = await fetch(`https://api.github.com/users/${e.target.search.value}`)
        const data = await response.json()
        setLocal('info', data)
    }catch(error){
        console.log(error)
    }

}

export { searchInfo }