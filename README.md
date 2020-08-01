# Treehouse-FSJS-4
OOP Game Show App

The game show app includes a game and phrase class. 
The player’s goal is to guess all the letters in a hidden, random phrase.
The player clicks an onscreen  or system's keyboard to guess letters in the phrase.
If the selected letter is not in the phrase, one of the player's hearts in the scoreboard is changed from a "live" heart to a "lost" heart.
The player keeps choosing letters until they reveal all the letters in the phrase, or they make five incorrect guesses.
If the selected letter is in the phrase at least once, the letter and its position in the phrase is highlighted on screen. All instances of the letter are made visible (so if there are 3 A's, all of the A's in the phrase appear at once).

Animation is added to the app using animate.css.
Animation is added when the game refreshes on the overlay, on the hearder when the game starts, when a wrong letter is clicked or pressed, when the right letter is revealed.
Animation is added using javascript not css.
An adjust was made to the css provided. I added a attribute `user-select: none` to the body element. So that players can't highlight the hidden letters when double clicked.
