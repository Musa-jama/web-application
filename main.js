import { navigate } from './modules/router.js';
import { displayWeather } from './modules/weather.js';

document.getElementById('home-btn').addEventListener('click', () => {
  navigate('home');
});

document.getElementById('about-btn').addEventListener('click', () => {
  navigate('about');
});

document.getElementById('contact-btn').addEventListener('click', () => {
  navigate('contact');
});


document.getElementById('weather-btn').addEventListener('click', () => {
  navigate('weather');
  displayWeather('Toronto'); 
});


navigate('home');
