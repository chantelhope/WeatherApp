const apiKey = "your_api_key_here"; // Replace with your OpenWeatherMap API key

document.getElementById("getWeather").addEventListener("click", function () {
  const city = document.getElementById("city").value.trim();
  const errorElement = document.getElementById("error");
  const weatherResult = document.getElementById("weatherResult");

  errorElement.classList.add("hidden");
  weatherResult.classList.add("hidden");

  if (!city) {
    errorElement.textContent = "Please enter a city name.";
    errorElement.classList.remove("hidden");
    return;
  }

  fetch(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("cityName").textContent = data.name;
      document.getElementById("temperature").textContent = data.main.temp;
      document.getElementById("condition").textContent = data.weather[0].description;
      document.getElementById("humidity").textContent = data.main.humidity;
      document.getElementById("wind").textContent = data.wind.speed;

      weatherResult.classList.remove("hidden");
    })
    .catch((error) => {
      errorElement.textContent = error.message;
      errorElement.classList.remove("hidden");
    });
});
