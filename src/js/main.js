
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

// Define a function that changes the color of the page
function changeColor(color) {
    document.body.style.backgroundColor = color;
  }

  // Call the function to change the color to blue
  changeColor('lightgreen');

  /*Code for Home Html*/

  var i=0, box1;
box1 = "Math is For Boys"
box2 = "i love science"
box3 = "We need english"
box4 = "I like to draw"
box5 = "I like spanish"

  function typing() {
    if(i<box1.length){
      document.getElementById("box1").innerHTML += box1.charAt(i);
      document.getElementById("box2").innerHTML += box2.charAt(i);
      document.getElementById("box3").innerHTML += box3.charAt(i);
      document.getElementById("box4").innerHTML += box4.charAt(i);
      document.getElementById("box5").innerHTML += box5.charAt(i);

      i++;
      setTimeout(typing,100);
    }
  }
  onclick.typing();
  function clearInput() {
}