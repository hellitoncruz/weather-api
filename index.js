let search_input = document.querySelector("#search_input")
let search_btn = document.querySelector("#search_btn")
let tempMin = document.querySelector(".tempMin-txt")
let temp = document.querySelector(".temp-txt")
let tempMax = document.querySelector(".tempMax-txt")
let city_name = document.querySelector(".city_name")
let imgIcon = document.querySelector(".imgIcon")
let description= document.querySelector(".description-txt")

let api = {
    lang: 'pt_br',
    key: '4f242a334d6320c6dfabd04a01e00b29',
    units: 'metric'
}


// Cria funcao para buscar com o clique
search_btn.addEventListener('click', click)

function click(){
    searchResults(search_input.value)
}

// Cria funcao para buscar apertando enter
search_input.addEventListener('keypress', enter)
function enter(e){
    if (e.keyCode === 13){
        searchResults(search_input.value)
    }
}




function displayData(weather){
    console.log(weather)

    // Adicionar país na frente do nome da cidade escolhida
    city_name.innerText = `${weather.name}, ${weather.sys.country}`

    // Encontrar uma imagem para cada tempo (nublado, sol, chuva )
    imgIcon.innerHTML = `<img src="./icons/${weather.weather[0].icon}.png">`

    // função saber como está o tempo (nublado...)
    let tempo = weather.weather[0].description
    description.innerText = tempo[0].toUpperCase() + tempo.substr(1);

    temp.innerText = `${Math.round(weather.main.temp)}°C` 
    tempMin.innerText = `${Math.round(weather.main.temp_min)}°C` 
    tempMax.innerText = `${Math.round(weather.main.temp_max)}°C` 

    document.querySelector(".card").style.display = "flex";

    // função para colocar a saudação (bom dia...)
    makeGreeting()
}




// funcao que busca a api
function searchResults(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${api.lang}&appid=${api.key}&units=${api.units}`).then(response=>{
        response.json()
        .then(data=> displayData(data)  
        )
    });
}


let greeting = document.getElementById("greeting");

function makeGreeting(){
    
    let saudacao = ["Bom dia!", "Boa tarde!", "Boa noite!", "Boa madrugada!"]
    let dataHoje = new Date();
    let horas = dataHoje.getHours()

    if (horas >= 5 && horas <= 12) {
        greeting.innerText = saudacao[0];
    }
    else if (horas > 12 && horas <= 18 ){
        greeting.innerText = saudacao[1];
    }
    else if (horas > 18 && horas <= 00){
        greeting.innerText = saudacao[2];
    }
}