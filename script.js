function showTemperature(response) {
    let temp = Math.round(response.data.main.temp);
    console.log(temp);
    let h1 = document.querySelector("h1");
    let message = `The current temperature at your location is ${temp}°C.`;
    h1.innerHTML = message;
  }
  
  function showLocation(position) {
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;
    let units = "metric";
    let apiKey = "6d00dd909f5a745d5e78705c992cb859";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  
    console.log(latitude);
    console.log(longitude);
  
    axios.get(apiUrl).then(showTemperature);
  }
  
  navigator.geolocation.getCurrentPosition(showLocation);
  
  
      
  