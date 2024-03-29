
function WeatherRecord({WeatherRecord}){

    return(
        <>
            <div className="weather-card">
                <h2>Temp: {WeatherRecord.ambientTemp}</h2>
                <p>Barometric Temp{WeatherRecord.barometricPressure}°C</p>
                <p>Lat:{WeatherRecord.latitude}</p>
                <p>Long:{WeatherRecord.longitude}</p>
            </div>
        </>
    )
}

export default WeatherRecord