import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';

import iconPagination from '../images/iconPagination.svg';

// console.log(iconPagination);

const arrowIcon = `${iconPagination}#icon-arrow-start`;
const dotsIcon = `${iconPagination}#icon-dots`;

console.log('fff');

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};
// const container = document.getElementById('pagination');
const pagination = new Pagination('pagination', options);

// const pagination = new Pagination(container, options);

pagination.on('afterMove', event => {
  const currentPage = event.page;
  console.log(currentPage);
});

pagination.reset(400);
