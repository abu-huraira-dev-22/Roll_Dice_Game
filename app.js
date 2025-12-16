
let player1Turn = true

let player1Area = document.querySelector("#player1")
let player2Area = document.querySelector("#player2")
player1Area.classList.add("active")



const diceImage = document.querySelector("img")

const player1CurrentScoreUI = document.querySelector("#player1CurrentScoreUI")

let currentScore = 0

 
function rollDiceHandler(){
    const randomNaumber = Math.ceil(Math.random()*6)
    diceImage.src = `./images/${randomNaumber}.webp`
    if(randomNaumber === 1){
        currentScore = 0
        player1CurrentScoreUI.textContent = currentScore
        player1Turn = false
        player1Area.classList.toggle("active")
        player2Area.classList.toggle("active")
        return
    }
    currentScore += randomNaumber
    player1CurrentScoreUI.textContent =currentScore
    

}