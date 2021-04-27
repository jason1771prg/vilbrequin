/**
 * Sidenav part
 */
const navLinks = document.getElementById('nav-links');

document.getElementById('sidenav').addEventListener('click', () => {
  if (navLinks.getAttribute('status') === 'close') {
    navLinks.setAttribute('status', 'open');
    navLinks.classList.add('nav-links--open');
  } else {
    navLinks.setAttribute('status', 'close');
    navLinks.classList.remove('nav-links--open');
  }
});

/**
 * Large screen display
 */
if (window.innerWidth >= 800) {
  const header = document.getElementById('header');
  const headerScroll = header.clientHeight / 4;
  if (window.scrollY > headerScroll) {
    header.classList.remove('header--on');
  }
  window.addEventListener('scroll', () => {
    if (window.scrollY > headerScroll) {
      header.classList.remove('header--on');
    } else {
      header.classList.add('header--on');
    }
  });
} else {
  header.classList.remove('header--on');
}