/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//THIS PROJECT IS BUILT FOR EXCEEDS EXPECTATION
let game;
const startButton = document.getElementById('btn__reset');
const screen = document.getElementsByClassName('main-container');
const keyboard = document.querySelectorAll('.key');
const screenOverlay = document.querySelector('#overlay');

/**
 * Added animation to the screen overlay
 */
const animation = ['animated', 'pulse']
screenOverlay.classList.add(...animation);

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
    if (e.target.classList.contains('key'))
        game.handleInteraction(e.target)
});

/**
 * Handles physical keyboard pressing for game interaction 
 * and start the game on enter
 */
document.addEventListener('keydown', (e) => {
    keyboard.forEach(key => {
        if (key.textContent === e.key && key.disabled !== true)
            game.handleInteraction(key);   
    });
});
//THIS PROJECT IS BUILT FOR EXCEEDS EXPECTATION