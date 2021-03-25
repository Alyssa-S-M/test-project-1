# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Alyssa Moncrief

Time spent: 4 hours spent in total

Link to project: https://glitch.com/edit/#!/decorous-plume-barge?path=README.md%3A8%3A0

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

## Video Walkthrough

Here's a walkthrough of implemented user stories:
The two links below show the stylisic features such as button color changes and start/end button changes as well.
Unfortunately audio would not record as these are gifs.
* [x] A gif showing winning the game: http://g.recordit.co/2eLMEVqfJD.gif
* [x] A gif showing losing the game after guessing incorrectly 3 times: http://g.recordit.co/msjtm4Tn9s.gif

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I used the website to that was linked for img though I ran out of time to implement those features unfortunately. I also looked up the specific function
inserting into an array. I have a tendency to use append since I started with lists in Python, but in this case, I needed to use push like on a vector!
There was a problem with the audio aspect at first, so I looked up potencial reasons the audio would fail, but I talk a little bit more about that below.


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
There were two main challenges. I spent around an hour playing around with the audio since it would not work on my computer. I moved things around in the
provided code and inserted a lot of new lines to work around it. I ended up looking online for potencial reasons this problem could occur and I found out
it was ilkely due to my browsers, Safari and Google Chrome. When I tried a different browser, Mircosoft Edge, it worked, so I was able to progress. The second
main issue I had was concerning the img. I looked through the provided link for img but I was unable to get the picture to hide until the button was clicked.
I tried using similar features such as class="hidden" but was unable to get the image to show once more when the button got pressed.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
My biggest question is how to show/hide images when buttons are pressed as that was the part I left off on. Since I did not get to start the
timer feature, how to implement that is on my mind as well. 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
I would continue adding additional features! I'm determined to understand how to hide and show images when I click on the button. Adding on the timer feature,
background music, and score counter are other features I would implement.


## License

    Copyright Alyssa Moncrief

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
