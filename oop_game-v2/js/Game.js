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

    startGame() {
        const overlayDiv = document.querySelector('#overlay');
        overlayDiv.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide');
        if (hiddenLetters.length === 0) {
            return true;
        }
    }

    removeLife() {
        
    }
}