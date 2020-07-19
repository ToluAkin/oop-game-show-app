/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const ul = document.querySelector('#phrase ul');
        const phrase = this.phrase.split('');

        phrase.map(letter => {
            const li = document.createElement('li');
            li.classList.add('hide');
            li.textContent = `${letter}`;

            if (letter === ' ') {
                li.className = 'space';
            } else {
                li.classList.add('letter');
                li.classList.add(`${letter}`);
            }
            ul.appendChild(li);
        });
    }

    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    showMatchedLetter(letter) {
        const matchedAlphabet = document.getElementsByClassName(letter);
        matchedAlphabet.forEach(alphabet => {
            alphabet.classList.remove('hide');
            alphabet.classList.add('show');
        });
    }
}