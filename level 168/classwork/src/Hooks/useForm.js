import { useState } from "react"

function useForm(){
    const [error, setError] = useState(false)
    
    function handleSubmit(e, callback){
        e.preventDefault()

        let formData = {}

        for(let [key, value] of new FormData(e.target)){
            formData[key] = value
        }

        callback(formData, setError)
    }

    return {handleSubmit, error}
}

export { useForm }