const calculateAverage = (a) => {
    let jami = 0
    let raodenoba = 0
    for(let i of a){
        jami += i
        raodenoba += 1
    }
    return jami/raodenoba
}

export default calculateAverage