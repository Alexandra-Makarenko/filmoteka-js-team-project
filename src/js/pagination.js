import Pagination from 'tui-pagination';
import popularFilms from './api-top-films';
// import 'tui-pagination/dist/tui-pagination.css';
import iconPagination from '/src/images/svg/pagination.svg';

const arrowIcon = `${iconPagination}#icon-arrow-start`;
const dotsIcon = `${iconPagination}#icon-dots`;

// export const paginationSettings = {
//   startPage: 1,
//   searchType: null,
//   pagination: null,
//   totalItemsHome: null,
// };

export const createPagination = () => {
  const options = {
    totalItems: 50,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: false,
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
  const pagination = new Pagination('pagination', options);
  popularFilms(options.page);
  pagination.reset(400);
  pagination.on('afterMove', async event => {
    const currentPage = event.page;
    popularFilms(currentPage);
    // console.log(currentPage);
  });
};

createPagination();
