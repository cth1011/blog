(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+g+W":function(e,t,r){var n=r("q0Rj"),o=r("s9h0");function c(t,r,a){return o()?(e.exports=c=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=c=function(e,t,r){var o=[null];o.push.apply(o,t);var c=new(Function.bind.apply(e,o));return r&&n(c,r.prototype),c},e.exports.default=e.exports,e.exports.__esModule=!0),c.apply(null,arguments)}e.exports=c,e.exports.default=e.exports,e.exports.__esModule=!0},"4TKZ":function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},IDKB:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},VjHQ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},X8hv:function(e,t,r){var n=r("+g+W"),o=r("ZGFM"),c=r("0j+7"),a=r("u0WH");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r("q1tI"),s=r("7ljp").mdx,i=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,c=a(e,["scope","children"]),l=i(t),f=u.useMemo((function(){if(!r)return null;var e=p({React:u,mdx:s},l),t=Object.keys(e),c=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(c)))}),[r,t]);return u.createElement(f,p({},c))}},Z5Ud:function(e,t,r){var n=r("IDKB");e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},ZGFM:function(e,t,r){var n=r("Z5Ud"),o=r("4TKZ"),c=r("o/O1"),a=r("VjHQ");e.exports=function(e){return n(e)||o(e)||c(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},"o/O1":function(e,t,r){var n=r("IDKB");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},s9h0:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},yZlL:function(e,t,r){"use strict";r.r(t);var n=r("rePB"),o=r("q1tI"),c=r.n(o),a=r("Wbzz"),l=r("A2+M"),p=r("SbOt"),u=r("7oih"),s=r("vrFN"),i=r("p3AD");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.data,r=e.pageContext,n=e.location,o=t.mdx,f=t.site.siteMetadata.title,y=r.previous,b=r.next;return c.a.createElement(u.a,{location:n,title:f},c.a.createElement(s.a,{title:o.frontmatter.title,description:o.excerpt}),c.a.createElement("h1",null,o.frontmatter.title),c.a.createElement("p",{style:d(d({},Object(i.b)(-.2)),{},{display:"block",marginBottom:Object(i.a)(1),marginTop:Object(i.a)(-1)})},o.frontmatter.date),c.a.createElement(l.MDXRenderer,null,o.body),c.a.createElement("hr",{style:{marginBottom:Object(i.a)(1)}}),c.a.createElement(p.a,null),c.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},c.a.createElement("li",null,y&&c.a.createElement(a.Link,{to:y.fields.slug,rel:"prev"},"← ",y.frontmatter.title)),c.a.createElement("li",null,b&&c.a.createElement(a.Link,{to:b.fields.slug,rel:"next"},b.frontmatter.title," →"))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-e09570608d1bc239f680.js.map