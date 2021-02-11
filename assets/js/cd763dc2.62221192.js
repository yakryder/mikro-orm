(window.webpackJsonp=window.webpackJsonp||[]).push([[773],{1048:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),s=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),b=s(t),p=r,u=b["".concat(o,".").concat(p)]||b[p]||g[p]||i;return t?a.a.createElement(u,l(l({ref:n},c),{},{components:t})):a.a.createElement(u,l({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},844:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return m})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(8),i=(t(0),t(1048)),o={title:"Naming Strategy"},l={unversionedId:"naming-strategy",id:"naming-strategy",isDocsHomePage:!1,title:"Naming Strategy",description:"When mapping your entities to database tables and columns, their names will be defined by naming",source:"@site/docs/naming-strategy.md",slug:"/naming-strategy",permalink:"/docs/next/naming-strategy",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/naming-strategy.md",version:"current",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1613086741,sidebar:"docs",previous:{title:"Entity Generator",permalink:"/docs/next/entity-generator"},next:{title:"Property Validation",permalink:"/docs/next/property-validation"}},m=[{value:"Naming Strategy in mongo driver",id:"naming-strategy-in-mongo-driver",children:[]},{value:"Naming Strategy in SQL drivers",id:"naming-strategy-in-sql-drivers",children:[]},{value:"NamingStrategy API",id:"namingstrategy-api",children:[]}],c={toc:m};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When mapping your entities to database tables and columns, their names will be defined by naming\nstrategy. There are 3 basic naming strategies you can choose from:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"UnderscoreNamingStrategy")," - default of all SQL drivers"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MongoNamingStrategy")," - default of ",Object(i.b)("inlineCode",{parentName:"li"},"MongoDriver")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"EntityCaseNamingStrategy")," - uses unchanged entity and property names")),Object(i.b)("p",null,"You can override this when initializing ORM. You can also provide your own naming strategy, just\nimplement ",Object(i.b)("inlineCode",{parentName:"p"},"NamingStrategy")," interface and provide your implementation when bootstrapping ORM:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"class YourCustomNamingStrategy implements NamingStrategy {\n  ...\n}\n\nconst orm = await MikroORM.init({\n  ...\n  namingStrategy: YourCustomNamingStrategy,\n  ...\n});\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can also extend ",Object(i.b)("inlineCode",{parentName:"p"},"AbstractNamingStrategy")," which implements one method for you - ",Object(i.b)("inlineCode",{parentName:"p"},"getClassName()"),"\nthat is used to map entity file name to class name.")),Object(i.b)("h2",{id:"naming-strategy-in-mongo-driver"},"Naming Strategy in mongo driver"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MongoNamingStrategy")," will simply use all field names as they are defined. Collection names will\nbe translated into lower-cased dashed form:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MyCoolEntity")," will be translated into ",Object(i.b)("inlineCode",{parentName:"p"},"my-cool-entity")," collection name."),Object(i.b)("h2",{id:"naming-strategy-in-sql-drivers"},"Naming Strategy in SQL drivers"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MySqlDriver")," defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"UnderscoreNamingStrategy"),", which means your all your database tables and\ncolumns will be lower-cased and words divided by underscored:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `author` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  `created_at` datetime(3) DEFAULT NULL,\n  `updated_at` datetime(3) DEFAULT NULL,\n  `terms_accepted` tinyint(1) DEFAULT NULL,\n  `name` varchar(255) DEFAULT NULL,\n  `email` varchar(255) DEFAULT NULL,\n  `born` datetime DEFAULT NULL,\n  `favourite_book_id` int(11) DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")),Object(i.b)("h2",{id:"namingstrategy-api"},"NamingStrategy API"),Object(i.b)("h4",{id:"namingstrategygetclassnamefile-string-separator-string-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.getClassName(file: string, separator?: string): string")),Object(i.b)("p",null,"Return a name of the class based on its file name."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"namingstrategyclasstotablenameentityname-string-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.classToTableName(entityName: string): string")),Object(i.b)("p",null,"Return a table name for an entity class."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"namingstrategypropertytocolumnnamepropertyname-string-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.propertyToColumnName(propertyName: string): string")),Object(i.b)("p",null,"Return a column name for a property."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"namingstrategyreferencecolumnname-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.referenceColumnName(): string")),Object(i.b)("p",null,"Return the default reference column name."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"namingstrategyjoincolumnnamepropertyname-string-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.joinColumnName(propertyName: string): string")),Object(i.b)("p",null,"Return a join column name for a property."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"namingstrategyjointablenamesourceentity-string-targetentity-string-propertyname-string-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.joinTableName(sourceEntity: string, targetEntity: string, propertyName: string): string")),Object(i.b)("p",null,"Return a join table name. This is used as default value for ",Object(i.b)("inlineCode",{parentName:"p"},"pivotTable"),". "),Object(i.b)("hr",null),Object(i.b)("h4",{id:"namingstrategyjoinkeycolumnnameentityname-string-referencedcolumnname-string-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.joinKeyColumnName(entityName: string, referencedColumnName?: string): string")),Object(i.b)("p",null,"Return the foreign key column name for the given parameters."),Object(i.b)("hr",null))}s.isMDXComponent=!0}}]);