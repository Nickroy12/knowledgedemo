// dark mode function
function toggleTheme(switchElement) {
  if (switchElement.checked) {
      document.body.classList.add('bgdark', 'text-white');
      document.body.classList.remove('bg-light', 'text-dark');
      dropdownNav.classList.add('bgdark', 'text-white');
      dropdownNav.body.classList.remove('bg-light', 'text-dark');
      
  } else {
      document.body.classList.add('bg-light', 'text-dark');
      document.body.classList.remove('bgdark', 'text-white');
      dropdownNav.classList.add('bg-light', 'text-dark');
      dropdownNavbar.classList.remove('bgdark', 'text-white');
  }
}
// end dark mode 
// offCanvas start 
const menuIcon = document.getElementById('menu-icon');
const offCanvas = document.getElementById('off-canvas');
const closeBtn = document.getElementById('close-btn');

menuIcon.addEventListener('click', () => {
    offCanvas.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    offCanvas.classList.remove('active');
});
// offCanvas canvas end

// home slider start  

document.addEventListener('DOMContentLoaded', () => {
  
    //------ Slider Begin
      const CaroS = document.querySelector('.Carousel-slider');
      const CaroSlider = new MicroSlider(CaroS, { indicators: false, indicatorText: '' });
      const hammer = new Hammer(CaroS);
      const CaroSTimer = 1000;
      let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
      
    //------- Mouseenter Event
      CaroS.onmouseenter = function(e) {
          clearInterval(CaroAutoplay); 
          console.log(e.type + ' mouse detected');
      }
    
    //----- Mouseleave Event
      CaroS.onmouseleave = function(e) {
          clearInterval(CaroAutoplay); 
          CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
          console.log(e.type + ' mouse detected');
      }
    
    //----- Mouseclick Event
      CaroS.onclick = function(e) {
          clearInterval(CaroAutoplay); 
          console.log(e.type + ' mouse detected');
      }
    
    //------ Gesture Tap Event
      hammer.on('tap', function(e) {
          clearInterval(CaroAutoplay);
          console.log(e.type + ' gesture detected');
      });
    
    //----- Gesture Swipe Event
      hammer.on('swipe', function(e) {
          clearInterval(CaroAutoplay); 
          CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
          console.log(e.type + ' gesture detected');
      });
  
    let slideLink = document.querySelectorAll('.slider-item');
    if (slideLink && slideLink !== null && slideLink.length > 0){
      slideLink.forEach( el => el.addEventListener('click', e => {
        e.preventDefault();
        let href = el.dataset.href;
        let target = el.dataset.target;
        if (href !== '#') window.open(href, target);
      }));
    }
    

    
  });
      //---- Slider End
      // Get the button
      let backToTopBtn = document.getElementById('backToTopBtn');

      window.onscroll = function () {
          if (document.documentElement.scrollTop > 100) {
              backToTopBtn.style.top = "80%";  // Moves the button down into view
              backToTopBtn.style.opacity = "1";
          } else {
              backToTopBtn.style.top = "-60px"; // Moves the button up out of view
              backToTopBtn.style.opacity = "0";
          }
      };
      
      function scrollToTop() {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      
          // Hide the button smoothly after scrolling up
          setTimeout(() => {
              backToTopBtn.style.top = "-60px";
              backToTopBtn.style.opacity = "0";
          }, 800); // Wait for the scroll animation to finish
      }
      
