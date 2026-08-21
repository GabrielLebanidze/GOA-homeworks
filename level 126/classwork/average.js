const calculateAverage = (a) => {
    let jami = 0
    for(let i of a){
        jami += i
    }
    return jami/a.length
}

export default calculateAverage