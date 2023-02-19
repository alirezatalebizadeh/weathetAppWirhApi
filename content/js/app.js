"use strict"

let $ = document, timeUser;

const inputElem = $.querySelector('.search-box'),
    dateElem = $.querySelector('.date'),
    mainElem = $.querySelector('main');

let apiData = {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=',
    key: '26c4d8ad14b57209671494df9bd9fcb9'
}

// let imgSrc = ['/content/images/bg.jpg', '/content/images/WinterSnow.jpg', '/content/images/عکس-زمینه-آسمان-با-ابر.jpg']


// fetch data with api
function fetchDataFunc() {
    fetch(`${apiData.url}${inputElem.value}&appid=${apiData.key}`)
        .then(res => res.json())//convert type of data
        .then(data => {
            showData(data)//recieve data and send this to show it
        })
}


//show data with recieve data
function showData(data) {
    // console.log(data);
    mainElem.innerHTML = `
<section class="location">
    <div class="city">${data.name}, ${data.sys.country}</div>
</section>
<div class="current">
    <div class="temp">${(Math.floor(data.main.temp) - 273)}<span>°c</span></div>
    <div class="weather">${data.weather[0].main}</div>
    <div class="hi-low">${(Math.floor(data.main.temp_min) - 273)}°c / ${(Math.floor(data.main.temp_max) - 273)}°c</div>
</div>`
}


//Show user time
function showDate() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    timeUser = new Date()

    let now = {
        day: days[timeUser.getDay()],
        month: months[timeUser.getMonth()],
        year: timeUser.getFullYear(),
        date: timeUser.getDate(),
    }

    dateElem.innerHTML = `${now.date} ${now.day} ${now.month} ${now.year}`
}

inputElem.addEventListener('keyup', fetchDataFunc)
//show date with loaded windows
window.addEventListener('load', showDate)


