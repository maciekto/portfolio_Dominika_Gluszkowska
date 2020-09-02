<template>
    <footer class="Component Footer">
      <p class="Footer-Title"> &copy; Dominika Głuszkowska 2020 - All rights reserved <br />
      Website Created by &copy; Maciej Tomaszewski - All rights reserved</p>
      <div class="Carousel-AbovebarContainer Footer-Contact">
            <div class="Carousel-AbovebarContainer1">
              <p class="Carousel-AbovebarContainer1Paragraph"> CV &#8250; </p>
              <img src="./../beforeXD/cvIcon.png" class="Carousel-AbovebarImg1">
            </div>
            <div class="Carousel-AbovebarContainer2">
              <img src="./../assets/insta.jpg" class="Carousel-AbovebarImg Carousel-AbovebarImg2" @click="redirect">
              <img src="./../beforeXD/photoLogo.jpg" class="Carousel-AbovebarImg Carousel-AbovebarImg3" @click="redirect2">
              <p class="Carousel-AbovebarContainer2Paragraph"> &#x2039; Contact </p>
            </div>
          </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    redirect() {
      window.location.href = 'https://www.instagram.com/emikotlet/';
    },
    redirect2() {
      window.location.href = 'https://www.facebook.com/domi.gluszkowska/';
    },
  },
};
</script>
