<template>
  <div id="app">
    <NavBar />
    <Video />
    <Section1 />
    <Section2 />
    <Section3 />
    <section4 />
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Video from './components/Video.vue';
import Section1 from './components/Section1.vue';
import Section2 from './components/Section2.vue';
import Section3 from './components/Section3.vue';
import Section4 from './components/Section4.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
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
      // eslint-disable-next-line
      window.addEventListener('scroll', onScroll);
      function elementVisible(el) {
        console.log(document.querySelector('.Carousel01-Arrow1').offsetTop);
        const top = el.offsetTop;
        const height = el.offsetHeight;
        const bottom = top + height;

        const IsOverBottom = top > (window.pageYOffset + window.innerHeight);
        const IsBeforeTop = bottom < window.pageYOffset;

        if (!IsOverBottom && !IsBeforeTop) {
          el.classList.add('show');
        } else {
          el.classList.remove('show');
        }
      }
      function onScroll() {
        // eslint-disable-next-line
        for (const item of document.querySelectorAll('.Animate')) {
          elementVisible(item);
        }
        // eslint-disable-next-line
        for (const item of document.querySelectorAll('.Animate2')) {
          elementVisible(item);
        }
        // eslint-disable-next-line
        for (const item of document.querySelectorAll('.Animate3')) {
          elementVisible(item);
        }
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
