(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{1048:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),d=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=d(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},u=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=d(t),u=n,m=l["".concat(c,".").concat(u)]||l[u]||b[u]||a;return t?o.a.createElement(m,i(i({ref:r},s),{},{components:t})):o.a.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=u;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},361:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return d}));var n=t(3),o=t(8),a=(t(0),t(1048)),c={id:"core.node",title:"Interface: Node",sidebar_label:"Node",hide_title:!0},i={unversionedId:"api/interfaces/core.node",id:"version-4.4/api/interfaces/core.node",isDocsHomePage:!1,title:"Interface: Node",description:"Interface: Node",source:"@site/versioned_docs/version-4.4/api/interfaces/core.node.md",slug:"/api/interfaces/core.node",permalink:"/docs/api/interfaces/core.node",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/core.node.md",version:"4.4",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1613086741,sidebar_label:"Node",sidebar:"version-4.4/API",previous:{title:"Interface: NamingStrategy",permalink:"/docs/api/interfaces/core.namingstrategy"},next:{title:"Interface: OneToOneOptions<T, O>",permalink:"/docs/api/interfaces/core.onetooneoptions"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"dependencies",id:"dependencies",children:[]},{value:"hash",id:"hash",children:[]},{value:"state",id:"state",children:[]}]}],s={toc:p};function d(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-node"},"Interface: Node"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".Node"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Node"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"dependencies"},"dependencies"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"dependencies"),": ",Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(a.b)("em",{parentName:"a"},"Dictionary")),"<",Object(a.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.edge"},Object(a.b)("em",{parentName:"a"},"Edge")),">"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L13"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:13")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"hash"},"hash"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"hash"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L11"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:11")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"state"},"state"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"state"),": ",Object(a.b)("a",{parentName:"p",href:"/docs/api/enums/core.nodestate"},Object(a.b)("em",{parentName:"a"},"NodeState"))),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L12"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:12")))}d.isMDXComponent=!0}}]);