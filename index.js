const weather = {
  result: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=0c5ba44157f7dff3cb2d36f27b5463b6"
    )
      .then((response) => {
         return response.json();
      })
      //.then(data => console.log(data));
      then((data) => this.renderWeather(data));
      
  },

  renderWeather: function (data) {

    const {country} = data.sys;
    const {name} = data;
    const {description, icon} = data.weather[0]
    const {temp} = data.main
    const {humidity} = data.main
    const {speed} = data.wind
    console.log(name,temp, icon, description, speed, humidity);
  }}

