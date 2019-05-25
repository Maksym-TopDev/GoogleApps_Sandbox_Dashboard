console.log('main.js is connected!');

let body = document.querySelector('body');
let contain = document.querySelector('.contain');

// document.createElement('img');

function putData(weather){

    let county = weather.name;
    let country = weather.sys.country;
    let temp = weather.main.temp;
    let min = weather.main.temp_min;
    let high = weather.main.temp_max;

    contain.innerHTML += `<h1>YOUR FORCAST FOR <br> ${county}, ${country} is ${Math.floor( temp*1.8-459.67 )}&#8457</h1>`;
    contain.innerHTML += `<p>LOW ${Math.floor( min*1.8-459.67 )}&#8457</p>`;
    contain.innerHTML += `<p>HIGH ${Math.floor( high*1.8-459.67 )}&#8457</p>`;
}


function myclick(info){
  // alert(info);
  $.ajax({
    url: `http://api.openweathermap.org/data/2.5/weather?q=${info},us&appid=f4c6128ee2a67e688c5cd949ac8acb41`,
    method: 'GET',
    success: function(data){
      // console.log(data);
      putData(data);

    }
  })
}


// let info = document.querySelector('#info').value;
// alert(info);
/*

Here's an overview of the steps you'll follow to get your app to work...


STEPS

1. when the page loads
  - add an event listener to the button
2. When the button is clicked
  - grab the input
  - store the value
  - make an API request based on the input value
3. When the API response is returned
  - grab all the appropriate DOM elements
  - append the data to the DOM

*/
