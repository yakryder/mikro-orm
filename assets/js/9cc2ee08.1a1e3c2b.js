(window.webpackJsonp=window.webpackJsonp||[]).push([[587],{1052:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),l=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return t?a.a.createElement(m,c(c({ref:n},b),{},{components:t})):a.a.createElement(m,c({ref:n},b))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=t[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},660:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(8),i=(t(0),t(1052)),o={id:"knex.knex.migration",title:"Interface: Migration",sidebar_label:"Migration",hide_title:!0},c={unversionedId:"api/interfaces/knex.knex.migration",id:"version-4.4/api/interfaces/knex.knex.migration",isDocsHomePage:!1,title:"Interface: Migration",description:"Interface: Migration",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.migration.md",slug:"/api/interfaces/knex.knex.migration",permalink:"/docs/api/interfaces/knex.knex.migration",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.migration.md",version:"4.4",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1615364480,sidebar_label:"Migration",sidebar:"version-4.4/API",previous:{title:"Interface: MariaSslConfiguration",permalink:"/docs/api/interfaces/knex.knex.mariasslconfiguration"},next:{title:"Interface: MigrationSource<TMigrationSpec>",permalink:"/docs/api/interfaces/knex.knex.migrationsource"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"down",id:"down",children:[]},{value:"up",id:"up",children:[]}]}],b={toc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-migration"},"Interface: Migration"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".Migration"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Migration"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"down"},"down"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"down"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(i.b)("inlineCode",{parentName:"p"},"kenx"),": ",Object(i.b)("em",{parentName:"p"},"Knex"),"<",Object(i.b)("em",{parentName:"p"},"any"),", ",Object(i.b)("em",{parentName:"p"},"unknown"),"[]",">",") => ",Object(i.b)("em",{parentName:"p"},"PromiseLike"),"<",Object(i.b)("em",{parentName:"p"},"any"),">"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2105"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"up"},"up"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"up"),": (",Object(i.b)("inlineCode",{parentName:"p"},"knex"),": ",Object(i.b)("em",{parentName:"p"},"Knex"),"<",Object(i.b)("em",{parentName:"p"},"any"),", ",Object(i.b)("em",{parentName:"p"},"unknown"),"[]",">",") => ",Object(i.b)("em",{parentName:"p"},"PromiseLike"),"<",Object(i.b)("em",{parentName:"p"},"any"),">"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2104"))}l.isMDXComponent=!0}}]);