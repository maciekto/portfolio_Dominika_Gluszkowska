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
      const NavBarModal = document.querySelector('.NavBar-Modal');
      const NavBarModal2 = document.querySelector('.NavBar-Modal-2');
      const NavBarLink = document.querySelectorAll('.NavBar-ModalLink');
      function Remove() {
        BurgerLine1.classList.remove('NavBar-HamburgerLine1_Exit');
        BurgerLine2.classList.remove('NavBar-HamburgerLine2_Exit');
        BurgerLine3.classList.remove('NavBar-HamburgerLine3_Exit');
        BurgerMain.removeEventListener('click', Remove);
        // eslint-disable-next-line
        BurgerMain.addEventListener('click', Open);
        NavBarModal.style.cssText = 'transform: translateX(100vw);';
        NavBarModal2.style.cssText = 'transform: translateX(50vw);';
      }
      // eslint-disable-next-line
      function Open() {
        BurgerLine1.classList.add('NavBar-HamburgerLine1_Exit');
        BurgerLine2.classList.add('NavBar-HamburgerLine2_Exit');
        BurgerLine3.classList.add('NavBar-HamburgerLine3_Exit');
        BurgerMain.removeEventListener('click', Open);
        BurgerMain.addEventListener('click', Remove);
        NavBarModal.style.cssText = 'transform: translateX(50vw);';
        NavBarModal2.style.cssText = 'transform: translateX(calc(-50vw - 20px));';
        NavBarLink.forEach((element) => {
          element.addEventListener('click', Remove);
        });
      }

      BurgerMain.addEventListener('click', Open);
    },
  },
};
</script>
