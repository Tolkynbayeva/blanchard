// submenu

const submenu = document.querySelector('.submenu-button');
const close = document.querySelector('.down');
const dropdown = document.querySelector('.dropdown__nav');
const body = document.body;

function showDropdown() {
  dropdown.classList.add('dropdown--showed');
  body.style.overflow = 'hidden';
}

function closeDropdown() {
  dropdown.classList.remove('dropdown--showed');
}

submenu.addEventListener('click',showDropdown);
close.addEventListener('click', closeDropdown);