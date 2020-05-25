window.addEventListener("load", () => {
    let long;
    let lat;
    let temperatureDesgree = document.querySelector('.temperature-degree');
    let temperatureDescription = document.querySelector('.temperature-description');
    let locationTimezone = document.querySelector(".location-Timezone");
    let locationWeatherIcon = document.querySelector(".location-weather-icon");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            // console.log(position)
            long = position.coords.longitude;
            lat = position.coords.latitude;
            /**
             * const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
             * Interface Address: https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/31.22,121.48
             * easy-mock Address: https://easy-mock.com/mock/5ec7770006e6cd0953abbd59/weather/index
             * */
            // const proxy = "https://cors-anywhere.herokuapp.com/"
            const api = "https://easy-mock.com/mock/5ec7770006e6cd0953abbd59/weather/index";

            fetch(api)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    let {temperature, summary, icon} = data.currently;
                    temperatureDesgree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;
                    setIcons(icon,document.querySelector(".icon"))
                })
        });


    } else {
    }
    function setIcons(icon,iconID) {
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g,"_").toUpperCase();
        skycons.play();
        return skycons.set(iconID,Skycons[currentIcon]);
    }
});