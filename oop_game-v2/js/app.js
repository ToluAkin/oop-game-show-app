/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
const startButton = document.getElementById('btn__reset');
// const phrase = new Phrase();

startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

// document.addEventListener('keydown', function (event) {
//     game.handleKeydown(event);
// });