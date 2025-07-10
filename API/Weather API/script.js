

const input = document.getElementById("input");
const search = document.getElementById("search");
const div = document.getElementById("display");

function searchWeather(city) {
    div.innerHTML = "";
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");


    const api = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=48700fbe304016c0d81280c3db9bf74b&units=metric";

    fetch(api)
        .then(function (response) {
            return response.json();
        })
        .then(function (weather) {
            p1.textContent = weather.name;
            p2.textContent = weather.main.temp;
            p3.textContent = weather.wind.speed;
            p4.textContent = weather.sys.country

            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            div.appendChild(p4);
        });
}

search.addEventListener("click",()=> {
    const city = input.value;
    searchWeather(city);
});

