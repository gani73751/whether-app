import { useState } from 'react'
import WeatherCard from './components/WeatherCard'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const API_KEY = 'f50849c19245f9ee9f03daff7bf1db3a'
  const BASE_URL = 'http://api.weatherstack.com/current'

  const fetchWeather = async (city) => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch(
        `${BASE_URL}?access_key=${API_KEY}&query=${encodeURIComponent(city)}&units=m`
      )
      const data = await response.json()
      
      if (data.error) {
        setError(data.error.info || 'Failed to fetch weather data')
        setWeather(null)
      } else {
        setWeather(data)
      }
    } catch (err) {
      setError('Network error. Please try again.')
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  )
}

export default App
