(window.webpackJsonp=window.webpackJsonp||[]).push([[611],{1048:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var o=t(0),i=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),b=o,m=d["".concat(a,".").concat(b)]||d[b]||u[b]||r;return t?i.a.createElement(m,s(s({ref:n},c),{},{components:t})):i.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=t[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},683:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var o=t(3),i=t(8),r=(t(0),t(1048)),a={title:"Deployment"},s={unversionedId:"deployment",id:"version-3.6/deployment",isDocsHomePage:!1,title:"Deployment",description:"Under the hood, MikroORM uses ts-morph to read",source:"@site/versioned_docs/version-3.6/deployment.md",slug:"/deployment",permalink:"/docs/3.6/deployment",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/deployment.md",version:"3.6",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1613086741,sidebar:"version-3.6/docs",previous:{title:"Composite and Foreign Keys as Primary Key",permalink:"/docs/3.6/composite-keys"},next:{title:"Decorators Reference",permalink:"/docs/3.6/decorators"}},l=[{value:"Deploy pre-built cache",id:"deploy-pre-built-cache",children:[]},{value:"Fill type or entity attributes everywhere",id:"fill-type-or-entity-attributes-everywhere",children:[]},{value:"Deploy your entity source files",id:"deploy-your-entity-source-files",children:[]},{value:"Deploy a bundle of entities and dependencies with Webpack",id:"deploy-a-bundle-of-entities-and-dependencies-with-webpack",children:[{value:"Prepare your project for Webpack",id:"prepare-your-project-for-webpack",children:[]},{value:"Webpack configuration",id:"webpack-configuration",children:[]},{value:"Running Webpack",id:"running-webpack",children:[]}]}],c={toc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Under the hood, ",Object(r.b)("inlineCode",{parentName:"p"},"MikroORM")," uses ",Object(r.b)("a",{parentName:"p",href:"https://github.com/dsherret/ts-morph"},Object(r.b)("inlineCode",{parentName:"a"},"ts-morph"))," to read\nTypeScript source files of all entities to be able to detect all types. Thanks to this,\ndefining the type is enough for runtime validation."),Object(r.b)("p",null,"This has some consequences for deployment of your application. Sometimes you will want to\ndeploy only your compiled output, without TS source files at all. In that case, discovery\nprocess will probably fail. You have several options:"),Object(r.b)("h2",{id:"deploy-pre-built-cache"},"Deploy pre-built cache"),Object(r.b)("p",null,"By default, output of metadata discovery will be cached in ",Object(r.b)("inlineCode",{parentName:"p"},"temp")," folder. You can reuse this\ncache in your deployed application. Currently the cache is saved in files named like the entity\nsource file, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"Author.ts")," entity will store cache in ",Object(r.b)("inlineCode",{parentName:"p"},"temp/Author.ts.json")," file."),Object(r.b)("p",null,"When running compiled code, JS entities will be taken into account instead, so you will need to\ngenerate the cache by running the compiled code locally. That will generate ",Object(r.b)("inlineCode",{parentName:"p"},"temp/Author.js.json"),",\nwhich is the file you will need to deploy alongside your application. "),Object(r.b)("h2",{id:"fill-type-or-entity-attributes-everywhere"},"Fill type or entity attributes everywhere"),Object(r.b)("p",null,"What discovery process does is to sniff TS types and save their value to string, so it can be\nused later for validation. You can skip the whole process by simply providing those values\nmanually:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey({ type: 'number' })\n  id!: number;\n\n  @Property({ type: 'string' })\n  title!: string;\n\n  @Enum(() => BookStatus)\n  status?: BookStatus;\n\n  @ManyToOne(() => Author) // or `@ManyToOne({ type: 'Author' })` or `@ManyToOne({ entity: () => Author })`\n  author1!: Author;\n\n  // or\n  @ManyToOne({ type: 'Author' })\n  author2!: Author;\n\n  // or\n  @ManyToOne({ entity: () => Author })\n  author3!: Author;\n\n}\n\nexport enum BookStatus {\n  SOLD_OUT = 'sold',\n  ACTIVE = 'active',\n  UPCOMING = 'upcoming',\n }\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"For numeric enums this is not be required.")),Object(r.b)("h2",{id:"deploy-your-entity-source-files"},"Deploy your entity source files"),Object(r.b)("p",null,"Usually it does not matter much that you deploy more files than needed, so the easiest way\nis to just deploy your TS source files next to the compiled output, just like during development."),Object(r.b)("h2",{id:"deploy-a-bundle-of-entities-and-dependencies-with-webpack"},"Deploy a bundle of entities and dependencies with ",Object(r.b)("a",{parentName:"h2",href:"https://webpack.js.org/"},"Webpack")),Object(r.b)("p",null,"Webpack can be used to bundle every entity and dependency: you get a single file that contains\nevery required module/file and has no external dependencies."),Object(r.b)("h3",{id:"prepare-your-project-for-webpack"},"Prepare your project for Webpack"),Object(r.b)("p",null,"Webpack requires every required file to be hardcoded in your code. Code like this won't work\n(it will throw an error because Webpack doesn't know which file to include in the bundle):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"let dependencyNameInVariable = 'dependency';\nconst dependency = import(dependencyNameInVariable);\n")),Object(r.b)("p",null,"As Webpack creates a file bundle, it isn't desired that it scans directories for entities\nor metadata. Therefore you need to use the ",Object(r.b)("inlineCode",{parentName:"p"},"entities")," option in the initialization function\nand ",Object(r.b)("inlineCode",{parentName:"p"},"entitiesDirs"),"/",Object(r.b)("inlineCode",{parentName:"p"},"entitiesDirsTs")," will be ignored (see dynamically including entities as\nan alternative solution). Also you need to fill ",Object(r.b)("inlineCode",{parentName:"p"},"type")," or ",Object(r.b)("inlineCode",{parentName:"p"},"entity")," attributes everywhere\n(see above) and disable caching (it will decrease start-time slightly)."),Object(r.b)("h4",{id:"disabling-dynamic-file-access"},"Disabling dynamic file access"),Object(r.b)("p",null,"First thing you should do is to disable dynamic file access in the discovery process via the\n",Object(r.b)("inlineCode",{parentName:"p"},"discovery.disableDynamicFileAccess")," toggle. This will effectively do:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"set metadata provider to ",Object(r.b)("inlineCode",{parentName:"li"},"ReflectMetadataProvider")),Object(r.b)("li",{parentName:"ul"},"disable caching"),Object(r.b)("li",{parentName:"ul"},"disallow usage of ",Object(r.b)("inlineCode",{parentName:"li"},"entitiesDirs"))),Object(r.b)("h4",{id:"manually-defining-entities"},"Manually defining entities"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { Author, Book, BookTag, Publisher, Test } from '../entities';\n\nawait MikroORM.init({\n  ...\n  entities: [Author, Book, BookTag, Publisher, Test],\n  discovery: { disableDynamicFileAccess: true },\n  ...\n});\n")),Object(r.b)("h4",{id:"dynamically-loading-dependencies"},"Dynamically loading dependencies"),Object(r.b)("p",null,"This will make use of a Webpack feature called ",Object(r.b)("a",{parentName:"p",href:"https://webpack.js.org/guides/code-splitting/#dynamic-imports"},"dynamic imports"),".\nThis way you can import dependencies as long as part of the path is known."),Object(r.b)("p",null,"In following example ",Object(r.b)("a",{parentName:"p",href:"https://webpack.js.org/guides/dependency-management/#requirecontext"},Object(r.b)("inlineCode",{parentName:"a"},"require.context")),"\nis used. This 'function' is only usable during the building process from Webpack so therefore\nthere is an alternative solution provided that will as long as the environment variable\nWEBPACK is not set (e.g. during development with ",Object(r.b)("inlineCode",{parentName:"p"},"ts-node"),")."),Object(r.b)("p",null,"Here, all files with the extension ",Object(r.b)("inlineCode",{parentName:"p"},".ts")," will be imported from the directory ",Object(r.b)("inlineCode",{parentName:"p"},"../entities"),". "),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap"},Object(r.b)("inlineCode",{parentName:"a"},"flatMap"))," is a method from ECMAScript 2019 and requires ",Object(r.b)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," 11 or higher.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"await MikroORM.init({\n  // ...\n  entities: await getEntities(),\n  discovery: { disableDynamicFileAccess: true },\n  // ...\n});\n\nasync function getEntities(): Promise<any[]> {\n  if (process.env.WEBPACK) {\n    const modules = require.context('../entities', true, /\\.ts$/);\n\n    return modules\n      .keys()\n      .map(r => modules(r))\n      .flatMap(mod => Object.keys(mod).map(className => mod[className]));\n  }\n\n  const promises = fs.readdirSync('../entities').map(file => import(`../entities/${file}`));\n  const modules = await Promise.all(promises);\n\n  return modules.flatMap(mod => Object.keys(mod).map(className => mod[className]));\n}\n")),Object(r.b)("h3",{id:"webpack-configuration"},"Webpack configuration"),Object(r.b)("p",null,"Webpack can be run without ",Object(r.b)("a",{parentName:"p",href:"https://webpack.js.org/configuration/"},"configuration file")," but\nfor building MikroORM and ",Object(r.b)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," bundles it requires additional\nconfiguration. Configuration for Webpack is stored in the root of the project as\n",Object(r.b)("inlineCode",{parentName:"p"},"webpack.config.js"),". For all the options please refer to the following ",Object(r.b)("a",{parentName:"p",href:"https://webpack.js.org/configuration/"},"page"),"."),Object(r.b)("p",null,"For bundling MikroORM the following configuration is required:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const path = require('path');\nconst { EnvironmentPlugin, IgnorePlugin } = require('webpack');\nconst TerserPlugin = require('terser-webpack-plugin');\n\n// Mark our dev dependencies as externals so they don't get included in the webpack bundle.\nconst { devDependencies } = require('./package.json');\nconst externals = {};\n\nfor (const devDependency of Object.keys(devDependencies)) {\n  externals[devDependency] = `commonjs ${devDependency}`;\n}\n\n// And anything MikroORM's packaging can be ignored if it's not on disk.\n// Later we check these dynamically and tell webpack to ignore the ones we don't have.\nconst optionalModules = new Set([\n  ...Object.keys(require('knex/package.json').browser),\n  ...Object.keys(require('mikro-orm/package.json').peerDependencies),\n  ...Object.keys(require('mikro-orm/package.json').devDependencies)\n]);\n\nmodule.exports = {\n  entry: path.resolve('app', 'server.ts'),\n\n  // You can toggle development mode on to better see what's going on in the webpack bundle,\n  // but for anything that is getting deployed, you should use 'production'.\n  // mode: 'development',\n  mode: 'production',\n\n  optimization: {\n    minimizer: [\n      new TerserPlugin({\n        terserOptions: {\n          // We want to minify the bundle, but don't want Terser to change the names of our entity\n          // classes. This can be controlled in a more granular way if needed, (see\n          // https://terser.org/docs/api-reference.html#mangle-options) but the safest default\n          // config is that we simply disable mangling altogether but allow minification to proceed.\n          mangle: false,\n        }\n      })\n    ]\n  },\n  target: 'node',\n  module: {\n    rules: [\n      // We do not want ts-morph bundled up in the application, as it drags in typescript,\n      // which is huge. We are not using either of these at runtime, but they can't be\n      // ignored using IgnorePlugin because Mikro still requires them, and this causes an error\n      // at runtime. Packaging them with the null-loader allows them to be required without erroring\n      // then simply be swapped with null at runtime.\n      {\n        test: /(TsMorphMetadataProvider|ts-morph)/,\n        loader: 'null-loader',\n      },\n\n      // Bring in our typescript files.\n      {\n        test: /\\.ts$/,\n        exclude: /node_modules/,\n        loader: 'ts-loader',\n      },\n\n      // Native modules can be bundled as well.\n      {\n        test: /\\.node$/,\n        use: 'node-loader',\n      },\n\n      // Some of MikroORM's dependencies use mjs files, so let's set them up here.\n      {\n        test: /\\.mjs$/,\n        include: /node_modules/,\n        type: 'javascript/auto',\n      },\n    ],\n  },\n\n  // These are computed above.\n  externals,\n\n  resolve: {\n    extensions: ['.ts', '.js']\n  },\n\n  plugins: [\n    // Ignore any of our optional modules if they aren't installed. This ignores database drivers\n    // that we aren't using for example.\n    new EnvironmentPlugin({ WEBPACK: true }),\n    new IgnorePlugin({\n      checkResource: resource => {\n        const [baseResource] = resource.split('/');\n\n        if (optionalModules.has(baseResource)) {\n          try {\n            require.resolve(resource);\n            return false;\n          } catch {\n            return true;\n          }\n        }\n\n        return false;\n      },\n    }),\n  ],\n\n  output: {\n    filename: 'server.js',\n    libraryTarget: 'commonjs',\n    path: path.resolve(__dirname, '..', 'output'),\n  },\n};\n")),Object(r.b)("h3",{id:"running-webpack"},"Running Webpack"),Object(r.b)("p",null,"To run Webpack execute ",Object(r.b)("inlineCode",{parentName:"p"},"webpack")," (or ",Object(r.b)("inlineCode",{parentName:"p"},"npx webpack")," if not installed globally) in the root\nof the project. It will probably throw a few warnings but you can ignore the errors regarding\nMikroORM: the mentioned pieces of code won't be executed if properly bundled with Webpack."))}p.isMDXComponent=!0}}]);