import './WeatherCard.css'

function WeatherCard({ weather }) {
  const { location, current } = weather

  return (
    <div className="weather-card">
      <div className="location">
        <h2>{location.name}</h2>
        <p>{location.country}</p>
        <span className="local-time">{location.localtime}</span>
      </div>

      <div className="main-weather">
        <img 
          src={current.weather_icons[0]} 
          alt={current.weather_descriptions[0]}
          className="weather-icon"
        />
        <div className="temperature">
          <span className="temp-value">{current.temperature}</span>
          <span className="temp-unit">°C</span>
        </div>
        <p className="description">{current.weather_descriptions[0]}</p>
      </div>

      <div className="details">
        <div className="detail-item">
          <span className="label">Feels Like</span>
          <span className="value">{current.feelslike}°C</span>
        </div>
        <div className="detail-item">
          <span className="label">Humidity</span>
          <span className="value">{current.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="label">Wind</span>
          <span className="value">{current.wind_speed} km/h</span>
        </div>
        <div className="detail-item">
          <span className="label">Pressure</span>
          <span className="value">{current.pressure} mb</span>
        </div>
        <div className="detail-item">
          <span className="label">Visibility</span>
          <span className="value">{current.visibility} km</span>
        </div>
        <div className="detail-item">
          <span className="label">UV Index</span>
          <span className="value">{current.uv_index}</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
