/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    
    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const ul = document.querySelector('#phrase ul');
        const phrase = this.phrase.split('');

        phrase.map(letter => {
            const li = document.createElement('li');
            li.classList.add('hide');
            li.textContent = `${letter}`;

            if (letter === ' ') li.className = 'space';
            else {
                li.classList.add('letter');
                li.classList.add(`${letter}`);
            }
            ul.appendChild(li);
        });
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const matchedAlphabet = document.getElementsByClassName(letter);

        for (let i = 0; i < matchedAlphabet.length; i++) {
            matchedAlphabet[i].classList.remove('hide');
            matchedAlphabet[i].classList.add('show');
        }
    }
}