import { useContext } from "react"
import { ThemeContext } from "../context/ThemeProvider"

function Header(){
    let {dark, toggleTheme} = useContext(ThemeContext)
    return(
        <div style={{width:300, height:300, backgroundColor:dark? "black" : "white"}}>
            <h3 style={{color:dark? "white" : "black"}}>theme: {dark? "dark" : "light"}</h3>
            <button onClick={toggleTheme}>change theme</button>
        </div>
    )
}

export default Header