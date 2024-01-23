const key = "a7f87c6ca3bdc199b3d33aa4340a0964"

function inputOnScreen(data) {
    console.log(data)
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".weather").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".text-forecast").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade: " + data.main.humidity + "%"
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    inputOnScreen(data)
}

function clickOnButton() {
    const city = document.querySelector(".input-city").value 
    searchCity(city)
}

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#chk')

$checkbox.addEventListener('change', function() {
    $html.classList.toggle('dark-mode')
})