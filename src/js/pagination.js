import Pagination from 'tui-pagination';
import { popularFilms } from './api-top-films';
// import 'tui-pagination/dist/tui-pagination.css';
// import iconPagination from '/src/images/svg/pagination.svg';
import { pageUp } from './page-up';

// const arrowIcon = `${iconPagination}#icon-arrow-start`;
// const dotsIcon = `${iconPagination}#icon-dots`;

export const paginationOptions = {
  startPage: 1,
  // searchType: null,
  pagination: null,
  // totalItemsHome: null,
};

// console.log(paginationOptions.startPage);

// export const createPagination = (page, itemsPerPage, totalItems) => {
//   console.log(page, itemsPerPage, totalItems);
//   const options = {
//     totalItems,
//     itemsPerPage,
//     visiblePages: 5,
//     page,
//     centerAlign: false,
//     template: {
//       page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//       currentPage:
//         '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//       moveButton:
//         '<a href="#" class="tui-page-btn tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//         '</a>',
//       disabledMoveButton:
//         '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//         '</span>',
//       moreButton:
//         '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//         '<span class="tui-ico-ellip">...</span>' +
//         '</a>',
//     },
//   };
//   const pagination = new Pagination('pagination', options);
//   paginationOptions.pagination = pagination;
//   pagination.reset(totalItems);

//   pagination.on('afterMove', async event => {
//     const currentPage = event.page;
//     console.log(currentPage);
//     // paginationOptions.startPage = currentPage;
//     popularFilms(currentPage);
//     pageUp();
//   });
// };

export const createPagination = (page, itemsPerPage, totalItems) => {
  console.log(page, itemsPerPage, totalItems);
  const options = {
    totalItems,
    itemsPerPage,
    visiblePages: 5,
    page,
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
  paginationOptions.pagination = pagination;
  // pagination.reset(totalItems);

  pagination.on('afterMove', async event => {
    const currentPage = event.page;
    popularFilms(currentPage);
    pageUp();
  });
  // console.log(pagination);
  return pagination;
};
