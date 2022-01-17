if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
};

const menuElem = document.querySelector('.main-nav');
const titleElem = menuElem.querySelector('.main-nav__toggle');

  titleElem.addEventListener ('click', function(item) {
item.preventDefault();
menuElem.classList.toggle('active');
  });
