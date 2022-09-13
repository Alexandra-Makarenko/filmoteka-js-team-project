!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){i[t]=e},e.parcelRequired7c6=r),r("kvC6y"),r("hM3Qt");var a=r("bpxeT"),s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t};var c=r("8nrFW"),o=r("2TvXO"),l=r("hM3Qt"),u=r("2cELT"),f=r("kvC6y");localStorage.setItem("watched",JSON.stringify([16037,532630,617430,760412,76504])),localStorage.setItem("queue",JSON.stringify([716037,632639,561743,860741,862504]));var d,p=JSON.parse(localStorage.getItem("watched").split(",")),m=JSON.parse(localStorage.getItem("queue").split(",")),_=(d={btnQueue:document.querySelector("#queue"),btnWatched:document.querySelector("#watched"),div:document.querySelector("#library"),text:document.querySelector("#text")},t(s)(d,"btnWatched",document.querySelector("#watched")),t(s)(d,"filmList",document.querySelector(".film_list")),d);_.btnQueue.addEventListener("click",(function(){(0,f.onLoader)(),L(),_.filmList.innerHTML="",m||(_.filmList.innerHTML="<p>Sorry, list is empty(</p>",(0,f.offLoader)());m.map((function(t){return v(t).then((function(t){g(t).then((function(t){_.filmList.insertAdjacentHTML("beforeend",t),(0,f.offLoader)()}))}))}))})),_.btnWatched.addEventListener("click",(function(){(0,f.onLoader)(),L(),_.filmList.innerHTML="",p||(_.filmList.innerHTML="<p>Sorry, list is empty(</p>",(0,f.offLoader)());p.map((function(t){return x(t).then((function(t){g(t).then((function(t){_.filmList.insertAdjacentHTML("beforeend",t),(0,f.offLoader)()}))}))}))}));var h,v=(h=t(a)(t(o).mark((function e(n){var i,r;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(n,"?api_key=").concat(l.API_KEY));case 2:return i=t.sent,t.next=5,i.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),e)}))),function(t){return h.apply(this,arguments)});function y(t){return null!==t.poster_path?'"https://image.tmdb.org/t/p/w500'.concat(t.poster_path,'"'):'"https://raw.githubusercontent.com/Alexandra-Makarenko/filmoteka-js-team-project/main/src/images/no-poster.jpg"'}function g(e){var n=function(e){return 0===e.genres.length?"Without genres":u.arrayOfGenres.then((function(t){return t.filter((function(t){var n=!0,i=!1,r=void 0;try{for(var a,s=e.genres[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){if(a.value.id===t.id)return t.name}}catch(t){i=!0,r=t}finally{try{n||null==s.return||s.return()}finally{if(i)throw r}}})).map((function(t){return t.name}))})).then((function(e){return e.length<3?e:t(c)(t(c)(e).slice(0,2)).concat(["Other"])}))}(e),i=function(t){return t.release_date.split("-")}(e);return function(t,e,n){return b.apply(this,arguments)}(e,n,i)}function b(){return(b=t(a)(t(o).mark((function e(n,i,r){var a;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("Without genres"!==i){t.next=2;break}return t.abrupt("return",'<li film-id="'.concat(n.id,'" class="film-list__item">\n  <img\n    src=').concat(y(n),'\n    alt="').concat(n.title,'"\n    class="film-list__item-poster"\n    film-id="').concat(n.id,'"\n    loading="lazy"\n  />\n  <div class="film-list__item-info">\n    <h3 class="film-list__item-title">').concat(n.title,'</h3>\n    <div class="film-list__item-details">\n      <span class="film-list__item-genres">').concat(i,'</span>\n      <span class="film-list__item-strip">|</span>\n      <span class="film-list__item-year">').concat(r[0],'</span>\n      <span class="film-list__item-rate">&nbsp;').concat(n.vote_average.toFixed(1),"&nbsp;</span>\n    </div>\n  </div>\n</li>"));case 2:return t.next=4,i.then((function(t){return t}));case 4:return a=t.sent,t.abrupt("return",'<li film-id="'.concat(n.id,'" class="film-list__item">\n  <img\n    src=').concat(y(n),'\n    alt="').concat(n.title,'"\n    class="film-list__item-poster"\n    film-id="').concat(n.id,'"\n    loading="lazy"\n  />\n  <div class="film-list__item-info">\n    <h3 class="film-list__item-title">').concat(n.title,'</h3>\n    <div class="film-list__item-details">\n      <span class="film-list__item-genres">').concat(a.join(", "),'</span>\n      <span class="film-list__item-strip">|</span>\n      <span class="film-list__item-year">').concat(r[0],'</span>\n      <span class="film-list__item-rate">&nbsp;').concat(n.vote_average.toFixed(1),"&nbsp;</span>\n    </div>\n  </div>\n</li>"));case 6:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function L(){_.text.classList.contains("library-message")&&(_.text.classList.remove("library-message"),_.text.classList.add("library-message-hidden"))}var x=function(){var e=t(a)(t(o).mark((function e(n){var i,r;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(l.API_KEY));case 2:return i=t.sent,t.next=5,i.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();r("4LMMA"),r("6yEBv"),r("2cELT"),r("4F07H"),r("4wqrs"),r("bx8wN"),r("1vR0Z"),r("7Uufj")}();
//# sourceMappingURL=library.f07986d8.js.map
