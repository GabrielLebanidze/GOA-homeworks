function getLocal(key){
    return JSON.parse(localStorage.getItem(key))
}

function setLocal(key, value){
    localStorage.setItem(key, JSON.stringify(value))
}

export { getLocal, setLocal }