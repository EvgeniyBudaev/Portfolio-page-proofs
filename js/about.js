// about-slider
$(document).ready(function() {
  $('.pgwSlider').pgwSlider({
    displayControls: true
  });
});
// END about-slider

// distortion
new hoverEffect({
  parent: document.querySelector('.distortion'),
  intensity: 0.2,
  image1: '/images/about-1.jpg',
  image2: '/images/portrait.jpg',
  displacementImage: '/images/heightMap.png'
});
// END distortion

// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
  origin: 'left',
  duration: 2000,
  distance: '25rem',
  delay: 500
});

sr.reveal('.animate-right', {
 origin: 'right',
 duration: 1000,
 distance: '25rem',
 delay: 500
});

sr.reveal('.animate-top', {
 origin: 'top',
 duration: 1000,
 distance: '25rem',
 delay: 300
});

sr.reveal('.animate-bottom', {
 origin: 'bottom',
 duration: 1000,
 distance: '25rem',
 delay: 300
});
// END Scroll reveal
