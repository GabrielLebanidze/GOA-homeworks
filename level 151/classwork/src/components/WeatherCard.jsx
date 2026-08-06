import Loader from "./Loader"

function WeatherCard({info}){
    return (
        info ?
        <div>
            <h1>city name: {info.name}</h1>
            <p>temperature: {info.main.temp}</p>
            <p>description: {info.weather.description}</p>
            <p>humidity: {info.main.humidity}</p>
            <p>wind speed: {info.wind.speed}</p>
        </div>
        : <Loader />
    )
}

export default WeatherCard