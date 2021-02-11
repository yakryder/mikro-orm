(window.webpackJsonp=window.webpackJsonp||[]).push([[470],{1048:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return g}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),m=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=m(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),i=m(a),d=r,g=i["".concat(c,".").concat(d)]||i[d]||s[d]||b;return a?n.a.createElement(g,o(o({ref:t},p),{},{components:a})):n.a.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<b;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},542:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return m}));var r=a(3),n=a(8),b=(a(0),a(1048)),c={id:"core.logger",title:"Class: Logger",sidebar_label:"Logger",hide_title:!0},o={unversionedId:"api/classes/core.logger",id:"version-4.4/api/classes/core.logger",isDocsHomePage:!1,title:"Class: Logger",description:"Class: Logger",source:"@site/versioned_docs/version-4.4/api/classes/core.logger.md",slug:"/api/classes/core.logger",permalink:"/docs/api/classes/core.logger",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/core.logger.md",version:"4.4",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1613086741,sidebar_label:"Logger",sidebar:"version-4.4/API",previous:{title:"Class: LockWaitTimeoutException",permalink:"/docs/api/classes/core.lockwaittimeoutexception"},next:{title:"Class: MemoryCacheAdapter",permalink:"/docs/api/classes/core.memorycacheadapter"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"debugMode",id:"debugmode",children:[]}]},{value:"Methods",id:"methods",children:[{value:"isEnabled",id:"isenabled",children:[]},{value:"log",id:"log",children:[]},{value:"setDebugMode",id:"setdebugmode",children:[]}]}],p={toc:l};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-logger"},"Class: Logger"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".Logger"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Logger"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new Logger"),"(",Object(b.b)("inlineCode",{parentName:"p"},"logger"),": (",Object(b.b)("inlineCode",{parentName:"p"},"message"),": ",Object(b.b)("em",{parentName:"p"},"string"),") => ",Object(b.b)("em",{parentName:"p"},"void"),", ",Object(b.b)("inlineCode",{parentName:"p"},"debugMode?"),": ",Object(b.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#loggernamespace"},Object(b.b)("em",{parentName:"a"},"LoggerNamespace")),"[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.logger"},Object(b.b)("em",{parentName:"a"},"Logger"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"logger")),Object(b.b)("td",{parentName:"tr",align:null},"(",Object(b.b)("inlineCode",{parentName:"td"},"message"),": ",Object(b.b)("em",{parentName:"td"},"string"),") => ",Object(b.b)("em",{parentName:"td"},"void")),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"debugMode")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"boolean")," ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#loggernamespace"},Object(b.b)("em",{parentName:"a"},"LoggerNamespace")),"[]"),Object(b.b)("td",{parentName:"tr",align:null},"false")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.logger"},Object(b.b)("em",{parentName:"a"},"Logger"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/Logger.ts#L3"},"packages/core/src/utils/Logger.ts:3")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"debugmode"},"debugMode"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"debugMode"),": ",Object(b.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#loggernamespace"},Object(b.b)("em",{parentName:"a"},"LoggerNamespace")),"[]= false"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"isenabled"},"isEnabled"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"isEnabled"),"(",Object(b.b)("inlineCode",{parentName:"p"},"namespace"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#loggernamespace"},Object(b.b)("em",{parentName:"a"},"LoggerNamespace")),"): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"namespace")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#loggernamespace"},Object(b.b)("em",{parentName:"a"},"LoggerNamespace")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/Logger.ts#L28"},"packages/core/src/utils/Logger.ts:28")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"log"},"log"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"log"),"(",Object(b.b)("inlineCode",{parentName:"p"},"namespace"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#loggernamespace"},Object(b.b)("em",{parentName:"a"},"LoggerNamespace")),", ",Object(b.b)("inlineCode",{parentName:"p"},"message"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Logs a message inside given namespace."),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"namespace")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#loggernamespace"},Object(b.b)("em",{parentName:"a"},"LoggerNamespace")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"message")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/Logger.ts#L11"},"packages/core/src/utils/Logger.ts:11")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"setdebugmode"},"setDebugMode"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"setDebugMode"),"(",Object(b.b)("inlineCode",{parentName:"p"},"debugMode"),": ",Object(b.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#loggernamespace"},Object(b.b)("em",{parentName:"a"},"LoggerNamespace")),"[]): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Sets active namespaces. Pass ",Object(b.b)("inlineCode",{parentName:"p"},"true")," to enable all logging."),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"debugMode")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"boolean")," ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#loggernamespace"},Object(b.b)("em",{parentName:"a"},"LoggerNamespace")),"[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/Logger.ts#L24"},"packages/core/src/utils/Logger.ts:24")))}m.isMDXComponent=!0}}]);