const weather = {
  result: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=0c5ba44157f7dff3cb2d36f27b5463b6"
    )
      .then((response) => {
         return response.json();
      })
      //.then((data) => this.renderWeather(data));
      .then(data => console.log(data));
  }}
