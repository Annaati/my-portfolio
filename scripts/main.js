//Add Sticky-Nav class on Scroll
window.addEventListener('scroll', function() {
  var header = this.document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('sticky-nav');
  } else {
    header.classList.remove('sticky-nav');
  }
}); 

//Toogle Mobile Menu
window.addEventListener('click', function(e) {
  var mm = document.getElementById("mobile-menu")
  mm.classList.toggle('open');
});