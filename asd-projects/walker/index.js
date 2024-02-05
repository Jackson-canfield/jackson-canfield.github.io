/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  var walker = {
    "positionX": 0,
    "positionY": 0,
    "speedX": 0,
    "speedY": 0
  };
  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);                          // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    redrawGameItem()
  }
  var KEY = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
  };
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.UP) {
      walker.speedY = -5;
      console.log("Up Arrow Pressed");
    }  
    if (event.which === KEY.DOWN) {
      walker.speedY = 5;
      console.log("Down Arrow Pressed");
    }  
    if (event.which === KEY.LEFT) {
      walker.speedX = -5;
      console.log("Left Arrow Pressed");
    }  
    if (event.which === KEY.RIGHT) {
      walker.speedX = 5;
      console.log("Right Arrow Pressed");
    }
  }
  function handleKeyUp(event) {
    if (event.which === KEY.UP) {
      walker.speedY = 0;
      console.log("Up Arrow Released");
    }  
    if (event.which === KEY.DOWN) {
      walker.speedY = 0;
      console.log("Down Arrow Released");
    }  
    if (event.which === KEY.LEFT) {
      walker.speedX = 0;
      console.log("Left Arrow Released");
    }  
    if (event.which === KEY.RIGHT) {
      walker.speedX = 0;
      console.log("Right Arrow Released");
    }
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem() {
    walker.positionX += walker.speedX;
    walker.positionY += walker.speedY;
  }
  
  function redrawGameItem() {
    $("#walker").css("left", walker.positionX);
    $("#walker").css("right", walker.positionX);
    $("#walker").css("top", walker.positionY);
    $("#walker").css("bottom", walker.positionY);
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
