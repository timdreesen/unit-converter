/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const inputField = document.getElementById("unit-input")
const converterBtn = document.getElementById("convert-button")

convert(1) // display some conversions for placeholder value

converterBtn.addEventListener("click", function() {
    let factor = inputField.value
    convert(factor)
})


function convert(factor) {
length.innerHTML = `${factor} meter = ${(factor*3.281).toFixed(3)} feet | ${factor} feet = ${(factor/3.281).toFixed(3)} meter`

volume.innerHTML = `${factor} liters = ${(factor*0.264).toFixed(3)} gallons | ${factor} gallons = ${(factor/0.264).toFixed(3)} liters`

mass.innerHTML = `${factor} kilos = ${(factor*2.204).toFixed(3)} pounds | ${factor} pounds = ${(factor/2.204).toFixed(3)} kilos`
}

