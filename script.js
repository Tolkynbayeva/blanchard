// submenu
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown, 0);
dropdownArray.forEach(function (el) {
  var button = el.querySelector('.dropdown-heading'),
    menu = el.querySelector('.dropdown-menu'),
    arrow = button.querySelector('i.icon-arrow');

  button.onclick = function (event) {
    if (!menu.hasClass('show')) {
      menu.classList.add('show');
      menu.classList.remove('hide');
      arrow.classList.add('open');
      arrow.classList.remove('close');
      event.preventDefault();
    }
    else {
      menu.classList.remove('show');
      menu.classList.add('hide');
      arrow.classList.remove('open');
      arrow.classList.add('close');
      event.preventDefault();
    }
  };
})

Element.prototype.hasClass = function (className) {
  return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};



// const submenu = document.querySelector('.submenu-button');
// const close = document.querySelector('.down');
// const dropdown = document.querySelector('.dropdown__nav');
// const body = document.body;

// function showDropdown() {
//   dropdown.classList.add('dropdown--showed');
//   body.style.overflow = 'hidden';
// }

// function closeDropdown() {
//   dropdown.classList.remove('dropdown--showed');
// }

// submenu.addEventListener('click',showDropdown);
// close.addEventListener('click', closeDropdown);

//swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 75,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});
