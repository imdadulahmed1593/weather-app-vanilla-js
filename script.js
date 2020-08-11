const appId = {
    api: "a40bdd2764a65427d4ea39505f8708c5",
    baseUrl: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        getResult(searchBox.value);
        searchBox.value="";
    }
})

function getResult(query) {
    let url = `${appId.baseUrl}weather?q=${query}&units=metric&APPID=${appId.api}`;
    fetch(url)
        .then(response => response.json())
        .then(response => displayResult(response));

}

function displayResult(response) {
    console.log(response);
    let city = document.querySelector(".city");
    city.innerText = `${response.name}, ${response.sys.country}`;

    let now = new Date();
    let date = document.querySelector(".date");
    date.innerText = now;

    let temp = document.querySelector(".temp");
    temp.innerHTML = `${Math.round(response.main.temp)}<span>°c</span>`;

    let weather = document.querySelector(".weather");
    weather.innerText = `${response.weather[0].main}`;

    let hiLow = document.querySelector(".hi-low");
    hiLow.innerText = `${Math.round(response.main.temp_min)}°c / ${Math.round(response.main.temp_max)}°c`;

}