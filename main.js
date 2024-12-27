const apiKey = "d948c5f362592d2859dfedfb4a989c99";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
    

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");
    
    async function checkweather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c" ;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "cloud.png";
        }else if(data.weather[0].main == "Clear"){
          weatherIcon.src = "clear.png";
        }else if(data.weather[0].main == "Rain"){
          weatherIcon.src = "light rain.png";
        }else if(data.weather[0].main == "Drizzle"){
          weatherIcon.src = "snow.png";
        }else if(data.weather[0].main == "Mist"){
          weatherIcon.src = "mist.png";
        }
    }

    searchBtn.addEventListener("click",()=>{
      checkweather(searchBox.value);
    })
