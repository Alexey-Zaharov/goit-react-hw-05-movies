"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{134:function(e,t,r){r.r(t);var a=r(439),n=r(791),c=r(87),u=r(689),o=r(184);t.default=function(){var e,t=(0,n.useState)([]),r=(0,a.Z)(t,2),l=r[0],s=r[1],i=(0,c.lr)(),h=(0,a.Z)(i,2),f=h[0],d=h[1],m=(0,u.TH)(),p=null!==(e=f.get("saerchValue"))&&void 0!==e?e:"";(0,n.useEffect)((function(){""!==p&&fetch("https://api.themoviedb.org/3/search/movie?api_key=631b0300fdf69969f8e6b4e2073a8abc&language=en-US&query=".concat(p,"&page=1&include_adult=false")).then((function(e){if(e.ok)return e.json()})).then(s).catch((function(e){return window.alert(e)}))}),[p]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("form",{onSubmit:function(e){return function(e){switch(e.preventDefault(),e.currentTarget.elements.search.value.trim()){case"":window.alert("WHOOPS!!! No data to search");break;case l:window.alert('WHOOPS!!! You are alredy looking on "'.concat(l,'"'));break;default:""===e.target.value?d({}):d({saerchValue:e.currentTarget.elements.search.value}),e.currentTarget.reset()}}(e)},children:[(0,o.jsx)("input",{name:"search",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie"}),(0,o.jsx)("button",{type:"submit",children:"Search"})]}),(0,o.jsx)("ul",{children:l.results&&l.results.map((function(e){var t=e.id,r=e.title;return(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:m},children:r})},t)}))})]})}}}]);
//# sourceMappingURL=134.81a72564.chunk.js.map