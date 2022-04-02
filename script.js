//Global constants
//const clueHoldTime = 1000;
const cluePauseTime = 333; 
const nextClueWaitTime = 1000;

//Global Variables
var pattern = [2, 5, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000;
var strikes;

function startGame(){
    //initialize game variables
    initializePattern();
    strikes = 0;
    progress = 0;
    clueHoldTime = 1000;
    gamePlaying = true;
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function initializePattern() {
  for(let i = 0; i < pattern.length; i++) {
    pattern[i] = Math.round(Math.random()*(5-1)) + 1;
  }
}

function stopGame(){
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

const freqMap = {
  1: 225.5,
  2: 310.9,
  3: 372,
  4: 420.2,
  5: 550.1
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  guessCounter = 0;
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime /= 1.3;
}

function loseGame(){
  stopGame();
  alert("Strike Three! Game Over. You clicked the wrong button. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. Congratulations! You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  if(btn == pattern[guessCounter]) {
    if(guessCounter == pattern.length-1)
      winGame();
    else if(guessCounter == progress) {
      progress++;
      playClueSequence();
    }
    else
      guessCounter++;
  }
  else if (btn != pattern[guessCounter]) {
    if(strikes == 2) {
      loseGame();
    }
    else {
      strikes++;
      alert("Strike " + strikes + "!");
      console.log("Strike: " + strikes);
    }
  }
    
}