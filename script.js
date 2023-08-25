'use strict'

//  get the secret number
let secret = Math.trunc(Math.random() * 20) + 1
// put the number in its place
document.querySelector('.number').textContent = '?'

//  get a score variable
let score = 20
console.log(secret)
let maxi = -1

// query of the button
document.querySelector('.guess').value = ''


//get the input and check the input with answer

document.querySelector('.check').addEventListener('click', function () {
    const num = Number(document.querySelector('.guess').value);  // Removed console.log

    if (!num) {
        document.querySelector('.message').textContent = "TYPE SOMETHING"
    } else if (num === secret) {
        document.querySelector('.message').textContent = '🎉 🥳 Correct'
        document.querySelector('.score').textContent = score
        //  change the color
        document.querySelector('main').style.background = 'yellow'
        // change the number
        document.querySelector('.number').textContent = secret
        // get maxi
        if (score > maxi) {
            maxi = score
        }
        // update the maxi
        document.querySelector('.highscore').textContent = maxi
        // Change the message after a 5-second delay
        setTimeout(function() {
            document.querySelector('.message').textContent = 'Try Again !';
            document.querySelector('.score').textContent = 0
            score = 20
            secret = Math.trunc(Math.random() * 20) + 1
            // put the number in its place
            document.querySelector('.number').textContent = '?'
            //  change the color
            document.querySelector('main').style.background = 'pink'
        }, 5000); // 5000 milliseconds = 5 seconds

    } else if (num > secret) {
        document.querySelector('.message').textContent = '📈 Too High'
        score--
    } else {
        document.querySelector('.message').textContent = '📉 Too Low'
        score --
    }
    // check if score > 0
    if (!score) {
        document.querySelector('.message').textContent = 'You Lost 😟'
    }
})

// create the reset button
document.querySelector('.again').addEventListener('click', function () {
    // Reload the current page
    location.reload();
})