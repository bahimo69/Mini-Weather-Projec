const inputElem = document.querySelector('input')

    
const cityElem = document.querySelector('.city')    
const dateElem = document.querySelector('.date')
const tempElem = document.querySelector('.temp')
const weatherElem = document.querySelector('.weather')
const hiLowElem = document.querySelector('.hi-low')

let apiData = {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=',
    apiKey: 'ec70d4e0d918aff756eb215e0d160d0f'
}

function fetchData(){
    let cityName = inputElem.value

    console.log(cityName);
    

    fetch(`${apiData.url}${cityName}&&appid=${apiData.apiKey}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        SetData (data)})
    .catch(err => {
        cityElem.innerHTML = "Error!";
        dateElem.innerHTML = "";
        tempElem.innerHTML = "";
        hiLowElem.innerHTML = "";
        weatherElem.innerHTML = err.message;
        windElem.innerHTML = "";
        humidityElem.innerHTML = "";
    })
        
}

inputElem.addEventListener('keypress', (e)=> {
    if(e.keyCode === 13){

        fetchData()

    }
    
})


function SetData (data){
    cityElem.innerHTML = `${data.name}, ${data.sys.country}`

    dateElem.innerHTML = showDate()

    tempElem.innerHTML = `${Math.floor(data.main.temp) - 273} °c`

    hiLowElem.innerHTML = `${Math.floor(data.main.temp_min) - 273} °c / ${Math.floor(data.main.temp_max) - 273} °c` 

    weatherElem.innerHTML = `${data.weather[0].main}`
        
}


function showDate(){
    
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let date = new Date()

let day = days [date.getDay()]

let month = months[date.getMonth()]

let year = date.getFullYear()

let todayDate = date.getDate()

return `${day} ${todayDate} ${month} ${year}`
}


    

    