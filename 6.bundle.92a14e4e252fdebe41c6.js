(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{100:function(s,n,t){},47:function(s,n,t){"use strict";t.r(n),t.d(n,"Doc1xStructurePage",(function(){return r}));var e,a=t(82),c=t(25),o=(e=function(s,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,n){s.__proto__=n}||function(s,n){for(var t in n)n.hasOwnProperty(t)&&(s[t]=n[t])})(s,n)},function(s,n){function t(){this.constructor=s}e(s,n),s.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),p=function(s,n,t,e){var a,c=arguments.length,o=c<3?n:null===e?e=Object.getOwnPropertyDescriptor(n,t):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(s,n,t,e);else for(var p=s.length-1;p>=0;p--)(a=s[p])&&(o=(c<3?a(o):c>3?a(n,t,o):a(n,t))||o);return c>3&&o&&Object.defineProperty(n,t,o),o},i=function(s,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(s,n)},r=function(s){function n(n){var t=s.call(this)||this;return t.lang=n,t}return o(n,s),n.prototype.getText=function(s){return this.lang.get("DOC.1x.CONTENT.ESSENTIALS.STRUCTURE."+s)},n.prototype.onInit=function(){},n.prototype.onDestroy=function(){},n=p([Object(a.b)({template:t(99),style:t(100),title:"Strucutre / Document - Nimble"}),i("design:paramtypes",[c.a])],n)}(a.a)},82:function(s,n,t){"use strict";t.d(n,"a",(function(){return e.a})),t.d(n,"b",(function(){return i}));var e=t(20),a=function(s){Object.assign(this,s)},c=function(s){this.description="",this.keywords="",this.og={},Object.assign(this,s),this.og&&(this.og=new a(this.og))},o=function(s){this.template="",this.style="",this.title="",this.meta={},Object.assign(this,s),this.meta&&(this.meta=new c(this.meta))},p=t(2);t(21);function i(s){return function(n){return s=new o(s),Object.assign(n.prototype,s),Reflect.defineMetadata(p.a,!0,n),n}}},99:function(s,n){s.exports="<div class=doc-1x-get-started-page> <h1> {{getText('TITLE')}} </h1> <section> <h4> <a href=#folder-archives-structure name=folder-archives-structure> {{getText('FOLDER_ARCHIVES_STRUCTURE.TITLE')}} </a> </h4> <p class=text-justify> {{getText('FOLDER_ARCHIVES_STRUCTURE.TEXT')}} </p> <pre class=language-shell>\n            <code>\npublic\n├─ assets\n│  ├─ css\n│  ├─ fonts\n│  ├─ img\n│  └─ js\n├─ favicon.ico\n└─ index.html\nsrc\n├─ app\n│  ├─ pages\n│  │  ├─ root\n│  │  │  ├─ root.page.html\n│  │  │  ├─ root.page.scss\n│  │  │  └─ root.page.ts\n│  │  ├─ first\n│  │  │  ├─ first.page.html\n│  │  │  ├─ first.page.scss\n│  │  │  └─ first.page.ts\n│  │  └─ second\n│  │     ├─ second.page.html\n│  │     ├─ second.page.scss\n│  │     └─ second.page.ts\n│  └─ routes.ts\n├─ environments\n│  ├─ env.dev.js\n│  ├─ env.local.js\n│  └─ env.prod.js\n├─ scss\n│   ├─ reset.scss\n│   └─ variables.scss\n├─ configuration.json\n├─ main.ts\n└─ style.scss\nnimble.json\npackage.json\ntsconfig.json\n            </code>\n        </pre> </section> <section> <h4 class=mb-1> <a href=#root-files name=root-files [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.ROOT_FILES.TITLE')\"> </a> </h4> <pre class=language-shell>\n            <code>\n<span class=opacity-50>public\nsrc</span>\nnimble.json\npackage.json\ntsconfig.json\n            </code>\n        </pre> <p class=mb-4 [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.ROOT_FILES.TEXT_1')\"></p> <p class=mb-4 [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.ROOT_FILES.TEXT_2')\"></p> <p class=mb-4 [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.ROOT_FILES.TEXT_3')\"></p> <p class=mb-4 [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.ROOT_FILES.TEXT_4')\"></p> </section> <section> <h4 class=mb-1> <a href=#public-directory name=public-directory [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.PUBLIC_DIRECTORY.TITLE')\"></a> </h4> <pre class=language-shell>\n            <code>\n<span class=opacity-50>public</span>\n├─ assets\n│  ├─ css\n│  ├─ fonts\n│  ├─ img\n│  └─ js\n├─ favicon.ico\n└─ index.html\n            </code>\n        </pre> <p class=mb-4 [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.PUBLIC_DIRECTORY.TEXT')\"> </p> </section> <section> <h4 class=mb-1> <a href=#src-directory name=src-directory [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.SOURCE_DIRECTORY.TITLE')\"></a> </h4> <pre class=language-shell>\n            <code>\n<span class=opacity-50>src</span>\n├─ <span class=opacity-50>app</span>\n├─ <span class=opacity-50>environments</span>\n├─ <span class=opacity-50>scss</span>\n├─ main.ts\n└─ style.scss\n            </code>\n        </pre> <p class=mb-4 [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.SOURCE_DIRECTORY.TEXT_1')\"></p> <p class=mb-4 [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.SOURCE_DIRECTORY.TEXT_2')\"></p> <p class=mb-4 [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.SOURCE_DIRECTORY.TEXT_3')\"></p> </section> <section> <h4 class=mb-1> <a href=#app-directory name=app-directory [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.APP_DIRECTORY.TITLE')\"></a> </h4> <pre class=language-shell>\n            <code>\n<span class=opacity-50>src</span>\n├─ app\n│  ├─ pages\n│  │  ├─ root\n│  │  │  ├─ root.page.html\n│  │  │  ├─ root.page.scss\n│  │  │  └─ root.page.ts\n│  │  ├─ first\n│  │  │  ├─ first.page.html\n│  │  │  ├─ first.page.scss\n│  │  │  └─ first.page.ts\n│  │  └─ second\n│  │     ├─ second.page.html\n│  │     ├─ second.page.scss\n│  │     └─ second.page.ts\n│  └─ routes.ts\n├─ <span class=opacity-50>environments</span>\n├─ <span class=opacity-50>scss</span>\n├─ <span class=opacity-50>main.ts</span>\n└─ <span class=opacity-50>style.scss</span>\n            </code>\n        </pre> <p class=mb-4 [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.APP_DIRECTORY.TEXT_1')\"></p> <p class=mb-4 [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.APP_DIRECTORY.TEXT_2')\"></p> <p class=mb-4 [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.APP_DIRECTORY.TEXT_3')\"></p> </section> <section> <h4 class=mb-1> <a href=#environments-directory name=environments-directory [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.ENVIRONMENTS_DIRECTORY.TITLE')\"></a> </h4> <pre class=language-shell>\n            <code>\n<span class=opacity-50>src</span>\n├─ <span class=opacity-50>app</span>\n├─ environments\n│  ├─ env.dev.js\n│  ├─ env.local.js\n│  └─ env.prod.js\n├─ <span class=opacity-50>scss</span>\n├─ <span class=opacity-50>main.ts</span>\n└─ <span class=opacity-50>style.scss</span>\n            </code>\n        </pre> <p class=mb-4 [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.ENVIRONMENTS_DIRECTORY.TEXT')\"> </p> </section> <section> <h4 class=mb-1> <a href=#scss-directory name=scss-directory [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.SCSS_DIRECTORY.TITLE')\"></a> </h4> <pre class=language-shell>\n            <code>\n<span class=opacity-50>src</span>\n├─ <span class=opacity-50>app</span>\n├─ <span class=opacity-50>environments</span>\n├─ scss\n│  ├─ reset.scss\n│  └─ variables.scss\n├─ <span class=opacity-50>main.ts</span>\n└─ <span class=opacity-50>style.scss</span>\n            </code>\n        </pre> <p class=mb-4 [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.SCSS_DIRECTORY.TEXT_1')\"></p> <p class=mb-4 [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.SCSS_DIRECTORY.TEXT_2')\"></p> <p class=mb-4 [html]=\"getText('FOLDER_ARCHIVES_STRUCTURE.SCSS_DIRECTORY.TEXT_3')\"></p> </section> </div>"}}]);