import { createContext, useState } from "react"

export let ThemeContext = createContext() 

function ThemeProvider({ children }){
    let [dark, setDark] = useState(false)

    function toggleTheme(){
        setDark(!dark)
    }

    return(
        <ThemeContext.Provider value={{dark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider