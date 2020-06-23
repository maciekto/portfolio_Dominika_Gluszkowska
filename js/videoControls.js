window.onload = function() {
    console.log('hekalhsdf');
    // Video
    var video = document.querySelector(".Video");
    // Buttons
    var playButton = document.querySelector(".PlayPause");
    var muteButton = document.querySelector(".Controls-Mute");
    var fullScreenButton = document.querySelector(".Controls-Fullscreen");
  
    // Sliders
    var seekBar = document.querySelector(".Seek-Bar");
    var volumeBar = document.querySelector(".Controls-VolumeBar");

    // Play pause
    var ele1 = document.querySelector('.ele1');
    var ele2 = document.querySelector('.ele2');
    var ele3 = document.querySelector('.ele3');

    // Event listener for the play/pause button
    playButton.addEventListener("click", function() {
        if (video.paused == true) {
          // Play the video
          video.play();
      
          // Update the button text to 'Pause'
          ele1.classList.remove('ele1_play');
          ele2.classList.remove('ele2_play');
          ele3.classList.remove('ele3_play');
          ele1.classList.add('ele1_pause');
          ele2.classList.add('ele2_pause');
          ele3.classList.add('ele3_pause');
        } else {
          // Pause the video
          video.pause();
      
          // Update the button text to 'Play'
          ele1.classList.remove('ele1_pause');
          ele2.classList.remove('ele2_pause');
          ele3.classList.remove('ele3_pause');
          ele1.classList.add('ele1_play');
          ele2.classList.add('ele2_play');
          ele3.classList.add('ele3_play');
        }
      });
    // Event listener for the mute button
    muteButton.addEventListener("click", function() {
        if (video.muted == false) {
        // Mute the video
        video.muted = true;
    
        // Update the button text
        muteButton.style.cssText = "background: url('beforeXD/mute.png') center center no-repeat; background-size: 70%;";
        } else {
        // Unmute the video
        video.muted = false;
    
        // Update the button text
        muteButton.style.cssText = "background: url('beforeXD/unmute.png') center center no-repeat; background-size: 70%;";
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
    // Event listener for the volume bar
    volumeBar.addEventListener("change", function() {
      // Update the video volume
      video.volume = volumeBar.value;
    });

    setInterval(() => {
        seekBar.value = video.currentTime;
    }, 1);
  }
  