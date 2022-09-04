let weather = {
  result: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=0c5ba44157f7dff3cb2d36f27b5463b6"
    )
      .then((response) => {
         return response.json();
      })
      //.then(data => console.log(data));
      .then((data) => this.renderWeather(data));
      
  },

  renderWeather: function (data) {

    const {country} = data.sys;
    const {name} = data;
    const {description, icon} = data.weather[0]
    const {temp} = data.main
    const {humidity} = data.main
    const {speed} = data.wind
    console.log(name,temp, icon, description, speed, humidity);
  
  //rendering weather info into the webpage
    
  document.querySelector(".cityWeather").innerText ="Hello stranger 👋. "  + name + ", "+country+  " Weather Today is";
  document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
  document.querySelector(".description").innerText = description;
  document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
  document.querySelector(".temp").innerText = temp + "°C";
  document.querySelector(".humidity").innerText = "Humidity: " + humidity +"%";
  
  document.querySelector(".weatherinfo").classList.remove("reload");
  },
  search: function () {
    this.result(document.querySelector(".input").value);
  },
};

document.querySelector(".btn").addEventListener("click", function () {
  weather.search();
});
document.querySelector(".input").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      weather.search();
    }
});
function like(){
  document.getElementById("li").style.color = "#0080ff";
  document.getElementById("di").style.color = "white";
}