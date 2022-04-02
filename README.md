# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Viraj Patel

Time spent: **4** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I used this website to research more about the Math.random() function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

One challenge that I had in this submission was with the optional feature of randomizing the patterns each round. I understood the concept of this feature, and I was confident in the way I was going to implement it using Math.random(). However, what I did not take into account was that Math.random() returns a floating point value and not an integer. Therefore, when I was filling the pattern array with values that were returned by Math.random(), I was not inserting integers. This resulted in my app not working because the buttons were integers and not floating point values, and so the pattern wasn’t being displayed to the user because the pattern array did not accurately represent the buttons for the game. I found this bug after looking up resources on Math.random() and realizing that it does not return integers. I found that a solution to this was to use the Math.round() function to round the number returned by Math.random() to the nearest integer. This fixed the issue that I had, as now the elements of my pattern array were integers and my app was able to work.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

When I was reading through the required steps, I encountered something in the JavaScript Functions and Events Reference section about web browsers triggering events representing user actions. This section also mentions that there are events that occur that are not the direct result of user actions. I am curious as to what these events are and what triggered them if the user was not involved in the process of triggering them. Could it be events that occur as a result of, for example, unstable network issues such as a bad WiFi signal? I am also curious about how the web browser handles certain errors that are brought up that are not caused by the user. I wonder if there are chunks of JavaScript code that would be executed in the case of an error for every possible error imaginable.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, I would have spent more time trying to implement the last two optional features which were customizing the game buttons and adding a timer. I tried to customize the buttons by adding certain images to them, but with the limited time I had, I was not able to look up enough resources to help me achieve the desired result. With a few more hours, I would have also attempted to implement a user input feature where the user is able to enter how many buttons they would want to play with and how long the pattern would be. For instance, the current pattern only goes up to 8 presses of the button, and I would have liked to implement a game where the user gets to decide how long the pattern to guess would be. I would have also spent time implementing a feature that at the end of each game would display the number of correct guesses the user reached before either winning the game or guessing incorrectly. Another feature that I would have implemented is a button that the user could click if he/she wants to see the clues again. For example, after the pattern is shown to the user and it is the user’s turn to repeat the pattern, the user would have an option to replay the pattern before trying to repeat it him/herself. Finally, I would have also implemented 

## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright Viraj Patel

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
