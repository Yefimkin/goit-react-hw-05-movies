"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[435],{435:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(885),u=n(757),c=n.n(u),s=n(791),i=n(565),o=n(731),f=n(470),p=n(410),l=n(184),v=function(e){var t=e.onSubmit,n=(0,s.useState)(""),r=(0,a.Z)(n,2),u=r[0],c=r[1];return(0,l.jsx)("div",{children:(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(u)},children:[(0,l.jsx)("input",{type:"text",name:"query",autoComplete:"off",autoFocus:!0,placeholder:"Enter the title of the film",value:u,onChange:function(e){e.preventDefault();var t=e.currentTarget.value;c(t)}}),(0,l.jsx)("button",{type:"submit",children:"Search"})]})})},h=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],h=(0,s.useState)(!1),d=(0,a.Z)(h,2),x=d[0],m=d[1],b=(0,o.lr)(),g=(0,a.Z)(b,2),y=g[0],k=g[1],w=(0,f.TH)(),Z=y.get("query");function _(e){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return m(!0),e.prev=3,e.next=6,(0,i.E3)(t);case 6:if(0!==(n=e.sent).length){e.next=10;break}return alert("Movie not found"),e.abrupt("return");case 10:u(n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0);case 16:return e.prev=16,m(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[3,13,16,19]])})))).apply(this,arguments)}return(0,s.useEffect)((function(){Z&&_(Z)}),[Z]),(0,l.jsxs)("div",{children:[(0,l.jsx)(v,{onSubmit:function(e){k({query:e}),_(e)}}),x&&(0,l.jsx)(p.Z,{}),n&&(0,l.jsx)("ul",{children:n.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{to:"/movies/".concat(e.id),state:{from:w},children:e.title})},e.id)}))})]})}},565:function(e,t,n){n.d(t,{Df:function(){return i},E3:function(){return l},TP:function(){return o},tx:function(){return p},zv:function(){return f}});var r=n(861),a=n(757),u=n.n(a),c=n(44),s="b119b11c5a40234389ef5bbd7aaf9e1d";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/all/day?api_key=".concat(s));case 2:return t=e.sent,e.next=5,t.data.results;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t,n){var r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&page=").concat(n,"&language=en&query=").concat(t));case 2:return r=e.sent,e.next=5,r.data.results;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=435.3b661c07.chunk.js.map