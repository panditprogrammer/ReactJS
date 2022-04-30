import React, { useEffect, useState } from 'react';
import "./style.css";
import WeatherBody from "./weatherBody";




function Weather() {

    const [searchValue, setSearchValue] = useState("patna");
    const [Temp, setTemp] = useState("");


    // get the weather info
    const getWeather = async () => {
        try {

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

            const result = await fetch(url);
            const data = await result.json();

            const {humidity, pressure, temp} = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            // console.log("humidity",humidity,"pres",pressure,"temp",temp,"mood",weathermood,"name,",name,"spped",speed,country,sunset);

            const weatherPack = {
                humidity,
                pressure,
                temp,
                weathermood,
                name,
                speed,
                country,
                sunset
            }
            setTemp(weatherPack);

        } catch (error) {
           console.log("unable to fetch!");
        }

    };



    return (
        <>
            <div className="main">
                <div className="search_box">
                    <input type="search"
                        placeholder="search location"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)} />
                    <button onClick={getWeather} > <i className="bi bi-search"></i> </button>
                </div>
                <WeatherBody Temp={Temp} />
            </div>
        </>
    )
}

export default Weather;
