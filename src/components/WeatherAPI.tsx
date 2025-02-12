'use client'

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
        const json = await res.json() //aqui ele converte a requisição para formato JSON

        if (json.error) {
            setError("City was not found");
            setLoading(false)
            return;
        }

        setWeather([json]) //aqui ele passa o valor do json para o setWeather, transformando-o em objeto
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
                <input className="input-search" type="text" onChange={(e) => setInputSearch(e.target.value)} placeholder="search"/>
                {error && <p className="text-red-500 error" >{error}</p>}
                <button onClick={handleWeatherCity}><img className="icon-search" src="search.png" alt="" /></button>
            </div>
            <div className="weather-area">
                {weather.map(item => (
                    <div className="weather" key={item.location.tz_id}>
                        <p className="celsius">{Math.trunc(item.current.temp_c)} °C</p>
                        <h1 className="information-text">{item.location.name}, {item.location.country}.</h1>
                        <p><img className="icon-weather" src={item.current.condition.icon} alt={item.current.condition.text} /></p>
                        <p className="information-text">{item.current.condition.text}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}