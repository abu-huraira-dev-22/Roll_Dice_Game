
let player1Turn = true
let player1Area = document.querySelector("#player1").classList.add("active")
// let player2Area = document.querySelector("#player2").classList.add("active")
const diceImage = document.querySelector("img")
let currentScore = 0
let 
function rollDiceHandler(){
    const randomNaumber = Math.ceil(Math.random()*6)
    diceImage.src = `./images/${randomNaumber}.webp`
    currentScore += randomNaumber
}