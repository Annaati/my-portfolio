//Add Sticky-Nav class on Scroll
window.addEventListener('scroll', function () {
  var header = this.document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('sticky-nav');
  } else {
    header.classList.remove('sticky-nav');
  }
});

//Active navLink
var navLink = document.querySelectorAll('.navLink');
document.querySelectorAll('.navLink').forEach(nl => nl.addEventListener('click', function () {
  navLink.classList.toggle('active');
}));

//Toogle Mobile Menu
const navMenu = document.querySelector('.navMenu');
const mobileMenu = document.querySelector('.mobileMenu');

mobileMenu.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.navLink').forEach(n => n.addEventListener('click', () =>{
  navMenu.classList.remove('open');
  mobileMenu.classList.remove('open');
}))
