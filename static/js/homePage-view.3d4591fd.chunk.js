"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[519],{530:function(t,n,e){e.d(n,{Gy:function(){return p},Lo:function(){return f},hh:function(){return l},iR:function(){return d},uN:function(){return h}});var r=e(861),c=e(757),a=e.n(c),o="https://api.themoviedb.org/3",i="2df0d61e4e977c645a20818274a83726";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(a().mark((function t(){var n,e,r,c=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},t.next=4,fetch(n,e);case 4:if(!(r=t.sent).ok){t.next=11;break}return t.next=8,r.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("Not found"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function f(){return u("".concat(o,"/trending/movie/day?api_key=").concat(i))}function h(t){return u("".concat(o,"/movie/").concat(t,"?api_key=").concat(i))}function d(t){return u("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i))}function l(t){return u("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i))}function p(t){return u("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t))}},36:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});var r=e(885),c=e(791),a=e(523),o=e(271),i=e(530),u="PageHeading_title__1wPIF",s=e(184);function f(t){var n=t.text;return(0,s.jsx)("h1",{className:u,children:n})}function h(){var t=(0,o.TH)(),n=(0,o.$B)().url,e=(0,c.useState)(null),u=(0,r.Z)(e,2),h=u[0],d=u[1];return(0,c.useEffect)((function(){i.Lo().then(d)}),[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.AW,{path:"/",exact:!0,children:[(0,s.jsx)(f,{text:"Trending today"}),h&&(0,s.jsx)("ul",{children:h.results.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsxs)(a.OL,{to:{pathname:"".concat(n,"movies/").concat(e.id),state:{from:t}},children:[e.title,e.name]})},e.id)}))}),(0,s.jsx)("hr",{})]})})}}}]);
//# sourceMappingURL=homePage-view.3d4591fd.chunk.js.map