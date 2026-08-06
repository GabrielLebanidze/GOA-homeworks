function getLocal(){
    return JSON.parse(localStorage.getItem("accounts"))
}

function setLocal(value){
    localStorage.setItem("accounts", JSON.stringify(value))
}

export {getLocal, setLocal}