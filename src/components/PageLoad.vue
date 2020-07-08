<template>
    <div class="PageLoad">
        <div class="PageLoad-Counter"> {{ clickCount }}</div>
        <div class="PageLoad-Title">Loading</div>
        <div @click="RandomNumber" @mouseover="RandomNumber" class="PageLoad-Circle" :style="{top: randomNumberHeight + '%', left: randomNumberWidth + '%'}"></div>
    </div>
</template>

<script>
export default {
  name: 'PageLoad',
  data() {
    return {
      randomNumberWidth: null,
      randomNumberHeight: null,
      clickCount: 0,
    };
  },
  mounted() {
    this.RandomNumber();
  },
  methods: {
    RandomNumber() {
      const ValueForCheckWidth = Math.floor(Math.random() * 100) + 1;
      const ValueForCheckHeight = Math.floor(Math.random() * 100) + 1;
      if ((ValueForCheckWidth >= 60 || ValueForCheckWidth <= 40) && (ValueForCheckHeight >= 60 || ValueForCheckHeight <= 40) && (ValueForCheckWidth < 90) && (ValueForCheckHeight < 90)) {
        this.clickCount += 1;
        this.randomNumberWidth = ValueForCheckWidth;
        this.randomNumberHeight = ValueForCheckHeight;
      } else {
        this.RandomNumber();
      }
    },
  },
};
</script>
