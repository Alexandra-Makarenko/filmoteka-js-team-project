!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r);var a=r("bpxeT"),s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var l=r("2TvXO"),c=r("hM3Qt");localStorage.setItem("watched",JSON.stringify([16037,532630,617430,760412,76504])),localStorage.setItem("queue",JSON.stringify([716037,632639,561743,860741,862504]));var o,u=JSON.parse(localStorage.getItem("watched").split(",")),f=JSON.parse(localStorage.getItem("queue").split(",")),p=(o={btnQueue:document.querySelector("#queue"),btnWatched:document.querySelector("#watched"),div:document.querySelector("#library"),text:document.querySelector("#text")},e(s)(o,"btnWatched",document.querySelector("#watched")),e(s)(o,"filmList",document.querySelector(".film_list")),o);p.btnQueue.addEventListener("click",(function(){p.filmList.innerHTML="",f||(p.filmList.innerHTML="<p>Sorry, list is empty(</p>");f.map((function(e){return d(e).then((function(e){var t=e.release_date.split("-");p.filmList.insertAdjacentHTML("beforeend",'<li id="" class="film-list__item">\n    <img\n    src="https://image.tmdb.org/t/p/w500'.concat(e.poster_path,'"\n    alt="Movie Name"\n    class="film-list__item-poster"\n    loading="lazy"\n    />\n    <div class="film-list__item-info">\n    <h3 class="film-list__item-title">').concat(e.title,'</h3>\n   <span class="film-list__item-genres">жанри</span>\n   <span class="film-list__item-genres">').concat(t[0],'</span>\n    <span class="film-list__item-rate">').concat(e.vote_average,"</span>\n    </div>\n    </li>"))}))}))})),p.btnWatched.addEventListener("click",(function(){p.filmList.innerHTML="",u||(p.filmList.innerHTML="<p>Sorry, list is empty(</p>");u.map((function(e){return _(e).then((function(e){var t=e.release_date.split("-");p.filmList.insertAdjacentHTML("beforeend",'<li id="" class="film-list__item">\n    <img\n    src="https://image.tmdb.org/t/p/w500'.concat(e.poster_path,'"\n    alt="Movie Name"\n    class="film-list__item-poster"\n    loading="lazy"\n    />\n    <div class="film-list__item-info">\n    <h3 class="film-list__item-title">').concat(e.title,'</h3>\n   <span class="film-list__item-genres">жанри</span>\n   <span class="film-list__item-genres">').concat(t[0],'</span>\n    <span class="film-list__item-rate">').concat(e.vote_average,"</span>\n    </div>\n    </li>"))}))}))}));var m,d=(m=e(a)(e(l).mark((function t(n){var i,r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(n,"?api_key=").concat(c.API_KEY));case 2:return i=e.sent,e.next=5,i.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),t)}))),function(e){return m.apply(this,arguments)});var _=function(){var t=e(a)(e(l).mark((function t(n){var i,r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(c.API_KEY));case 2:return i=e.sent,e.next=5,i.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}();
//# sourceMappingURL=library.2a3d33b9.js.map
