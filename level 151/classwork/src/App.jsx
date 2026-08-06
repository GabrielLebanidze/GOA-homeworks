import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import Loader from './components/Loader'
import WeatherCard from './components/WeatherCard'

let key = "e1456343d4ee6a748f4d168b47cce86b"
//`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
//<WeatherCard cityInfo={cityInfo}/>
function App() {
  let [city, setCity] = useState("tbilisi")
  let [info, setInfo] = useState("")


  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
      .then((cityInfo) => cityInfo.json())
      .then((cityInfo) => setInfo(cityInfo))
      .catch((error) => error)
  }, [city])
  
  return (
    <>
      <SearchBar setCity={setCity}/>
      <WeatherCard info={info}/>
    </>
  )
  
}

export default App
