"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,n,t){t.r(n);var r=t(439),i=t(791),c=t(689),s=t(184);n.default=function(){var e,n,t=(0,i.useState)({}),a=(0,r.Z)(t,2),o=a[0],l=a[1],u=(0,c.UO)().movieId;return(0,i.useEffect)((function(){""!==u&&fetch("https://api.themoviedb.org/3/movie/".concat(u,"/reviews?api_key=631b0300fdf69969f8e6b4e2073a8abc&language=en-US&page=1")).then((function(e){if(e.ok)return e.json()})).then(l).catch((function(e){return window.alert(e)}))}),[u]),(0,s.jsx)("div",{children:null!==(e=o.results)&&void 0!==e&&null!==(n=e[0])&&void 0!==n&&n.content?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Reviews"}),(0,s.jsx)("ul",{children:o.results.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("p",{children:[t,"."]}),(0,s.jsx)("article",{children:r})]},n)}))})]}):(0,s.jsx)("p",{children:"There are no reviews for this movie."})})}}}]);
//# sourceMappingURL=186.63c6449d.chunk.js.map