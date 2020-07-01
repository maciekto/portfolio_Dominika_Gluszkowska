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
};
</script>

<style lang="scss">
  @import '0-plugins/_plugins-dir';
  @import '1-base/_base-dir';
  @import '2-layouts/_layouts-dir';
  @import '3-modules/_modules-dir';
  @import '4-states/_states-dir';
</style>
