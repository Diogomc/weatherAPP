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

    const date = new Date();
    const todayDate = date.getDate();
    const month = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
    const weekDay = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ]
    const weekDayName = weekDay[date.getDay()]
    const monthName = month[date.getMonth()]


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

            <div className="weather-area">


                {weather.map(item => (
                    <div className="weather" key={item.location.tz_id}>

                        <div className="date">
                            <h2 className='text-2xl text-date'>Today</h2>
                            <p className='text-1xl text-date'>{`${weekDayName}, ${todayDate}, ${monthName}`}</p>
                        </div>
                        <div className="temperature">
                            <p className='text-5xl'>{`${Math.trunc(item.current.temp_c)} °C`}</p>
                            <p><img className='weather-icon' src={item.current.condition.icon} alt={item.current.condition.text} /></p>
                        </div>
                        <div className="local">
                            <p>{`${item.location.name}, ${item.location.country}`}</p>
                        </div>

                    </div>
                ))}
            </div>
            <h1 className='text-2xl mt-10'>Text your city: </h1>
            <div className="search-area">
                <input className="input-search" type="text" onChange={(e) => setInputSearch(e.target.value)} placeholder="search" />
                <button className='btn-search' onClick={handleWeatherCity}>Search</button>
                {error && <p className="text-red-500 error" >{error}</p>}
            </div>
            <h2 className='text-2xl mt-20'>Air Informations</h2>
            {weather.map(item => (
                <div key={item.location.tz_id} className='aditional-informations'>
                    <div className="humidity">
                        <p>Humidity</p>
                        <p><img className='w-20' src="humidity.png" alt="" /></p>
                        <p>{`${item.current.humidity}%`}</p>
                    </div>
                    <div className='wind'>
                        <p>Wind</p>
                        <p><img className='w-20' src="wind.png" alt="wind-icon" /></p>
                        <p>{`${Math.trunc(item.current.wind_kph)} km/h`}</p>
                    </div>
                    <div className="feels">
                        <p>Feels like</p>
                        <p><img className='w-20' src="humidity.png" alt="" /></p>
                        <p>{`${Math.trunc(item.current.feelslike_c)} °C`}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}