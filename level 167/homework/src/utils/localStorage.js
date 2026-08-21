const getLocal = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const setLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export { getLocal, setLocal };