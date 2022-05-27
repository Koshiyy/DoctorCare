window.addEventListener('scroll', onScroll);

onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
  const navigation = document.getElementById('navigation').classList;

  if (scrollY > 0) {
    navigation.add('scroll');
  } else {
    navigation.remove('scroll');
  }
}

function showBackToTopButtonOnScroll() {
  const showBackToTopButton =
    document.getElementById('backToTopButton').classList;

  if (scrollY > 500) {
    showBackToTopButton.add('show');
  } else {
    showBackToTopButton.remove('show');
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about,
  #about header,
  #about .content`);
