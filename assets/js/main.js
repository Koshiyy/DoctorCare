function onScroll() {
  const navigation = document.getElementById('navigation').classList;

  if (scrollY > 0) {
    navigation.add('scroll');
  } else {
    navigation.remove('scroll');
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
}).reveal('#home');
