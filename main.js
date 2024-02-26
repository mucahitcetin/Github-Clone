// JavaScript function to toggle the menu
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('menu-closed');
  }

  function closeMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.add('menu-closed');
  }