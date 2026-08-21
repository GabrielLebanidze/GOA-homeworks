import { useState } from "react"

const useForm = () => {
    const [isError, setIsError] = useState(false);

    const handleSubmit = (e, callback) => {
        e.preventDefault();

        const formData = {};

        for(const [key, value] of new FormData(e.target).entries()) {
            formData[key] = value;
        }

        callback(formData, setIsError, e.target);
    }

    return [handleSubmit, isError];
}

export { useForm };