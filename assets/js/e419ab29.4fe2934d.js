(window.webpackJsonp=window.webpackJsonp||[]).push([[863],{1052:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,s=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?a.a.createElement(s,l(l({ref:t},o),{},{components:r})):a.a.createElement(s,l({ref:t},o))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=f;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<i;o++)c[o]=r[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},936:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),i=(r(0),r(1052)),c={id:"knex.knex.refbuilder",title:"Interface: RefBuilder",sidebar_label:"RefBuilder",hide_title:!0},l={unversionedId:"api/interfaces/knex.knex.refbuilder",id:"version-4.4/api/interfaces/knex.knex.refbuilder",isDocsHomePage:!1,title:"Interface: RefBuilder",description:"Interface: RefBuilder",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.refbuilder.md",slug:"/api/interfaces/knex.knex.refbuilder",permalink:"/docs/api/interfaces/knex.knex.refbuilder",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.refbuilder.md",version:"4.4",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1615364480,sidebar_label:"RefBuilder",sidebar:"version-4.4/API",previous:{title:"Interface: Ref<TSrc, TMapping>",permalink:"/docs/api/interfaces/knex.knex.ref"},next:{title:"Interface: ReferencingColumnBuilder",permalink:"/docs/api/interfaces/knex.knex.referencingcolumnbuilder"}},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],o={toc:b};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-refbuilder"},"Interface: RefBuilder"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".RefBuilder"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"RefBuilder"))),Object(i.b)("h2",{id:"callable"},"Callable"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"RefBuilder"),"<TSrc",">","(",Object(i.b)("inlineCode",{parentName:"p"},"src"),": TSrc): ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.ref"},Object(i.b)("em",{parentName:"a"},"Ref")),"<TSrc, { ","[K in string]",": TSrc}",">"),Object(i.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"TSrc")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"string"))))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"src")),Object(i.b)("td",{parentName:"tr",align:null},"TSrc")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.ref"},Object(i.b)("em",{parentName:"a"},"Ref")),"<TSrc, { ","[K in string]",": TSrc}",">"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1534"))}p.isMDXComponent=!0}}]);