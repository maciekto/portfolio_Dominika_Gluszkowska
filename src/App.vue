<template>
  <div id="app">
  <nav class="NavBar">
            <div class="NavBar-Logo">
                Dominika Głuszkowska - Graphic Designer
            </div>
            <div class="NavBar-Hamburger">

            </div>
        </nav>
        <section class="Carousel">
            <article class="Carousel-Inner">
                <video class="Video" src="./beforeXD/video_mo.mp4" type="video/mp4" autoplay loop muted>
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
            <div class="Carousel-Abovebar"></div>
        </section>
        <section class="Component Article1">
            <h3 class="Article1-Title"> NAJNOWSZE PRACE</h3>
            <article class="Article1-Carousel">
                <div class="Carousel01">
                    <div class="Carousel01-Arrow1"></div>
                    <div class="Carousel01-Arrow2"></div>
                    <div class="Carousel01-Item1 Carousel01-Item Carousel01-Item_Initial">
                        <div class="Carousel01-ItemContent">
                            <img src="./beforeXD/default1.jpg" alt="default1" class="Carousel01-ItemContent-Img">
                        </div>
                        <div class="Carousel01-ItemText Carousel01-ItemText1 Carousel01-ItemText1_Active">
                            PICTURE 1
                        </div>
                    </div>
                    <div class="Carousel01-Item2 Carousel01-Item">
                        <div class="Carousel01-ItemContent">
                            <img src="./beforeXD/default2.jpg" alt="default1" class="Carousel01-ItemContent-Img">
                        </div>
                        <div class="Carousel01-ItemText Carousel01-ItemText2 Carousel01-ItemText1_Notactive">
                            PICTURE 2
                        </div>
                    </div>
                    <div class="Carousel01-Item3 Carousel01-Item">
                        <div class="Carousel01-ItemContent">
                            <img src="./beforeXD/default3.jpg" alt="default1" class="Carousel01-ItemContent-Img">
                        </div>
                        <div class="Carousel01-ItemText Carousel01-ItemText3 Carousel01-ItemText1_Notactive">
                            PICTURE 3
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <section class="Component Component2">
            <article class="Component-Article Article2">

            </article>
        </section>
        <section class="Component Component3">
            <article class="Component-Article Article3">

            </article>
        </section>
        <footer class="Component Component4">
            <div class="Footer"></div>
        </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      login: 'login',
    };
  },
  mounted() {
    this.carousel01();
    this.videoControls();
  },
  methods: {
    carousel01() {
      const itemClassName = '.Carousel01-Item';
      const items = document.querySelectorAll(itemClassName);
      const totalItems = items.length;
      let slide1 = 0;
      const text1 = document.querySelector('.Carousel01-ItemText1');
      const text2 = document.querySelector('.Carousel01-ItemText2');
      const text3 = document.querySelector('.Carousel01-ItemText3');
      let moving = true;
      items[0].classList.remove('Carousel01-Item_Initial');
      // Set classes
      function setInitialClasses() {
        // Targets the previous, current, and next items
        // This assumes there are at least three items.
        items[totalItems - 1].classList.add('Carousel01-Item_Prev');
        items[0].classList.add('Carousel01-Item_Active');
        items[1].classList.add('Carousel01-Item_Next');
      }
      function disableInteraction() {
        // Set 'moving' to true for the same duration as our transition.
        // (0.5s = 500ms)
        moving = true;
        // setTimeout runs its function once after the given time
        setTimeout(() => {
          moving = false;
        }, 500);
      }
      function moveCarouselTo(slide) {
        if (!moving) {
          disableInteraction();
          if ((totalItems - 1) >= 2) {
            if (slide === 0) {
              items[slide].classList.add('Carousel01-Item_Active');
              items[slide].classList.remove('Carousel01-Item_Next');
              items[slide].classList.remove('Carousel01-Item_Prev');

              items[slide + 1].classList.add('Carousel01-Item_Next');
              items[slide + 1].classList.remove('Carousel01-Item_Prev');
              items[slide + 1].classList.remove('Carousel01-Item_Active');

              items[slide + 2].classList.add('Carousel01-Item_Prev');
              items[slide + 2].classList.remove('Carousel01-Item_Active');
              items[slide + 2].classList.remove('Carousel01-Item_Next');

              // texts
              setTimeout(() => {
                text1.classList.add('Carousel01-ItemText1_Active');
                text1.classList.remove('Carousel01-ItemText1_Notactive');
              }, 350);
              text3.classList.remove('Carousel01-ItemText3_Active');
              text3.classList.add('Carousel01-ItemText3_Notactive');
              text2.classList.remove('Carousel01-ItemText2_Active');
              text2.classList.add('Carousel01-ItemText2_Notactive');
            } else if (slide === 1) {
              items[slide - 1].classList.add('Carousel01-Item_Prev');
              items[slide - 1].classList.remove('Carousel01-Item_Active');
              items[slide - 1].classList.remove('Carousel01-Item_Next');
              items[slide - 1].classList.remove('Carousel01-Item_Initial');

              items[slide].classList.add('Carousel01-Item_Active');
              items[slide].classList.remove('Carousel01-Item_Next');
              items[slide].classList.remove('Carousel01-Item_Prev');

              items[slide + 1].classList.add('Carousel01-Item_Next');
              items[slide + 1].classList.remove('Carousel01-Item_Prev');
              items[slide + 1].classList.remove('Carousel01-Item_Active');

              // text

              setTimeout(() => {
                text2.classList.add('Carousel01-ItemText2_Active');
                text2.classList.remove('Carousel01-ItemText2_Notactive');
              }, 350);
              text1.classList.remove('Carousel01-ItemText1_Active');
              text1.classList.add('Carousel01-ItemText1_Notactive');
              text3.classList.remove('Carousel01-ItemText3_Active');
              text3.classList.add('Carousel01-ItemText3_Notactive');
            } else if (slide === 2) {
              items[slide - 2].classList.add('Carousel01-Item_Next');
              items[slide - 2].classList.remove('Carousel01-Item_Prev');
              items[slide - 2].classList.remove('Carousel01-Item_Active');

              items[slide - 1].classList.add('Carousel01-Item_Prev');
              items[slide - 1].classList.remove('Carousel01-Item_Active');
              items[slide - 1].classList.remove('Carousel01-Item_Next');

              items[slide].classList.add('Carousel01-Item_Active');
              items[slide].classList.remove('Carousel01-Item_Next');
              items[slide].classList.remove('Carousel01-Item_Prev');
              // text

              setTimeout(() => {
                text3.classList.add('Carousel01-ItemText3_Active');
                text3.classList.remove('Carousel01-ItemText3_Notactive');
              }, 350);
              text2.classList.remove('Carousel01-ItemText2_Active');
              text2.classList.add('Carousel01-ItemText2_Notactive');
              text1.classList.remove('Carousel01-ItemText1_Active');
              text1.classList.add('Carousel01-ItemText1_Notactive');
            }
          } else {
            console.log('error');
          }
        }
      }
      // Next navigation handler
      function moveNext() {
        // Check if moving
        if (!moving) {
        // If it's the last slide, reset to 0, else +1
          if (slide1 === (totalItems - 1)) {
            slide1 = 0;
          } else {
            slide1 += 1;
          }
          // Move carousel to updated slide
          moveCarouselTo(slide1);
        }
      }
      // Previous navigation handler
      function movePrev() {
        console.log('move prev');
        // Check if moving
        if (!moving) {
        // If it's the first slide, set as the last slide, else -1
          if (slide1 === 0) {
            slide1 = (totalItems - 1);
          } else {
            slide1 -= 1;
          }

          // Move carousel to updated slide
          moveCarouselTo(slide1);
        }
      }
      // Set event listeners
      function setEventListeners() {
        const next = document.getElementsByClassName('Carousel01-Arrow2')[0];
        const prev = document.getElementsByClassName('Carousel01-Arrow1')[0];
        next.addEventListener('click', moveNext);
        prev.addEventListener('click', movePrev);
      }
      function initCarousel() {
        setInitialClasses();
        setEventListeners();
        // Set moving to false so that the carousel becomes interactive
        moving = false;
      }
      // make it rain
      initCarousel();
    },
    videoControls() {
      console.log('hekalhsdf');
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

<style lang="scss">
  @import '0-plugins/_plugins-dir';
  @import '1-base/_base-dir';
  @import '2-layouts/_layouts-dir';
  @import '3-modules/_modules-dir';
  @import '4-states/_states-dir';
</style>
