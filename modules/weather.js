export async function getWeather(city) {
    const apiKey = '2966fbdbefbc0b9dcca495282a570373';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Weather data not available');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  export function displayWeather(city) {
    getWeather(city).then(data => {
      const appContent = document.getElementById('app-content');
      if (data) {
        appContent.innerHTML = `
          <h1>Weather in ${data.name}</h1>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
        `;
      } else {
        appContent.innerHTML = `<h1>Sorry, we couldn't fetch the weather data.</h1>`;
      }
    });
  }
  