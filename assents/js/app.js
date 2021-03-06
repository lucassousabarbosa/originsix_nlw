const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');
const links = document.querySelectorAll('nav ul li a');
const header = document. querySelector('#header');
const scrollHeight = header.offsetHeight;

for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show');
  })
}

for (const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show');
  })
}

window.addEventListener('scroll', function() {
  if (window.scrollY >= scrollHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
})

//Biblioteca swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true
})

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(`
  #home .image, #home .text, 
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
`,{ interval: 100}
)