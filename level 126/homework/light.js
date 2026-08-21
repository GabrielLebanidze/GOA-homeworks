import { getLocal, setLocal } from "./localStorage.js"

function light(){
    let light = getLocal('light') || false
    setLocal('light', !light)
}

export { light }