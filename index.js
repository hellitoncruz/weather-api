let search_input = document.querySelector("#search_input")
let search_btn = document.querySelector("#search_btn")
let tempMin = document.querySelector(".tempMin")
let temp = document.querySelector(".temp")
let tempMax = document.querySelector(".tempMax")
let city_name = document.querySelector(".city_name")

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
// Adicionar país na frente do nome da cidade escolhida
// Encontrar uma imagem para cada tempo (nublado, sol, chuva )
// função para colocar a saudação (bom dia...)
// função para selecionar a imagem do tempo com base no clima
// função saber como está o tempo (nublado...)


function displayData(wheater){
    console.log(wheater)

    city_name.innerText = wheater.name

    temp.innerHTML = `<h2> ${Math.round(wheater.main.temp)}°C</h2>` 
    tempMin.innerHTML = `<p>${Math.round(wheater.main.temp_min)}°C</p>` 
    tempMax.innerHTML = `<p>${Math.round(wheater.main.temp_max)}°C</p>` 

    document.querySelector(".card").style.display = "flex";


}




// funcao que busca a api
function searchResults(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${api.lang}&appid=${api.key}&units=${api.units}`).then(response=>{
        response.json()
        .then(data=> displayData(data)  
        )
    });
}


    
