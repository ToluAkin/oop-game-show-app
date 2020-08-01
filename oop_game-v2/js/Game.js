/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
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

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const screenOverlay = document.querySelector('#overlay');
        const header = document.querySelector('#banner')
        const animation = ['animated', 'rubberBand']
        screenOverlay.style.display = 'none';
        
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        header.classList.add(...animation)
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
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
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const screenOverlay = document.querySelector('#overlay')
        const gameStatusMessage = document.querySelector('#game-over-message')

        const winAnimation = ['win', 'animated', 'jackInTheBox']
        const loseAnimation = ['lose', 'animated', 'rollIn']
        
        screenOverlay.style.display = ''

        if (gameWon) {
            screenOverlay.className = 'win'
            gameStatusMessage.textContent = 'Congratulations !!! You won!'
            gameStatusMessage.classList.add(...winAnimation)
        } else {
            screenOverlay.className = 'lose'
            gameStatusMessage.textContent = 'Game Lost! Try again?'
            gameStatusMessage.classList.add(...loseAnimation)
        }
        this.resetGame();
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        const letter = button.innerText
        const animation = ['wrong', 'animated', 'swing']
        button.disabled = true
        
        if (this.activePhrase.checkLetter(letter)) {
            button.classList.add('chosen')
            this.activePhrase.showMatchedLetter(letter)
            if (this.checkForWin())
                this.gameOver(true);
        } else {
            button.classList.add(...animation)
            this.removeLife()
        }
    }
    /**
     * Handles removal of selected letter, keys, animations
     * Adjusts the heart lives to 5 lives 
     */
    resetGame() {
        const gameLetters = document.querySelector('#phrase ul');
        const buttons = document.querySelectorAll('.key');
        const heartLives = document.querySelectorAll('img');
        const letters = document.querySelectorAll('.show');
    
        const letterAnimation = ['show', 'animated', 'bounce']
        document.querySelector('#banner').className = 'section';

        letters.forEach(letter => {
            letter.classList.remove(...letterAnimation)
        });

        buttons.forEach(button => {
            button.className = 'key'
            button.disabled = false
        });
        
        gameLetters.innerHTML = ''

        heartLives.forEach(life => {
            life.src = 'images/liveHeart.png'
        });
    }
}