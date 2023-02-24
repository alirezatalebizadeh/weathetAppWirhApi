"use strict"

//we can use this library to set background of page
particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 500,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 15,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "bottom",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 100,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


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
