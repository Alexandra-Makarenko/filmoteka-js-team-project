var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},e.parcelRequired7c6=n);var s=n("fPgXx");const l=[616037,532639,361743,760741,762504,616037,532639,361743,760741,762504,616037,532639,361743,760741,762504];localStorage.setItem("watched",JSON.stringify(l)),localStorage.setItem("queue",JSON.stringify(l));const a=JSON.parse(localStorage.getItem("watched").split(",")),r=JSON.parse(localStorage.getItem("queue").split(",")),o={btnQueue:document.querySelector("#queue"),btnWatched:document.querySelector("#watched"),div:document.querySelector("#library"),text:document.querySelector("#text"),btnWatched:document.querySelector("#watched"),filmList:document.querySelector(".film_list")};o.btnQueue.addEventListener("click",(function(){r||(o.filmList.innerHTML="<p>Sorry, list is empty(</p>");r.map((e=>(async e=>{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=${s.API_KEY}`);return await t.json()})(e).then((e=>{const t=e.release_date.split("-");o.filmList.insertAdjacentHTML("beforeend",`<div film-id="${e.id}" class="film-list__item">\n  <img\n    src=${posterLinkGenerate(e)}\n    alt="Movie Name"\n    class="film-list__item-poster"\n    loading="lazy"\n  />\n  <div class="film-list__item-info">\n    <h3 class="film-list__item-title">${e.title}</h3>\n   <span class="film-list__item-genres">${genres.join(", ")}</span>\n   <span class="film-list__item-year">| ${t[0]}</span>\n    <span class="film-list__item-rate">&nbsp;${e.vote_average}&nbsp;</span>\n    </div>\n  </div>\n  </div>`)})))),o.filmList.innerHTML=""})),o.btnWatched.addEventListener("click",(function(){a||(o.filmList.innerHTML="<p>Sorry, list is empty(</p>");a.map((e=>(async e=>{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=${s.API_KEY}`);return await t.json()})(e).then((e=>{const t=e.release_date.split("-");o.filmList.insertAdjacentHTML("beforeend",`<div film-id="${e.id}" class="film-list__item">\n  <img\n    src=${posterLinkGenerate(e)}\n    alt="Movie Name"\n    class="film-list__item-poster"\n    loading="lazy"\n  />\n  <div class="film-list__item-info">\n    <h3 class="film-list__item-title">${e.title}</h3>\n   <span class="film-list__item-genres">${genres.join(", ")}</span>\n   <span class="film-list__item-year">| ${t[0]}</span>\n    <span class="film-list__item-rate">&nbsp;${e.vote_average}&nbsp;</span>\n    </div>\n  </div>\n  </div>`)})))),o.filmList.innerHTML=""}));
//# sourceMappingURL=library.19d4f504.js.map
