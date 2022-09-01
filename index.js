/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")
const convertLength = document.getElementById("convert-length")
const convertVolume = document.getElementById("convert-volume")
const convertMass = document.getElementById("convert-mass")

//console.log(inputEl.value)
let inputValue = 1

function renderLength(){
    
    if (inputEl.value != ""){
        inputValue = inputEl.value
    }
    
    let baseString = `${inputValue} meter(s) = ${(inputValue * 3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters`
    
    return baseString

}

function renderVolume(){
    
    if (inputEl.value != ""){
        inputValue = inputEl.value
    }
    
    let baseString = `${inputValue} liter(s) = ${(inputValue * 0.264).toFixed(3)} gallon | ${inputValue} gallon = ${(inputValue / 0.264).toFixed(3)} liters`
    
    return baseString
}

function renderMass() {
    
    if (inputEl.value != ""){
        inputValue = inputEl.value
    }
    
    let baseString = `${inputValue} kilogram(s) = ${(inputValue * 2.204).toFixed(3)} pounds | ${inputValue} pound = ${(inputValue / 2.204).toFixed(3)} kilograms`
    
    return baseString
    
}

convertBtn.addEventListener('click', function(){
    
    convertLength.textContent = renderLength()
    convertVolume.textContent = renderVolume()
    convertMass.textContent = renderMass()    
})