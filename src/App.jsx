import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { StreamrClient } from "@streamr/sdk"
import WeatherCard from './components/WeatherCard'

function App() {

    // Run a Streamr node right inside your JS app
  const streamr = new StreamrClient()

  // Subscribe to a stream of messages
  streamr.subscribe('streams.dimo.eth/firehose/weather', (msg) => {
    console.log(msg.data.ambientTemp)
    // msg.map(weatherRecord => 
    //   <WeatherCard key={weatherRecord.id} weatherRecord={weatherRecord.data} />)
  })

  return (
    <>
      <h1>Weather</h1>
      
    </>
  )
}

export default App
