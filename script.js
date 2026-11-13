/* 1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound */

/* 
VARIABLES
*/

// interactive variables
const userInput = document.getElementById("input-value");
const convertBtn = document.getElementById("convert-btn");

// where conversion results will display

const conversionResults = document.getElementById("conversion-results"); // idk yet if I will use this for something but adding it just in case

const meterResult = document.getElementById("meter_result");

const volume_result = document.getElementById('volume_result');

const mass_result = document.getElementById('mass_result');

/* 
FUNCTIONS
*/

// Meters/Feet functions
function metersToFeet(input){
    return input * 3.281;
}

function feetToMeters(input){
    return input * 0.3048;
}

// Liters/Gallons functions
function litersToGallons (input) {
    return input * 0.264;
}

function gallonsToLiters (input) {
    return input * 3.78541;
}

// Kilo/Pounds functions
function kiloToPounds (input) {
    return input * 2.204;
}

function poundsToKilo (input) {
    return input * 0.45359237;
}

/* 
LISTENER
*/

