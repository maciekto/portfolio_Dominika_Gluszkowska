<template>
    <section class="Component Article4" id="contact">
        <article class="Component-Article Article4-Text Animate">
          <h3 class="Article4-TextTitle"> Contact me through Instagram or Facebook here</h3>
          <p class="Article4-TextDescription"></p>
        </article>
        <aside class="Article4-Img">
          <img src="./../assets/insta.jpg" class="Article4-ImgMe Animate" @click="redirect">
          <img src="./../beforeXD/photoLogo.jpg" class="Article4-ImgMe Animate" @click="redirect2">
        </aside>
    </section>
</template>

<script>
export default {
  name: 'Section4',
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
