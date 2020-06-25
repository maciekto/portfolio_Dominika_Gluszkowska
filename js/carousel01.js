!(function(d){
    let itemClassName = ".Carousel01-Item",
        items = d.querySelectorAll(itemClassName),
        totalItems = items.length,
        slide = 0,
        text1 = d.querySelector('.Carousel01-ItemText1');
        text2 = d.querySelector('.Carousel01-ItemText2');
        text3 = d.querySelector('.Carousel01-ItemText3');
        moving = true;
        items[0].classList.remove("Carousel01-Item_Initial");
    // Set classes 
    function setInitialClasses() {
        // Targets the previous, current, and next items
        // This assumes there are at least three items.
        items[totalItems - 1].classList.add("Carousel01-Item_Prev");
        items[0].classList.add("Carousel01-Item_Active");
        items[1].classList.add("Carousel01-Item_Next");
    }
    // Set event listeners
    function setEventListeners() {
        let next = d.getElementsByClassName('Carousel01-Arrow2')[0],
            prev = d.getElementsByClassName('Carousel01-Arrow1')[0];
        next.addEventListener('click', moveNext);
        prev.addEventListener('click', movePrev);
    }
    // Next navigation handler
    function moveNext() {
        // Check if moving
        if (!moving) {
        // If it's the last slide, reset to 0, else +1
        if (slide === (totalItems - 1)) {
            slide = 0;
        } else {
            slide++;
        }
        console.log(slide);
        // Move carousel to updated slide
        moveCarouselTo(slide);
        }
    }
    // Previous navigation handler
    function movePrev() {
        console.log('move prev');
        // Check if moving
        if (!moving) {
        // If it's the first slide, set as the last slide, else -1
        if (slide === 0) {
            slide = (totalItems - 1);
        } else {
            slide--;
        }
                
        // Move carousel to updated slide
        moveCarouselTo(slide);
        }
    }
    function disableInteraction() {
        // Set 'moving' to true for the same duration as our transition.
        // (0.5s = 500ms)
        moving = true;
        // setTimeout runs its function once after the given time
        setTimeout(function(){
          moving = false
        }, 500);
    }
    function moveCarouselTo(slide) {
        if(!moving) {
          disableInteraction();
          if ((totalItems - 1) >= 2) {
              if(slide === 0) {  
                items[slide].classList.add("Carousel01-Item_Active");
                items[slide].classList.remove("Carousel01-Item_Next");
                items[slide].classList.remove("Carousel01-Item_Prev");

                items[slide + 1].classList.add("Carousel01-Item_Next");
                items[slide + 1].classList.remove("Carousel01-Item_Prev");
                items[slide + 1].classList.remove("Carousel01-Item_Active");

                items[slide + 2].classList.add("Carousel01-Item_Prev");
                items[slide + 2].classList.remove("Carousel01-Item_Active");
                items[slide + 2].classList.remove("Carousel01-Item_Next");

                // texts 
                setTimeout(() => {
                    text1.classList.add('Carousel01-ItemText1_Active');
                    text1.classList.remove('Carousel01-ItemText1_Notactive');
                }, 350);
                text3.classList.remove('Carousel01-ItemText3_Active');
                text3.classList.add('Carousel01-ItemText3_Notactive');
                text2.classList.remove('Carousel01-ItemText2_Active');
                text2.classList.add('Carousel01-ItemText2_Notactive');
              }else if(slide === 1){
                items[slide - 1].classList.add("Carousel01-Item_Prev");
                items[slide - 1].classList.remove("Carousel01-Item_Active");
                items[slide - 1].classList.remove("Carousel01-Item_Next");
                items[slide - 1].classList.remove("Carousel01-Item_Initial");

                items[slide].classList.add("Carousel01-Item_Active");
                items[slide].classList.remove("Carousel01-Item_Next");
                items[slide].classList.remove("Carousel01-Item_Prev");

                items[slide + 1].classList.add("Carousel01-Item_Next");
                items[slide + 1].classList.remove("Carousel01-Item_Prev");
                items[slide + 1].classList.remove("Carousel01-Item_Active");

                //text
                
                setTimeout(() => {
                    text2.classList.add('Carousel01-ItemText2_Active');
                    text2.classList.remove('Carousel01-ItemText2_Notactive');
                }, 350);
                text1.classList.remove('Carousel01-ItemText1_Active');
                text1.classList.add('Carousel01-ItemText1_Notactive');
                text3.classList.remove('Carousel01-ItemText3_Active');
                text3.classList.add('Carousel01-ItemText3_Notactive');
                
              }else if(slide === 2){
                items[slide - 2].classList.add("Carousel01-Item_Next");
                items[slide - 2].classList.remove("Carousel01-Item_Prev");
                items[slide - 2].classList.remove("Carousel01-Item_Active");

                items[slide - 1].classList.add("Carousel01-Item_Prev");
                items[slide - 1].classList.remove("Carousel01-Item_Active");
                items[slide - 1].classList.remove("Carousel01-Item_Next");

                items[slide].classList.add("Carousel01-Item_Active");
                items[slide].classList.remove("Carousel01-Item_Next");
                items[slide].classList.remove("Carousel01-Item_Prev");    
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
          }else{
              console.log('error');
          }
        }
    }
    function initCarousel() {
        setInitialClasses();
        setEventListeners();
        // Set moving to false so that the carousel becomes interactive
        moving = false;
    }
      // make it rain
    initCarousel();
}(document))