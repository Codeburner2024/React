import React, { useState } from 'react';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=af27bbf8318dbd768731cfb95bc6c874&lang=kr&units=metric`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('날씨 정보를 불러오는 데 실패했습니다.');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getWeather}>Get Weather</button>
        {weatherData && (
          <div id="weather-info">
            <p>현재 기온: {weatherData.main.temp}°C</p>
            <p>날씨: {weatherData.weather[0].description}</p>
          </div>
        )}
        {error && <p>{error}</p>}
      </header>
    </div>
  );
}

export default App;
