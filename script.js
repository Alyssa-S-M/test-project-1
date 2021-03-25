// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

///Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var debug = false;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var mistakes = 0;

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    pattern = [];
    mistakes = 0
    clueHoldTime = 1000;
    for(let i=0;i<=8;i++)
      {
        pattern.push((Math.floor(Math.random()*Math.floor(6)))+ 1);
      }
  
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!!");
}

// Sound Synthesis Functions
const freqMap = {
  1: 61.6,
  2: 351.2,
  3: 212,
  4: 306.2,
  5: 430,
  6: 110.5
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

function lightButton(btn){
  document.getElementById("Btn"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("Btn"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  var guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime = clueHoldTime - 100;
}

function guess(btn){
  //console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // I made the skeleton and compared with the version to ensure my variable were used
  // correctly. I did initially misunderstand the usage of guessCounter, but after
  // looking at the sample code, I understand the error I had. Something I noticed
  // however was a small error in the sample code. When the pattern is found and 
  // we move to the next sequence, the guessCounter needs to be set back to zero. 
  // It's listed in the playClueSequence function however, when I attempted to run the
  // the sample code, i would repeated lose the game even if I put the correct answer.
  // After some troubleshooting, I found that it was becuase the guessCounter was not 
  // resetting despite setting to zero in the function. Including this in the else
  // statement fixed this issue. 
   if(debug)
  {
    console.log("user guessed: " + btn + " and spot in counter was " + pattern[guessCounter] );
    console.log("Answer: " + pattern[guessCounter]);
    console.log("Progress: " + progress);
    console.log("GuessCounter: " + guessCounter);
  }
    /*if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        guessCounter = 0;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    //GAME OVER: LOSE!
    loseGame();
  }
} */ 
  
  
  
  
  if(pattern[guessCounter] == btn)
    {
      if(guessCounter == progress)
      {
      // Correct, now check if finished all in the sequence
        if(progress == pattern.length - 1)
        {
          winGame(); 
        }
        else
        {
            progress++;
            guessCounter = 0;
            playClueSequence();
        }
      }
      else
      {
          guessCounter++;
      }
    }
  else
    {
      // Lose
      //console.log("user guessed: " + btn + "and spot in counter was" + pattern[guessCounter] );
      mistakes++;
      if(mistakes == 3)
        {
          loseGame();
        }
    }
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)