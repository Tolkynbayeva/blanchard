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

//swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 75,

  // autoplay: {
  //   delay: 5000,
  // },
});

// gallery dropdown
var galleryDrop = document.querySelectorAll('.gallery-drop');
var galleryArray = Array.prototype.slice.call(galleryDrop, 0);
galleryArray.forEach(function (el) {
  var galleryButton = el.querySelector('.gallery-drop-heading'),
    galleryMenu = el.querySelector('.gallery-drop-menu'),
    galleryArrow = galleryButton.querySelector('.gallery-icon-arrow');

  galleryButton.onclick = function (event) {
    if (!galleryMenu.classList.contains('gallery-show')) {
      galleryMenu.classList.add('gallery-show');
      galleryMenu.classList.remove('gallery-hide');
      galleryArrow.classList.add('gallery-open');
      galleryArrow.classList.remove('gallery-close');
      event.preventDefault();
    }
    else {
      galleryMenu.classList.remove('gallery-show');
      galleryMenu.classList.add('gallery-hide');
      galleryArrow.classList.remove('gallery-open');
      galleryArrow.classList.add('gallery-close');
      event.preventDefault();
    }
  };
});

Element.prototype.hasClass = function (className) {
  return this.classList.contains(className);
};

// galery swiper
var gallerySwiper = new Swiper('.gallery-swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 75,

  pagination: {
    el: '.gallery-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },
});

//gallery click
document.addEventListener('DOMContentLoaded', function() {
  var gallery2 = document.getElementById('gallery2');
  var gallery2Content = document.querySelector('.gallery2-content');
  var closeBtn = gallery2Content.querySelector('.gallery__close');
  
  gallery2.addEventListener('click', function(event) {
    event.preventDefault();
    gallery2Content.classList.add('open');
  });
  
  closeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    gallery2Content.classList.remove('open');
  });
});