<template>
  <div id="app">
    <PageLoad/>     <!-- Loader which have minigame for user to play with until loading ends -->
    <NavBar />      <!-- Title with link to CV and social media, Hamburger menu icon connected with modal -->
    <NavBarModal /> <!-- Modal with links to page sections -->
    <Video />       <!-- Video with custom video controls -->
    <Section1 />    <!-- LATEST section - contains carousel width 3 latest projects -->
    <Section2 />    <!-- ABOUT section - contains Title, Desription, photo and photo attribution of client -->
    <Section3 />    <!-- TYPE OF WORK section - contains Main title and Title, Description, photo, photo attribution for each type of work -->
    <section4 />    <!-- CONTACT section - contains Title and 2 photo with links to social media -->
    <Footer />      <!-- FOOTER - links to social media, CV and All rights reserved -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import NavBarModal from './components/NavBarModal.vue';
import Video from './components/Video.vue';
import Section1 from './components/Section1.vue';
import Section2 from './components/Section2.vue';
import Section3 from './components/Section3.vue';
import Section4 from './components/Section4.vue';
import Footer from './components/Footer.vue';
import PageLoad from './components/PageLoad.vue';

export default {
  name: 'App',
  components: {
    PageLoad,
    NavBar,
    NavBarModal,
    Video,
    Section1,
    Section2,
    Section3,
    Section4,
    Footer,
  },
  mounted() {
    this.textAnimate();
  },
  methods: {
    textAnimate() {
      function AddClassForAnimation(div) {
        const topOfDiv = div.offsetTop;
        const heightOfDiv = div.offsetHeight;
        const bottomOfDiv = topOfDiv + heightOfDiv;

        const IsOverBottom = topOfDiv > (window.pageYOffset + window.innerHeight);
        const IsBeforeTop = bottomOfDiv < window.pageYOffset;

        if (!IsOverBottom && !IsBeforeTop) {
          div.classList.add('show');
        } else {
          div.classList.remove('show');
        }
      }
      let prevScrollposN = window.pageYOffset;
      // eslint-disable-next-line
      window.addEventListener('scroll', onScrollShowNavBar);
      function onScrollShowNavBar() {
        // eslint-disable-next-line
        for (const div of document.querySelectorAll('.Animate')) {
          AddClassForAnimation(div);
        }
        // eslint-disable-next-line
        for (const div of document.querySelectorAll('.Animate2')) {
          AddClassForAnimation(div);
        }
        // eslint-disable-next-line
        for (const div of document.querySelectorAll('.Animate3')) {
          AddClassForAnimation(div);
        }
        // eslint-disable-next-line
        let currentScrollPosN = window.pageYOffset;
        if (prevScrollposN > currentScrollPosN) {
          document.querySelector('.NavBar').style.cssText = 'top: 0;';
        } else if (currentScrollPosN > 2200) {
          document.querySelector('.NavBar').style.cssText = 'top: 0;';
        } else {
          document.querySelector('.NavBar').style.cssText = 'top: -10vh;';
        }
        prevScrollposN = currentScrollPosN;
      }
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
  .Animate {
    transition: 1s;
    opacity: 0;
    transform: translateY(200px);
  }
  .Animate2 {
    transition: 1s;
    opacity: 0;
    transform: translateX(100vw);
  }
  .Animate3 {
    transition: 1s;
    opacity: 0;
    transform: translateX(-100vw);
  }
  .Animate4 {
    animation: animation4 0.7s alternate infinite;
  }
  @keyframes animation4 {
    0%{
      transform: rotate(8deg);
    }
    100%{
      transform: rotate(-8deg);
    }
  }
  .show{
    opacity: 1;
    transition: 1s;
    transform: translateY(0px);
  }
</style>
