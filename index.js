/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//taking from html
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

//conversion constants
const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;

render();

convertBtn.addEventListener("click", function(){
    render();
})
 
function render(){
    lengthEl.textContent = convert("meters", meterToFeet, "feet");
    volumeEl.textContent = convert("liters", literToGallon, "gallons");
    massEl.textContent = convert("killograms", kilogramToPound, "pounds");
}

window.render = render;

function convert(metric, conversion, imperial){
    let metricToImperial = (inputEl.value * conversion).toFixed(3);
    let imperialToMetric = (inputEl.value / conversion).toFixed(3); 
    return `${inputEl.value} ${metric} = ${metricToImperial} ${imperial} | ${inputEl.value} ${imperial} = ${imperialToMetric} ${metric}`
}

window.convert = convert;