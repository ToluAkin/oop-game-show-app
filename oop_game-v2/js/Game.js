/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    createPhrases() {
        const phraseArray = [
            'Survival of the fittest',
            'Tooth and nail',
            'A Dime a Dozen',
            'A Piece of Cake',
            'History is bunk'
        ];

        return phraseArray.map(word => new Phrase(word));
    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /**
     * 
     */
    startGame() {
        const overlayDiv = document.querySelector('#overlay');
        overlayDiv.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide');
        return hiddenLetters.length === 0
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const heartLives = document.querySelectorAll('img');
        heartLives[this.missed].src = 'images/lostHeart.png';
        this.missed++;

        if (this.missed === 5) this.gameOver(false);
        
        return this.missed;
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const screenOverlay = document.querySelector('#overlay')
        const gameStatusMessage = document.querySelector('#game-over-message')
        screenOverlay.style.display = ''

        if (gameWon) {
            screenOverlay.className = 'win'
            gameStatusMessage.textContent = 'Congratulations!!! You won!'
        } else {
            screenOverlay.className = 'lose'
            gameStatusMessage.textContent = 'Game Lost! Try again?'
        }
        this.resetGame();
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        const letter = button.innerText
        button.disabled = true

        if (this.activePhrase.checkLetter(letter)) {
            button.classList.add('chosen')
            this.activePhrase.showMatchedLetter(letter)
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.classList.add('wrong')
            this.removeLife()
        }
    }

    resetGame() {
        const gameLetters = document.querySelector('#phrase ul');
        const buttons = document.querySelectorAll('.key');
        const heartLives = document.querySelectorAll('img');

        gameLetters.innerHTML = ''
        
        buttons.forEach(button => {
            button.className = 'key'
            button.disabled = false
        });

        heartLives.forEach(life => {
            life.src = 'images/liveHeart.png'
        });
    }
}