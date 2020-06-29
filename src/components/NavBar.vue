<template>
    <nav class="NavBar">
            <div class="NavBar-Logo">
              <h2 class="NavBar-LogoTitle"> Dominika Głuszkowska - Graphic Designer </h2>
            </div>
            <div class="NavBar-Hamburger">
              <span class="NavBar-HamburgerLine NavBar-HamburgerLine1"></span>
              <span class="NavBar-HamburgerLine NavBar-HamburgerLine2"></span>
              <span class="NavBar-HamburgerLine NavBar-HamburgerLine3"></span>
            </div>
        </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      event: 'BurgerOpen',
    };
  },
  mounted() {
    this.Burger();
  },
  methods: {
    Burger() {
      const BurgerMain = document.querySelector('.NavBar-Hamburger');
      const BurgerLine1 = document.querySelector('.NavBar-HamburgerLine1');
      const BurgerLine2 = document.querySelector('.NavBar-HamburgerLine2');
      const BurgerLine3 = document.querySelector('.NavBar-HamburgerLine3');

      function Remove() {
        BurgerLine1.classList.remove('NavBar-HamburgerLine1_Exit');
        BurgerLine2.classList.remove('NavBar-HamburgerLine2_Exit');
        BurgerLine3.classList.remove('NavBar-HamburgerLine3_Exit');
        BurgerMain.removeEventListener('click', Remove);
        // eslint-disable-next-line
        BurgerMain.addEventListener('click', Open);
      }
      // eslint-disable-next-line
      function Open() {
        BurgerLine1.classList.add('NavBar-HamburgerLine1_Exit');
        BurgerLine2.classList.add('NavBar-HamburgerLine2_Exit');
        BurgerLine3.classList.add('NavBar-HamburgerLine3_Exit');
        BurgerMain.removeEventListener('click', Open);
        BurgerMain.addEventListener('click', Remove);
      }

      BurgerMain.addEventListener('click', Open);
    },
  },
};
</script>
