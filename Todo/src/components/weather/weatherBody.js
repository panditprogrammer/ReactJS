import React, { useEffect, useState } from 'react';


function WeatherBody({ Temp }) {
    const [weatherState, setWeatherState] = useState("bi bi-sun");
    // get the data from another Component 
    const {
        humidity,
        pressure,
        temp,
        weathermood,
        name,
        speed,
        country,
        sunset
    } = Temp;


    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds": setWeatherState("bi bi-cloud");
                    break;
                case "Haze": setWeatherState("bi bi-cloud-haze2");
                    break;
                case "Clear": setWeatherState("bi bi-sun");
                    break;
                case "Mist": setWeatherState("bi bi-cloud-fog2-fill");
                    break;
                case "Smoke": setWeatherState("bi bi-cloud-fog");
                    break;
                default:
                    setWeatherState("bi bi-brightness-high");
                    break;
            }
        }
    }, []);

    // second to date 
    let second = sunset;
    let date = new Date(second);
    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    let today = new Date();

    return (
        <>

            <div className="weater_container">
                <div className="weather_top">
                    <marquee behavior="alternate" direction="left">
                        <i className={weatherState}></i>
                    </marquee>
                </div>

                <div className="weather_body">
                    <div className="left">
                        <span className="temp">{temp} <i className="wi-celsius"></i></span>
                        <div className="location">
                            <span className="clouds">{weathermood}</span>
                            <span className="city">{country} , {name}</span>
                        </div>

                    </div>
                    <div className="right">
                        <div className="date_time">
                            <span>{`${today.toDateString()}`}</span> <br />
                            <span> {`${today.toLocaleTimeString()}`}</span>
                        </div>
                    </div>
                </div>

                <div className="weather_footer">
                    <div className="sunset">Sunset {time}</div>
                    <div className="humidity">Humidity {humidity} % </div>
                    <div className="pressure">Pressure {pressure} mmHg</div>
                    <div className="wind">Wind {speed} km/h</div>
                </div>
            </div>

        </>
    )
}

export default WeatherBody;
