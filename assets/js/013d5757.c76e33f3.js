(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1051:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,b=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return r?o.a.createElement(b,s(s({ref:t},u),{},{components:r})):o.a.createElement(b,s({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(8),a=(r(0),r(1051)),i={title:"Property Validation"},s={unversionedId:"property-validation",id:"version-4.2/property-validation",isDocsHomePage:!1,title:"Property Validation",description:"Since v4.0.3 the validation needs to be explicitly enabled via validate: true.",source:"@site/versioned_docs/version-4.2/property-validation.md",slug:"/property-validation",permalink:"/docs/4.2/property-validation",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/property-validation.md",version:"4.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1613370248,sidebar:"version-4.2/docs",previous:{title:"Naming Strategy",permalink:"/docs/4.2/naming-strategy"},next:{title:"Migrations",permalink:"/docs/4.2/migrations"}},l=[],u={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Since v4.0.3 the validation needs to be explicitly enabled via ",Object(a.b)("inlineCode",{parentName:"p"},"validate: true"),".\nIt has performance implications and usually should not be needed, as long as\nyou don't modify your entities via ",Object(a.b)("inlineCode",{parentName:"p"},"Object.assign()"),".")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"MirkoORM")," will validate your properties before actual persisting happens. It will try to fix wrong\ndata types for you automatically. If automatic conversion fails, it will throw an error. You can\nenable strict mode to disable this feature and let ORM throw errors instead. Validation is triggered\nwhen persisting the entity. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// number instead of string will throw\nconst author = new Author('test', 'test');\nwrap(author).assign({ name: 111, email: 222 });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.name of type 'string' to '111' of type 'number'\"\n\n// string date with unknown format will throw\nwrap(author).assign(author, { name: '333', email: '444', born: 'asd' });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.born of type 'date' to 'asd' of type 'string'\"\n\n// string date with correct format will be auto-corrected\nwrap(author).assign({ name: '333', email: '444', born: '2018-01-01' });\nawait orm.em.persistAndFlush(author);\nconsole.log(author.born).toBe(true); // instance of Date\n\n// Date object will be ok\nwrap(author).assign({ born: new Date() });\nawait orm.em.persistAndFlush(author);\nconsole.log(author.born).toBe(true); // instance of Date\n\n// null will be ok\nwrap(author).assign({ born: null });\nawait orm.em.persistAndFlush(author);\nconsole.log(author.born); // null\n\n// string number with correct format will be auto-corrected\nwrap(author).assign({ age: '21' });\nawait orm.em.persistAndFlush(author);\nconsole.log(author.age); // number 21\n\n// string instead of number with will throw\nwrap(author).assign({ age: 'asd' });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.age of type 'number' to 'asd' of type 'string'\"\nwrap(author).assign({ age: new Date() });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.age of type 'number' to '2019-01-17T21:14:23.875Z' of type 'date'\"\nwrap(author).assign({ age: false });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.age of type 'number' to 'false' of type 'boolean'\"\n")))}p.isMDXComponent=!0}}]);