function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

// document.getElementById('lp-phone').addEventListener('input', function (e) {
//   var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
//   e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
// });

var darkMode = document.querySelector('#darkMode-icon');

darkMode.onclick = () => {
  darkMode.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-theme');
  // if (document.body.classList.contains('dark-theme')) {
  //   darkMode.innerHTML = ' <i class="bx bx-sun" id="darkMode-icon"></i>';
  // } else {
  //   darkMode.innerHTML = ' <i class="bx bx-moon" id="darkMode-icon"></i>';
  // }
};

// ScrollReveal({ reset: true, distance: '200px', duration: 2000, delay: 100, mobile: false });



// ScrollReveal().reveal('.section__pic-container', { origin: 'left' });
// ScrollReveal().reveal('.section__text', { origin: 'right' });
// ScrollReveal().reveal('.about-details-container', { origin: 'top' });
// ScrollReveal().reveal('.exp1', { origin: 'top' });
// ScrollReveal().reveal('.exp2', { origin: 'bottom' });
// ScrollReveal().reveal('.prj1', { origin: 'left' });
// ScrollReveal().reveal('.prj3', { origin: 'right' });
// ScrollReveal().reveal('.contact', { origin: 'bottom' });

