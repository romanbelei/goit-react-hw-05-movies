"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[489],{805:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(413),a=n(885),c=n(791),o=n(116),u=n(523),i=n(271),s=n(530),h="MoviesPage_Searchbar__IcV0j",f="MoviesPage_SearchForm__kpN7l",l="MoviesPage_SearchFormButton__pBDYN",m="MoviesPage_SearchFormButtonLabel__q049z",p="MoviesPage_SearchFormInput__9qTli",d=(n(150),n(184));function v(){var e=(0,i.k6)(),t=(0,i.TH)(),n=(0,i.$B)().url,v=(0,c.useState)(""),_=(0,a.Z)(v,2),k=_[0],g=_[1],x=(0,c.useState)(""),y=(0,a.Z)(x,2),j=y[0],b=y[1];(0,c.useEffect)((function(){var e;if(""!==t.search){var n=null!==(e=new URLSearchParams(t.search).get("query"))&&void 0!==e?e:"";n!==k&&S(n)}}),[t,e,k]),(0,c.useEffect)((function(){j&&0===j.results.length&&o.Am.error("\u041d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e")}),[j]);var S=function(e){s.Gy(e).then(b)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("header",{className:h,children:(0,d.jsxs)("form",{className:f,onSubmit:function(n){if(n.preventDefault(),""===k.trim())return o.Am.error("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0424\u0456\u043b\u044c\u043c\u0430");e.push((0,r.Z)((0,r.Z)({},t),{},{search:"query=".concat(k)})),S(k)},children:[(0,d.jsx)("button",{type:"submit",className:l,children:(0,d.jsx)("span",{className:m,children:"Search"})}),(0,d.jsx)("input",{className:p,type:"text",name:"name",placeholder:"Search images and photos",value:k,onChange:function(e){g(e.currentTarget.value.toLowerCase())}})]})}),(0,d.jsx)("ul",{children:j&&j.results.map((function(e,r){return(0,d.jsx)("li",{children:(0,d.jsxs)(u.OL,{to:{pathname:"".concat(n,"/").concat(e.id),state:{from:t}},children:[e.title,e.name]})},r)}))})]})}},530:function(e,t,n){n.d(t,{Gy:function(){return p},Lo:function(){return h},hh:function(){return m},iR:function(){return l},uN:function(){return f}});var r=n(861),a=n(757),c=n.n(a),o="https://api.themoviedb.org/3",u="2df0d61e4e977c645a20818274a83726";function i(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(c().mark((function e(){var t,n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(t,n);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function h(){return i("".concat(o,"/trending/movie/day?api_key=").concat(u))}function f(e){return i("".concat(o,"/movie/").concat(e,"?api_key=").concat(u))}function l(e){return i("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(u))}function m(e){return i("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(u))}function p(e){return i("".concat(o,"/search/movie?api_key=").concat(u,"&query=").concat(e))}}}]);
//# sourceMappingURL=moviesPage-view.126d1c65.chunk.js.map