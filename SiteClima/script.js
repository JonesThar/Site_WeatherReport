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
const $checkbox = document.querySelector('#toggle_chk')

$checkbox.addEventListener('change', function() {
    $html.classList.toggle('dark-mode')
})

window.onload = function() { 
    attachBehaviors(); 
} 

function attachBehaviors() { 
    if (document.getElementById('toggle_chk') && 
        document.getElementById('logo')) { 
        document.getElementById('logo').style.display='block'; 
        document.getElementById('toggle_chk').onclick=function() {  
        toggle_image(this);  
        }; 
    } 
} 

function toggle_image(chk) { 
    var src=(chk.checked)?'img/LogoTemaEscuro.svg':'img/LogoTemaClaro.svg'; 
    document.getElementById('logo').src=src; 
} 

var input = document.getElementById("search");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("searchBtn").click();
  }
});
