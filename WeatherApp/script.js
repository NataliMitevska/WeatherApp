const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const cityHide = document.querySelector('.city-hide');

search.addEventListener('click', () => {

    const APIKey= 'b980ddc238466ce3a71c417334f5090e';
    const city = document.querySelector('.search-box input').value;

    if (city == '')
    return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {

        if (json.cod =='404') {
            cityHide.textContent = city;
            container.style.height = '400px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            return;
        }

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.temperature');
        const description = document.querySelector('.description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        if (cityHide.textContent == city) {
            return;
        }
        else {
            cityHide.textContent = city;

            container.style.height = '600px';
            container.classList.add('active');
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            error404.classList.remove('active');


           setTimeout(() => {
                container.classList.remove('active');
            }, 2200); 

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'photos/100.jpg';
                    break;
            
                    case 'Rain':
                        image.src = 'photos/rain.webp';
                        break;
    
                    case 'Snow':
                        image.src = 'photos/snow.webp';
                        break;
    
                    case 'Clouds':
                        image.src = 'photos/cloud-sun.png';
                        break;
    
                    case 'Mist':
                        image.src = 'photos/mist.png';
                        break;
    
                    case 'Haze':
                        image.src = 'photos/mist.png';
                        break;
    
                default:
                    image.src = 'photos/cloud-sun.png';    
            }
    
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;

            const infoWeather = document.querySelector('.info-weather');
            const infoHumidity = document.querySelector('.info-humidity');
            const infoWind = document.querySelector('.info-wind');

            const elCloneInfoWeather = infoWeather.cloneNode(true);
            const elCloneInfoHumidity = infoHumidity.cloneNode(true);
            const elCloneInfoWind = infoWind.cloneNode(true); 

            elCloneInfoWeather.id ='clone-info-weather';
            elCloneInfoWeather.classList.add('active-clone');

            elCloneInfoHumidity.id='clone-info-humidity';
            elCloneInfoHumidity.classList.add('active-clone');

            elCloneInfoWind.id='clone-info-wind';
            elCloneInfoWind.classList.add('active-clone');

            const existingCloneWeather = document.getElementById('clone-info-weather');
            const existingCloneHumidity = document.getElementById('clone-info-humidity');
            const existingCloneWind = document.getElementById('clone-info-wind');

            if (existingCloneWeather) existingCloneWeather.remove();
            if (existingCloneHumidity) existingCloneHumidity.remove();
            if (existingCloneWind) existingCloneWind.remove();


             setTimeout(() => {
                infoWeather.insertAdjacentElement("afterend", elCloneInfoWeather);
                infoHumidity.insertAdjacentElement("afterend", elCloneInfoHumidity);
                infoWind.insertAdjacentElement("afterend", elCloneInfoWind);
            }, 2200);
            
           const cloneInfoWeather = document.querySelectorAll('.info-weather.active-clone');
           const totalCloneInfoWeather = CloneInfoWeather.length;
           const cloneInfoWeatherFirst = CloneInfoWeather[0];

           const cloneInfoHumidity = document.querySelectorAll('.info-humidity.active-clone');
           const cloneInfoHumidityFirst = cloneInfoHumidity[0];

           const cloneInfoWind = document.querySelectorAll('.info-wind.active-clone');
            const cloneInfoWindFirst = CloneInfoWind[0];

            if (totalCloneInfoWeather > 0) {
                cloneInfoWeatherFirst.classList.remove('active-clone');
                cloneInfoHumidityFirst.classList.remove('active-clone');
                cloneInfoWindFirst.classList.remove('active-clone');

                setTimeout(() => {
                    cloneInfoWeatherFirst.remove();
                    cloneInfoHumidityFirst.remove();
                    cloneInfoWindFirst.remove();
                }, 2200);
            }
        }

       
    });
}); 