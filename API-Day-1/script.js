const API_KEY = "";
const LOCATION_KEY = "";
const URL = ``;

let xhttp = new XMLHttpRequest();
xhttp.open("GET", URL);
xhttp.onload = function () {
  if (this.response == 200) {
    let weatherArray = JSON.parse(this.responseText);
    console.log(weatherArray[0]).temperature;
  }
};
