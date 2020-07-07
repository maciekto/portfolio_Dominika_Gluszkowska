<template>
    <section class="Carousel">
            <article class="Carousel-Inner">
                <video class="Video Video1" type="video/mp4" autoplay loop muted src="./../beforeXD/video_mo.mp4">
                </video>
                <video class="Video Video2" type="video/mp4" autoplay loop muted src="./../beforeXD/video_pc.mp4">
                </video>
                <div class="Video-Controls">
                    <input type="range" class="Seek-Bar" value="0" step="0.001" disabled />
                </div>
                <div type="button" class="PlayPause">
                    <div class="PlayPause-Inner">
                        <span class="ele1_pause ele ele1"></span>
                        <span class="ele2_pause ele ele2"></span>
                        <span class="ele3_pause ele ele3"></span>
                    </div>
                </div>
                <div class="Controls">
                    <div class="Controls-Mute">
                </div>
                <input type="range" class="Controls-VolumeBar" min="0" max="1" step="0.01" value="1">
                <div type="button" class="Controls-Fullscreen"></div>
            </div>
        </article>
        <div class="Carousel-Bottombar"></div>
        <div class="Carousel-Abovebar">
          <div class="Carousel-AbovebarContainer">
            <div class="Carousel-AbovebarContainer1">
              <p class="Carousel-AbovebarContainer1Paragraph"> CV &#8250; </p>
              <img src="./../beforeXD/cvIcon.png" class="Carousel-AbovebarImg1">
            </div>
            <div class="Carousel-AbovebarContainer2">
              <img src="./../beforeXD/photoLogo2.jpg" class="Carousel-AbovebarImg Carousel-AbovebarImg2">
              <img src="./../beforeXD/photoLogo.jpg" class="Carousel-AbovebarImg Carousel-AbovebarImg3">
              <p class="Carousel-AbovebarContainer2Paragraph"> &#x2039; Contact </p>
            </div>
          </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Video',
  data() {
    return {
      initialVideoChange: 0,
      initialPageLoad: 0,
      change: 0,
    };
  },
  mounted() {
    this.videoControls();
    this.myEventHandler();
    this.pageLoading();
  },
  created() {
    window.addEventListener('resize', this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener('resize', this.myEventHandler);
  },
  methods: {
    pageLoading() {
      const video1 = document.querySelector('.Video1');
      const video2 = document.querySelector('.Video2');
      const PageLoadInScript = document.querySelector('.PageLoad');
      setInterval(() => {
        if (this.initialPageLoad === 0) {
          if (video1.readyState === 4 && video2.readyState === 4) {
            this.initialPageLoad = 1;
            PageLoadInScript.classList.add('PageLoad_loaded');
            setTimeout(() => {
              PageLoadInScript.style.cssText = 'display: none';
            }, 400);
          }
        }
      }, 1000);
    },
    myEventHandler() {
      if (window.innerWidth < 1024 && (this.change === 1 || this.initialVideoChange === 0)) {
        this.initialVideoChange = 1;
        const Video1 = document.querySelector('.Video1');
        const Video2 = document.querySelector('.Video2');
        Video2.style.cssText = 'display: none';
        Video1.style.cssText = 'display: block';
        this.change = 0;
      } else if (window.innerWidth >= 1024 && (this.change === 0 || this.initialVideoChange === 0)) {
        this.initialVideoChange = 1;
        const Video1 = document.querySelector('.Video1');
        const Video2 = document.querySelector('.Video2');
        Video2.style.cssText = 'display: block';
        Video1.style.cssText = 'display: none';
        this.change = 1;
      }
    },
    videoControls() {
      // Video
      const video = document.querySelector('.Video');
      // Buttons
      const playButton = document.querySelector('.PlayPause');
      const muteButton = document.querySelector('.Controls-Mute');
      const fullScreenButton = document.querySelector('.Controls-Fullscreen');

      // Sliders
      const seekBar = document.querySelector('.Seek-Bar');
      const volumeBar = document.querySelector('.Controls-VolumeBar');

      // Play pause
      const ele1 = document.querySelector('.ele1');
      const ele2 = document.querySelector('.ele2');
      const ele3 = document.querySelector('.ele3');

      // Event listener for the play/pause button
      playButton.addEventListener('click', () => {
        if (video.paused === true) {
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
      muteButton.addEventListener('click', () => {
        if (video.muted === false) {
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
      fullScreenButton.addEventListener('click', () => {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen(); // Firefox
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen(); // Chrome and Safari
        }
      });
      // Event listener for the volume bar
      volumeBar.addEventListener('change', () => {
      // Update the video volume
        video.volume = volumeBar.value;
      });

      setInterval(() => {
        seekBar.value = video.currentTime;
      }, 1);
    },
  },
};
</script>
