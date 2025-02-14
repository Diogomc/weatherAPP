'use client'
import '@/app/styles/weatherApi.css'
import { Weather } from "@/type/Weather"
import { useEffect, useState } from "react"

export const WeatherAPI = () => {

    const [weather, setWeather] = useState<Weather[]>([]);
    const [search, setSearch] = useState('london')
    const [inputSearch, setInputSearch] = useState('')
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');


    const getWeather = async () => {
        setError('')
        setLoading(true)
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=2264d5e0097e4e63901193936251102&q=${search}&aqi=no`)
        const json = await res.json()

        if (json.error) {
            setError("City was not found");
            setLoading(false)
            return;
        }

        setWeather([json])
        setLoading(false)
    }

    useEffect(() => {
        getWeather();
    }, [search])

    function handleWeatherCity() {
        setSearch(inputSearch)
    }

    return (
        <div className="container">
            <div className="search-area">
                <input className="input-search" type="text" onChange={(e) => setInputSearch(e.target.value)} placeholder="search" />

                <button onClick={handleWeatherCity}><img className="icon-search" src="search.png" alt="" /></button>
                
                {error && <p className="text-red-500 error" >{error}</p>}
            </div>
            <div className="weather-area">
                {weather.map(item => (
                    <div className="weather" key={item.location.tz_id}>
                        <img className="icon-weather" src={item.current.condition.icon} alt={item.current.condition.text} />
                        <p className="condition">{item.current.condition.text}</p>
                        <p className="celsius">{Math.trunc(item.current.temp_c)} °C</p>
                        <h1 className="information-text">{item.location.name}, {item.location.country}.</h1>
                        <p className='local-hour'>{item.location.localtime}</p>

                    </div>
                ))}
            </div>
        </div>
    )
}