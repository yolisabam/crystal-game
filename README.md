# Solar System Game
## Live Link 
 -  http://yolisa-bam.com/solar-system-js/

## Description on how to use the app

- You will be given a random "number to guess" at the start of the game.
- There are four planets below. By clicking on a planet you will add a specific amount of points to your total score. 
- You win the game by matching your total score to the "number to guess". You lose the game if your total score goes above he random number. 
- The value of each planet is hidden from you until you click on it.
- Each time the game starts, the values on the planets change too!

## Requirements

1. There will be four planets displayed as buttons on the page.
2. The player will be shown a random number at the start of the game.
3. When the player clicks on a planet, it will add a specific amount of points to the player's total score.
4. Your game will hide this amount until the player clicks a planet.
5. When they do click one, update the player's score counter.
6. The player wins if their total score matches the random number from the beginning of the game.
7. The player loses if their score goes above the random number.
8. The game restarts whenever the player wins or loses.
9. When the game begins again, the player should see a new random number. Also, all the planets will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
10. The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

## Game Design Notes

- The random number shown at the start of the game should be between 19 - 120.
- Each planet should have a random hidden value between 1 - 12.

## Technologies Used

- Jquery for Dom Manipulation
- HTML
- CSS
- Javascript
