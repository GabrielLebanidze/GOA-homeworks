import { useState } from "react"

export function useForm(a){
    let [data, setData] = useState(a)

    function handleChange(e){
        let inputName = e.target.name
        let value = e.target.value
        setData({...data, [inputName]:value})
    }

    function reset(){
        setData(a)
    }

    return [data, handleChange, reset]
}