import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';

import iconPagination from '/src/images/svg/pagination.svg';

const arrowIcon = `${iconPagination}#icon-arrow-start`;
const dotsIcon = `${iconPagination}#icon-dots`;

console.log('fff');

export const paginationSettings = {
  startPage: 1,
  searchType: null,
  pagination: null,
  totalItemsHome: null,
};

export const createPagination = () => {
  const options = {
    totalItems: 0,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: false,
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}} hide-{{type}}">' +
        `<svg class="tui-ico-{{type}}" width="16" height="16"><use href="${arrowIcon}-{{type}}"></use></svg>` +
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
  const pagination = new Pagination('pagination', options);

  pagination.on('afterMove', async event => {
    const currentPage = event.page;
    console.log(currentPage);
  });

  pagination.reset(400);
};

createPagination();
