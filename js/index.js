let menu = document.querySelector('.menu__burger');
let x = document.querySelector('.header__btn-X')
let nav = document.querySelector('.header__nav');
let link = document.querySelectorAll('.header__link');
let search = document.querySelector('.header__link-search');
let form = document.querySelector('.header__form');
let clos = document.querySelector('.header__search-x-btn');
let stepBtn = document.querySelectorAll('.how__link');
let stepBlog = document.querySelectorAll('.how__blog-descr');
let stepPicture = document.querySelectorAll('.how__picture');
let headerInactive = document.querySelectorAll('.inactive')
let bullet = document.querySelectorAll('.swiper-pagination-bullet')
/* задаем 3 переменные */

menu.addEventListener('click', function () {
  nav.classList.add('header__nav-active');
});
/* по клику на menu элементу с классом header__nav присваивается класс header__nav-active  */

x.addEventListener('click', function () {
  nav.classList.remove('header__nav-active');
});

document.addEventListener('click', function (event) {
  if (!nav.contains(event.target) && !menu.contains(event.target)) {
    nav.classList.remove('header__nav-active');
  }
});

/* по клику в любое место кроме menu и nav у элемента убирается класс header__nav-active */

for (let i = 0; i < link.length; i++) { /* задание переменной i для выбора всех элементов в коллекции link с классом  header-link*/
  link[i].addEventListener('click', function () {   /* в [] выбирается номер элемента коллекции, в данном случае - переменная i */
    nav.classList.remove('header__nav-active');
  });
}

/* по клику на любой элемент коллекции link с классом  header-link убирается класс active*/

search.addEventListener('click', function () {
  form.classList.add('header__form-active');
  headerInactive.forEach(function (elems) {
    elems.classList.add('active')
  });
});

clos.addEventListener('click', function () {
  form.classList.remove('header__form-active');
  headerInactive.forEach(function (elems) {
    elems.classList.remove('active')
  });
});

document.addEventListener('click', function (event) {
  if (!form.contains(event.target) && !search.contains(event.target)) {
    form.classList.remove('header__form-active');
    headerInactive.forEach(function (elems) {
      elems.classList.remove('active')
    });
  }
});

stepBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    stepBtn.forEach(function (btn) { btn.classList.remove('how__link-active') });
    e.currentTarget.classList.add('how__link-active');

    stepPicture.forEach(function (element) { element.classList.remove('how-active') });
    stepBlog.forEach(function (element) { element.classList.remove('how-active') });
    document.querySelectorAll(`[data-target="${path}"]`).forEach(function (elem) { elem.classList.add('how-active') });

  });
});


const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
   a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
});

new Accordion('.accordion');

