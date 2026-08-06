import { useContext } from "react"
import { color, backg } from "../utils/darkMode"
import { MyContext } from "../App"


function Test(){
    let {dark, setDark} = useContext(MyContext)

    return(
        <div style={{width:200, height:200, backgroundColor:backg(dark)}}>
            <p style={{color: color(dark)}}>idk bro</p>
        </div>
    )
}

export default Test