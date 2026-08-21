import { getLocal } from "./localStorage.js"
import render from "./render.js"
import { light } from "./light.js"
import { searchInfo } from "./searchInfo.js"

const search = document.querySelector('form')

document.addEventListener('submit', async (e) => {
    e.preventDefault()
    if (e.target.className === 'light' || e.target.className === 'dark') {
        await searchInfo(e)
        render()
    }
})

document.addEventListener('click', function (e) {
    if (e.target.id === 'btn') {
        light()
        render()
    }
});

render()