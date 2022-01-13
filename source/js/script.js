if (document.querySelector('.page-body--no-js')) {
  document.querySelector('.page-body--no-js').classList.remove('page-body--no-js');
};

const menuElem = document.querySelector('.main-nav');
const titleElem = menuElem.querySelector('.main-nav__toggle');

  titleElem.addEventListener ('click', function(item) {
item.preventDefault();
menuElem.classList.toggle('active');
  });
