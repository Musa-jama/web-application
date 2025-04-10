export const routes = {
    home: `<h1>Welcome to Home Page</h1><p>This is the home page of the app.</p>`,
    about: `<h1>About Us</h1><p>This page contains information about the app.</p>`,
    contact: `<h1>Contact Us</h1><p>Get in touch with us on this page.</p>`,
    weather: `<div id="weather-info"><h1>Loading Weather...</h1></div>`  
  };
  
 
export function navigate(route) {
    const appContent = document.getElementById('app-content');
    appContent.innerHTML = routes[route] || `<h1>404 - Page Not Found</h1>`;
  }
  