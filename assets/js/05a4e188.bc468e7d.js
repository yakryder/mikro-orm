(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1051:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(n),d=a,u=l["".concat(i,".").concat(d)]||l[d]||m[d]||c;return n?r.a.createElement(u,o(o({ref:t},p),{},{components:n})):r.a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),c=(n(0),n(1051)),i={id:"core.uniqueconstraintviolationexception",title:"Class: UniqueConstraintViolationException",sidebar_label:"UniqueConstraintViolationException",hide_title:!0},o={unversionedId:"api/classes/core.uniqueconstraintviolationexception",id:"version-4.4/api/classes/core.uniqueconstraintviolationexception",isDocsHomePage:!1,title:"Class: UniqueConstraintViolationException",description:"Class: UniqueConstraintViolationException",source:"@site/versioned_docs/version-4.4/api/classes/core.uniqueconstraintviolationexception.md",slug:"/api/classes/core.uniqueconstraintviolationexception",permalink:"/docs/api/classes/core.uniqueconstraintviolationexception",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/core.uniqueconstraintviolationexception.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1613370248,sidebar_label:"UniqueConstraintViolationException",sidebar:"version-4.4/API",previous:{title:"Class: UnderscoreNamingStrategy",permalink:"/docs/api/classes/core.underscorenamingstrategy"},next:{title:"Class: UnitOfWork",permalink:"/docs/api/classes/core.unitofwork"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"prepareStackTrace",id:"preparestacktrace",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]},{value:"stackTraceLimit",id:"stacktracelimit",children:[]}]},{value:"Methods",id:"methods",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[]}]}],p={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"class-uniqueconstraintviolationexception"},"Class: UniqueConstraintViolationException"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".UniqueConstraintViolationException"),Object(c.b)("p",null,"Exception for a unique constraint violation detected in the driver."),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},Object(c.b)("em",{parentName:"a"},"ConstraintViolationException"))),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("strong",{parentName:"p"},"UniqueConstraintViolationException")))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new UniqueConstraintViolationException"),"(",Object(c.b)("inlineCode",{parentName:"p"},"previous"),": Error): ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.uniqueconstraintviolationexception"},Object(c.b)("em",{parentName:"a"},"UniqueConstraintViolationException"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"previous")),Object(c.b)("td",{parentName:"tr",align:null},"Error")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.uniqueconstraintviolationexception"},Object(c.b)("em",{parentName:"a"},"UniqueConstraintViolationException"))),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"code"},"code"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"code"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#code"},"code")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L6"},"packages/core/src/exceptions.ts:6")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"errmsg"},"errmsg"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"errmsg"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#errmsg"},"errmsg")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"errno"},"errno"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"errno"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#errno"},"errno")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L7"},"packages/core/src/exceptions.ts:7")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"message"},"message"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"message"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#message"},"message")),Object(c.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:974"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#name"},"name")),Object(c.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:973"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"preparestacktrace"},"prepareStackTrace"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"prepareStackTrace"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(c.b)("inlineCode",{parentName:"p"},"err"),": Error, ",Object(c.b)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]) => ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Optional override for formatting stack traces"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(c.b)("a",{parentName:"p",href:"https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces"},"https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#preparestacktrace"},"prepareStackTrace")),Object(c.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"sqlmessage"},"sqlMessage"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"sqlMessage"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#sqlmessage"},"sqlMessage")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L9"},"packages/core/src/exceptions.ts:9")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"sqlstate"},"sqlState"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"sqlState"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#sqlstate"},"sqlState")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/exceptions.ts#L8"},"packages/core/src/exceptions.ts:8")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"stack"},"stack"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"stack"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#stack"},"stack")),Object(c.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:975"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"stacktracelimit"},"stackTraceLimit"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"stackTraceLimit"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#stacktracelimit"},"stackTraceLimit")),Object(c.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:13"),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"capturestacktrace"},"captureStackTrace"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"captureStackTrace"),"(",Object(c.b)("inlineCode",{parentName:"p"},"targetObject"),": ",Object(c.b)("em",{parentName:"p"},"object"),", ",Object(c.b)("inlineCode",{parentName:"p"},"constructorOpt?"),": Function): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Create .stack property on a target object"),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"targetObject")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"object"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"constructorOpt?")),Object(c.b)("td",{parentName:"tr",align:null},"Function")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException")),Object(c.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:4"))}b.isMDXComponent=!0}}]);