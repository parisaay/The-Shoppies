(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{35:function(e,t,n){},68:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),i=n(12),s=n.n(i),o=(n(35),n(13)),l=n.n(o),j=n(27),u=n(29),b=n(4),h=function(e){var t=e.value,n=e.onChange;return Object(c.jsx)("form",{children:Object(c.jsxs)("div",{className:"form-group col-2",children:[Object(c.jsx)("label",{htmlFor:"search",className:"form-label",children:"Movie Title"}),Object(c.jsx)("input",{className:"form-control ",type:"text",name:"search",value:t,onChange:n,placeholder:"Type to search...",autoFocus:!0})]})})},d=n(9),m=n(8),O=n.n(m),f=function(e){var t=e.pageSize,n=e.moviesCount,a=e.onPageChange,r=e.currentPage,i=n/t,s=O.a.range(1,i+1);return Object(c.jsx)("nav",{children:Object(c.jsx)("ul",{className:"pagination",children:s.map((function(e){return Object(c.jsx)("li",{className:e===r?"page-item active":"page-item",children:Object(c.jsx)("a",{className:"page-link",onClick:function(){return a(e)},children:e})},e)}))})})},v=n(28),g=n.n(v);n(68),n(69);var x=function(e){var t=Object(a.useState)([]),n=Object(b.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)([]),o=Object(b.a)(s,2),m=o[0],v=o[1],x=Object(a.useState)(""),p=Object(b.a)(x,2),N=p[0],C=p[1],I=Object(a.useState)(4),S=Object(b.a)(I,1)[0],T=Object(a.useState)(1),k=Object(b.a)(T,2),D=k[0],y=k[1],w=r.length,F=function(e,t,n){var c=(n-1)*e;return O()(t).slice(c).take(e).value()}(S,r,D),P=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,c,a,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r,c=t.currentTarget.value,C(c),a="http://www.omdbapi.com/?apikey=bb1928f5&s=".concat(c,"*&type=movie"),e.prev=4,e.next=7,g.a.get(a);case 7:s=e.sent,"True"===(o=s.data).Response?i(o.Search):i([]),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),i(n);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(e){return 0!==m.filter((function(t){return t.imdbID===e.imdbID})).length};return Object(a.useEffect)((function(){for(var e=[],t=Object.keys(localStorage),n=t.length,c=0;c<n;c++){var a=localStorage.getItem(t[c]),r={imdbID:t[c],Title:a.split("-")[1],Year:a.split("-")[0]};e.push(r)}console.log(e),v(e)}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(d.ToastContainer,{}),Object(c.jsx)(h,{value:N,onChange:P}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-5",children:[function(){if(0!==w)return Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["Result for ",N,": Found ",w," movies"]}),Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Title"}),Object(c.jsx)("th",{children:"Year"}),Object(c.jsx)("th",{children:"Nominate"})]})}),Object(c.jsx)("tbody",{children:F.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.Title}),Object(c.jsx)("td",{children:e.Year}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{disabled:Y(e),className:"btn btn-info btn-sm",onClick:function(){return function(e){if(m.length>=5)d.toast.error("All nominees have been chosen! ");else{var t=[].concat(Object(u.a)(m),[e]);5===t.length&&d.toast.info("You have chosen all your five nominees! "),v(t),console.log(t);for(var n=0;n<t.length;n++)localStorage.setItem(t[n].imdbID,"".concat(t[n].Year,"-").concat(t[n].Title))}}(e)},children:"Nominate"})})]},e.imdbID)}))})]})]})}(),Object(c.jsxs)("div",{children:[w>0?Object(c.jsx)(f,{pageSize:S,moviesCount:w,currentPage:D,onPageChange:function(e){y(e)}}):null," "]})]}),Object(c.jsxs)("div",{className:"col+6",children:[Object(c.jsx)("p",{children:"Nominations"}),0===m.length?Object(c.jsx)("p",{children:'"Nothing selected!"'}):Object(c.jsx)("ul",{children:m.map((function(e){return Object(c.jsxs)("li",{children:[e.Title," ",e.Year,Object(c.jsx)("button",{className:"btn btn-info btn-sm",onClick:function(){return function(e){var t=m.filter((function(t){return t.imdbID!==e.imdbID}));v(t),localStorage.removeItem(e.imdbID)}(e)},children:"Remove"})]},e.imdbID)}))})]})]})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};n(70);s.a.render(Object(c.jsx)(r.a.Fragment,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),p()}},[[71,1,2]]]);
//# sourceMappingURL=main.8a1f8c74.chunk.js.map