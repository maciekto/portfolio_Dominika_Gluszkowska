window.onload = function() {
    console.log('hekalhsdf');
    // Video
    var video = document.querySelector(".Video");
    // Buttons
    var playButton = document.querySelector(".Play-Pause");
    var muteButton = document.querySelector(".mute");
    var fullScreenButton = document.querySelector(".full-screen");
  
    // Sliders
    var seekBar = document.querySelector(".Seek-Bar");
    var volumeBar = document.querySelector(".Volume-Bar");

    // Event listener for the play/pause button
    playButton.addEventListener("click", function() {
        if (video.paused == true) {
          // Play the video
          video.play();
      
          // Update the button text to 'Pause'
          playButton.innerHTML = "Pause";
        } else {
          // Pause the video
          video.pause();
      
          // Update the button text to 'Play'
          playButton.innerHTML = "Play";
        }
      });
    // Event listener for the mute button
    muteButton.addEventListener("click", function() {
        if (video.muted == false) {
        // Mute the video
        video.muted = true;
    
        // Update the button text
        muteButton.innerHTML = "Unmute";
        } else {
        // Unmute the video
        video.muted = false;
    
        // Update the button text
        muteButton.innerHTML = "Mute";
        }
    });
    // Event listener for the full-screen button
    fullScreenButton.addEventListener("click", function() {
        if (video.requestFullscreen) {
        video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen(); // Firefox
        } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen(); // Chrome and Safari
        }
    });
    // Event listener for the seek bar
    
    seekBar.addEventListener("change", function() {
    var time = video.duration * (seekBar.value / 100);
    // Calculate the new time
    // Update the video time
    video.currentTime = time;
    });

    setInterval(() => {
        seekBar.value = video.currentTime;
    }, 100);
  }
  