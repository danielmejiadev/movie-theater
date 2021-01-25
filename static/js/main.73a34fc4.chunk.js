(this["webpackJsonpmovie-theater"]=this["webpackJsonpmovie-theater"]||[]).push([[0],{52:function(n,e,t){},53:function(n,e,t){},78:function(n,e,t){"use strict";t.r(e);var r,i=t(1),a=t(0),c=t.n(a),o=t(38),s=t.n(o),u=(t(52),t(53),t(21)),l=t(4),d=t(9),j=t(19),b=t.n(j),h=t(25),p=t.n(h),v=t(39);function f(n,e){var t=Object(a.useState)(r.IDLE),i=Object(d.a)(t,2),c=i[0],o=i[1],s=Object(a.useState)(e),u=Object(d.a)(s,2),l=u[0],j=u[1],b=Object(a.useState)(),h=Object(d.a)(b,2),f=h[0],x=h[1];return Object(a.useEffect)((function(){(function(){var e=Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(r.LOADING),e.next=4,n();case 4:t=e.sent,j(t),o(r.FETCHED),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),o(r.ERROR),x(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),[l,c,f]}!function(n){n.IDLE="IDLE",n.LOADING="LOADING",n.FETCHED="FETCHED",n.ERROR="ERROR"}(r||(r={}));var x=t(11),O=t(12),g=t(40),m=t.n(g),w=t(15),y=t(14),k=t(45),I=t(46),C=function n(e){var t=this;Object(x.a)(this,n),this.axiosInstance=void 0,this.resourceUrl=void 0,this.list=function(n){var e=n.url,r=void 0===e?t.resourceUrl:e,i=n.params,a=Object(I.a)(n,["url","params"]);return t.axiosInstance.get(r,Object(k.a)({params:i},a))},this.axiosInstance=e},R=function(n){Object(w.a)(t,n);var e=Object(y.a)(t);function t(){var n;Object(x.a)(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(n=e.call.apply(e,[this].concat(i))).resourceUrl="discover",n}return Object(O.a)(t,[{key:"popularMovies",value:function(){var n=new URLSearchParams;return n.append("sort_by","popularity.desc"),this.list({url:"".concat(this.resourceUrl,"/movie"),params:n})}}]),t}(C),D=function(n){Object(w.a)(t,n);var e=Object(y.a)(t);function t(){var n;Object(x.a)(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(n=e.call.apply(e,[this].concat(i))).resourceUrl="search",n}return Object(O.a)(t,[{key:"filterMovies",value:function(n){var e=new URLSearchParams;return e.append("query",n),this.list({url:"".concat(this.resourceUrl,"/movie"),params:e})}}]),t}(C),M=function(n){Object(w.a)(t,n);var e=Object(y.a)(t);function t(){var n;Object(x.a)(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(n=e.call.apply(e,[this].concat(i))).resourceUrl="movie",n}return Object(O.a)(t,[{key:"movieDetail",value:function(n){return this.list({url:"".concat(this.resourceUrl,"/").concat(n)})}}]),t}(C);var z=new(function(){function n(e){Object(x.a)(this,n),this.axiosInstance=void 0,this.discover=void 0,this.search=void 0,this.movies=void 0,this.basicResponse=function(n){return n.data},this.axiosInstance=m.a.create({baseURL:e}),this.addResponseInterceptor(this.basicResponse),this.discover=new R(this.axiosInstance),this.search=new D(this.axiosInstance),this.movies=new M(this.axiosInstance)}return Object(O.a)(n,[{key:"addRequestInterceptor",value:function(n){return this.axiosInstance.interceptors.request.use(n),this}},{key:"addResponseInterceptor",value:function(n){return this.axiosInstance.interceptors.response.use(n),this}}]),n}())("https://api.themoviedb.org/3/").addRequestInterceptor((function(n){return n.headers={Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmUwN2Q1OTk4NzE0MGQwMDA4YjM4MTA5M2M3ODA3ZSIsInN1YiI6IjYwMGI0NTQ0MzcxMDk3MDAzZWEwYzIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1zjidFbrzynHnKtVqJ1_IjgpeBC19FXR4aPx2sdh078")},n})),E=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),F=t(44),L=t(2),S=t(3);function Y(){var n=Object(L.a)(["\n  display: inline-block;\n  padding: 4px 4px 4px 0;\n  vertical-align: middle;\n  line-height: 1;\n  font-size: ","em;\n  color: ",";\n  transition: color 0.2s ease-out;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return Y=function(){return n},n}var A={small:1,normal:1.5,large:2},N=S.a.label(Y(),(function(n){var e=n.size;return A[e]}),(function(n){return n.isSelected?"#ffd700":"#ababab"}));var U=function(n){var e=n.starts,t=void 0===e?5:e,r=n.rating,a=void 0===r?0:r,c=n.size,o=void 0===c?"normal":c,s=n.setRating;return Object(i.jsx)(i.Fragment,{children:Object(F.a)(Array(t)).map((function(n,e){return Object(i.jsx)(N,{size:o,isSelected:a>=e+1,onClick:function(){return null===s||void 0===s?void 0:s(e+1)},children:"\u2605"},e)}))})};function J(){var n=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return J=function(){return n},n}function T(){var n=Object(L.a)(["\n  margin: 0px;\n"]);return T=function(){return n},n}function _(){var n=Object(L.a)(["\n  margin: 20px 0 8px 0;\n"]);return _=function(){return n},n}function G(){var n=Object(L.a)(["\n  margin-bottom: 0;\n  font-size: 1.1em;\n  font-weight: 400;\n  font-style: italic;\n  opacity: 0.7;\n"]);return G=function(){return n},n}function P(){var n=Object(L.a)(["\n  display: flex;\n  align-items: center;\n\n  label {\n    padding-left: 0px;\n  }\n\n  span {\n    font-size: 1.2em;\n  }\n"]);return P=function(){return n},n}function q(){var n=Object(L.a)(["\n  margin-top: 0px;\n"]);return q=function(){return n},n}function B(){var n=Object(L.a)(["\n  margin: 0px;\n  font-size: 2.2rem;\n  font-weight: 700;\n"]);return B=function(){return n},n}function Q(){var n=Object(L.a)(["\n  flex: 1;\n  padding-left: 40px;\n"]);return Q=function(){return n},n}function W(){var n=Object(L.a)(["\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  overflow: hidden;\n\n  img {\n    height: 100%;\n    width: 100%;\n  }\n"]);return W=function(){return n},n}function Z(){var n=Object(L.a)(["\n  padding: 40px;\n  background-color: rgb(0, 0, 0, 0.8);\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n"]);return Z=function(){return n},n}function H(){var n=Object(L.a)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: top center;\n  color: white;\n"]);return H=function(){return n},n}var V=S.a.div(H(),(function(n){return n.image})),X=S.a.div(Z()),K=S.a.div(W()),$=S.a.div(Q()),nn=S.a.h2(B()),en=S.a.p(q()),tn=S.a.div(P()),rn=S.a.h3(G()),an=S.a.h3(_()),cn=S.a.p(T()),on=S.a.p(J());var sn=function(){var n=Object(l.g)().id,e=f(Object(a.useCallback)((function(){return z.movies.movieDetail(+n)}),[n]),{}),t=Object(d.a)(e,2),c=t[0],o=t[1];if([r.IDLE,r.LOADING].includes(o))return Object(i.jsx)("p",{children:"Loading"});var s=c.backdrop_path,u=c.poster_path,j=c.release_date,h=c.tagline,p=c.overview,v=c.original_title,x=c.genres,O=c.status,g=c.budget,m=c.revenue,w=c.vote_average,y=b()(j).format("YYYY"),k=b()(j).format("MM/DD/YYYY"),I=x.map((function(n){return n.name})).join(", ");return Object(i.jsx)(V,{image:"https://image.tmdb.org/t/p/w500/".concat(s),children:Object(i.jsxs)(X,{children:[Object(i.jsx)(K,{children:Object(i.jsx)("img",{alt:"poster",src:"https://image.tmdb.org/t/p/w300/".concat(u)})}),Object(i.jsxs)($,{children:[Object(i.jsx)(nn,{children:"".concat(v," (").concat(y,")")}),Object(i.jsx)(en,{children:"".concat(k," ").concat(I)}),Object(i.jsxs)(tn,{children:[Object(i.jsx)(U,{starts:1,rating:1,size:"large"}),Object(i.jsx)("span",{children:w})]}),Object(i.jsx)(rn,{children:h}),Object(i.jsx)(an,{children:"Overview"}),Object(i.jsx)(cn,{children:p}),Object(i.jsxs)(on,{children:[Object(i.jsx)("strong",{children:"Status"}),O]}),Object(i.jsxs)(on,{children:[Object(i.jsx)("strong",{children:"Budget"}),g?E.format(g):"-"]}),Object(i.jsxs)(on,{children:[Object(i.jsx)("strong",{children:"Revenue"}),m?E.format(m):"-"]})]})]})})};function un(){var n=Object(L.a)(["\n  padding: 40px 60px;\n"]);return un=function(){return n},n}var ln=S.a.div(un()),dn=c.a.createContext({});function jn(){return c.a.useContext(dn)}function bn(){var n=Object(L.a)(["\n  text-align: center;\n  font-weight: normal;\n  color: white;\n"]);return bn=function(){return n},n}function hn(){var n=Object(L.a)(["\n  text-align: center;\n  font-weight: bold;\n  font-size: 3em;\n  margin-bottom: 0px;\n  color: white;\n"]);return hn=function(){return n},n}function pn(){var n=Object(L.a)(["\n  background-image: url('https://mauiwatch.com/wp-content/uploads/2019/10/9D9FFEEF-96E9-4C70-88C8-2F8F92FC4CE2.jpeg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: top center;\n"]);return pn=function(){return n},n}function vn(){var n=Object(L.a)(["\n  background-color: rgb(0, 0, 0, 0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 400px;\n"]);return vn=function(){return n},n}var fn=S.a.div(vn()),xn=S.a.div(pn()),On=S.a.h1(hn()),gn=S.a.h2(bn());function mn(){var n=Object(L.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n\n  input {\n    width: 50%;\n    padding: 12px 24px;\n    background-color: transparent;\n    transition: transform 250ms ease-in-out;\n    font-size: 0.9em;\n    line-height: 18px;\n    color: white;\n    border-radius: 50px;\n    border: 1px solid white;\n    transition: all 250ms ease-in-out;\n    backface-visibility: hidden;\n    transform-style: preserve-3d;\n\n    &::placeholder {\n      color: white;\n      letter-spacing: 1.5px;\n    }\n\n    &:hover,\n    &:focus {\n      padding: 12px 0;\n      outline: 0;\n      border: 1px solid transparent;\n      border-bottom: 1px solid white;\n      border-radius: 0;\n    }\n  }\n\n  .search {\n    width: 22px;\n    height: 22px;\n    cursor: pointer;\n    color: white;\n  }\n\n  button {\n    z-index: 1;\n    margin-left: -32px;\n    background: none;\n    color: inherit;\n    border: none;\n    padding: 0;\n    font: inherit;\n    cursor: pointer;\n    outline: inherit;\n  }\n"]);return mn=function(){return n},n}var wn=S.a.form(mn());function yn(n){var e=n.className;return Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:e,children:Object(i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}var kn=function(){var n=Object(a.useRef)(null),e=jn().setQuery,t=Object(a.useCallback)((function(t){t.preventDefault();var r=n.current;e(null===r||void 0===r?void 0:r.value)}),[e]);return Object(i.jsxs)(wn,{onSubmit:t,children:[Object(i.jsx)("input",{placeholder:"Search for a movie",ref:n}),Object(i.jsx)("button",{type:"submit",children:Object(i.jsx)(yn,{className:"search"})})]})};var In=function(){return Object(i.jsx)(xn,{children:Object(i.jsxs)(fn,{children:[Object(i.jsx)(On,{children:"Your favorite movies. Explained"}),Object(i.jsx)(gn,{children:"Figure out what happened. Then find out why"}),Object(i.jsx)(kn,{})]})})};function Cn(){var n=Object(L.a)(["\n  margin-bottom: 20px;\n\n  h2 {\n    margin-top: 0px;\n  }\n\n  h3 {\n    margin: 0px;\n  }\n"]);return Cn=function(){return n},n}var Rn=S.a.div(Cn());function Dn(){var n=Object(L.a)(["\n  margin: auto;\n  text-align: center;\n"]);return Dn=function(){return n},n}function Mn(){var n=Object(L.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  justify-content: flex-start;\n  grid-gap: 20px;\n"]);return Mn=function(){return n},n}var zn=S.a.div(Mn()),En=S.a.div(Dn());function Fn(){var n=Object(L.a)(["\n  position: absolute;\n  top: -45px;\n  color: white;\n  padding: 6px;\n  border-radius: 40px;\n  background-color: rgb(0, 0, 0, 0.7);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  height: 32px;\n\n  p {\n    margin: 0px;\n    margin-top: -5px;\n    font-size: 0.8em;\n  }\n"]);return Fn=function(){return n},n}function Ln(){var n=Object(L.a)(["\n  font-size: 1em;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.6);\n"]);return Ln=function(){return n},n}function Sn(){var n=Object(L.a)(["\n  font-size: 1em;\n  margin-top: 20px;\n  margin-bottom: 0px;\n  font-weight: 700;\n"]);return Sn=function(){return n},n}function Yn(){var n=Object(L.a)(["\n  cursor: pointer;\n  position: relative;\n  margin-left: 5px;\n"]);return Yn=function(){return n},n}function An(){var n=Object(L.a)(["\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  width: 100%;\n  min-height: 250px;\n  height: 250px;\n  background: #dbdbdb;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]);return An=function(){return n},n}var Nn=S.a.div(An()),Un=S.a.div(Yn()),Jn=S.a.h2(Sn()),Tn=S.a.p(Ln()),_n=S.a.div(Fn());var Gn=function(n){var e=n.title,t=n.imagePath,r=n.releaseDate,a=n.voteAverage,c=n.onClick;return Object(i.jsxs)("div",{children:[Object(i.jsx)(Nn,{onClick:c,children:t&&Object(i.jsx)("img",{alt:"poster",src:"https://image.tmdb.org/t/p/w500/".concat(t)})}),Object(i.jsxs)(Un,{onClick:c,children:[Object(i.jsxs)(_n,{children:[Object(i.jsx)(U,{starts:1,rating:1,size:"small"}),Object(i.jsx)("p",{children:a})]}),Object(i.jsx)(Jn,{children:e}),Object(i.jsx)(Tn,{children:b()(r).format("MMM DD, YYYY")})]})]})};var Pn=function(n){var e=n.header,t=n.onMovieClicked,r=n.movies,a=void 0===r?[]:r,c=n.emptyComponent;return Object(i.jsxs)("div",{children:[e,0===a.length&&Object(i.jsx)(En,{children:c}),Object(i.jsx)(zn,{children:a.map((function(n){return Object(i.jsx)(Gn,{onClick:function(){return t(n)},title:n.title,imagePath:n.poster_path,releaseDate:n.release_date,voteAverage:n.vote_average},n.id)}))})]})},qn={1:[0,2],2:[2,4],3:[4,6],4:[6,8],5:[8,10]};var Bn=function(n){var e=n.onMovieClicked,t=jn(),r=t.movieResults,a=t.query,c=t.rating,o=t.setRating,s=r.results,u=null===s||void 0===s?void 0:s.filter((function(n){var e=n.vote_average;if(c){var t=Object(d.a)(qn[c],2),r=t[0],i=t[1];return e>=r&&e<=i}return!0}));return Object(i.jsx)(Pn,{header:Object(i.jsxs)(Rn,{children:[Object(i.jsx)("h2",{children:"Search results for: ".concat(a)}),Object(i.jsx)("h3",{children:"Rating:"}),Object(i.jsx)(U,{rating:c,setRating:o})]}),movies:u,onMovieClicked:e,emptyComponent:Object(i.jsx)("h2",{children:"There are no results for your search"})})};function Qn(){var n=Object(L.a)(["\n  animation: "," 1s linear infinite;\n  transform: translateZ(0);\n\n  border-top: 2px solid grey;\n  border-right: 2px solid grey;\n  border-bottom: 2px solid grey;\n  border-left: 4px solid black;\n  background: transparent;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin: auto;\n"]);return Qn=function(){return n},n}function Wn(){var n=Object(L.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return Wn=function(){return n},n}var Zn=Object(S.b)(Wn()),Hn=S.a.div(Qn(),Zn);var Vn=function(n){var e=n.state,t=n.children;return[r.IDLE,r.LOADING].includes(e)?Object(i.jsx)(Hn,{}):r.ERROR===e?Object(i.jsx)("h2",{children:"Something went wrong. Please try later"}):Object(i.jsx)(i.Fragment,{children:t})};var Xn=function(){var n=Object(l.f)(),e=function(e){var t=e.id;return n.push("movieDetail/".concat(t))},t=jn(),r=t.movieResults.results,a=t.state,c=t.query;return Object(i.jsxs)("div",{children:[Object(i.jsx)(In,{}),Object(i.jsx)(ln,{children:Object(i.jsx)(Vn,{state:a,children:c?Object(i.jsx)(Bn,{onMovieClicked:e}):Object(i.jsx)(Pn,{header:Object(i.jsx)("h2",{children:"Most popular"}),movies:r,onMovieClicked:e,emptyComponent:Object(i.jsx)("h3",{children:"There are no popular movies"})})})})]})};var Kn=function(){return Object(i.jsx)(u.a,{children:Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/movieDetail/:id",children:Object(i.jsx)(sn,{})}),Object(i.jsx)(l.a,{path:"/",children:Object(i.jsx)(Xn,{})})]})})};var $n=function(n){var e=n.children,t=function(){var n=Object(a.useState)(),e=Object(d.a)(n,2),t=e[0],r=e[1],i=Object(a.useState)(),c=Object(d.a)(i,2),o=c[0],s=c[1],u=f(Object(a.useCallback)((function(){return s(void 0),t?z.search.filterMovies(t):z.discover.popularMovies()}),[t]),{}),l=Object(d.a)(u,3);return{movieResults:l[0],state:l[1],error:l[2],query:t,setQuery:r,setRating:s,rating:o}}();return Object(i.jsx)(dn.Provider,{value:t,children:e})};var ne=function(){return Object(i.jsxs)($n,{children:[Object(i.jsx)(Kn,{}),";"]})},ee=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,79)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),r(n),i(n),a(n),c(n)}))};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(ne,{})}),document.getElementById("root")),ee()}},[[78,1,2]]]);
//# sourceMappingURL=main.73a34fc4.chunk.js.map