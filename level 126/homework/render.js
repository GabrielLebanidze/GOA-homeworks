import { searchInfo } from "./searchInfo.js"
import { getLocal } from "./localStorage.js"


async function render(){
    const div = document.getElementById('info')
    const d = getLocal('info')
    const l = getLocal('light') ? 'light' : 'dark'
    let dd = new Date(d.created_at)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    if(d){
        div.innerHTML = `        
        <div id="bro">
            <p>devfinder</p>
            <button id="btn">${l} mode</button>
        </div>
        <form class="${l}">
            <div>
                <p>🔍</p>
                <input type="text" placeholder="Search GitHub username..." name="search" class="${l}">
            </div>
            <button class="${l}">Search</button>
        </form>
        <div class="bruh ${l}">
            <img src="${d.avatar_url}" alt="pfp">
            <div id="right">
                <div class="idk" id="aa">
                    <p>${d.name}</p>
                    <p>joined ${dd.getDate()} ${months[dd.getMonth()]} ${dd.getFullYear()}</p>
                </div>
                <p>${d.login}</p>
                <p>${d.bio ? d.bio : 'this profile has no bio'}</p>
                <div class="${l} stats">
                    <div class="idk">
                        <p>repos</p>
                        <p>${d.public_repos}</p>
                    </div>
                    <div class="idk">
                        <p>followers</p>
                        <p>${d.followers}</p>
                    </div>
                    <div class="idk">
                        <p>following</p>
                        <p>${d.following}</p>
                    </div>
                </div>
                <div id="bottom">
                    <div class="idk1">
                        <p>📍 ${d.location ? d.location : 'this profile has no location'}</p>
                        <p>🔗 ${d.blog ? d.blog : 'this profile has no blog'}</p>
                    </div>
                    <div class="idk1">
                        <p>${d.twitter_username ? d.twitter_username : 'this profile has no twitter'}</p>
                        <p>${d.company ? d.company : 'this profile has no company'}</p>
                    </div>
                </div>
            </div>
        `
    }
}

export default render