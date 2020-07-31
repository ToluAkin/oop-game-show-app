/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
const startButton = document.getElementById('btn__reset');

/**
 * Starts the game 
 */
startButton.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});

/**
 * Handles game interaction when onscreen keyboard is used
 */
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('key'))  game.handleInteraction(e.target)
});