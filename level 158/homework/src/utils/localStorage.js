const getLocal = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const setLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const changeAllUsers = (key, value, curUser, setCurUser) => {
    const users = getLocal("users");
    const newCurUser = { ...curUser, [key]: value };
    setLocal("users", users.map(obj => obj.email === curUser.email ? newCurUser : obj))
    setCurUser(newCurUser);
}

export { getLocal, setLocal, changeAllUsers };