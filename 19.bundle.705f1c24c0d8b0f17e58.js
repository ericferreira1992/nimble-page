(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{130:function(e,n,t){"use strict";t.r(n),t.d(n,"DocumentPage",(function(){return h}));var i,u=t(81),r=t(83),o=t(16),a=t(82),s=t(84),l=t(41),c=t(24),d=t(85),f=t.n(d),m=(i=function(e,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}i(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),v=function(e,n,t,i){var u,r=arguments.length,o=r<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,t,i);else for(var a=e.length-1;a>=0;a--)(u=e[a])&&(o=(r<3?u(o):r>3?u(n,t,o):u(n,t))||o);return r>3&&o&&Object.defineProperty(n,t,o),o},p=function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},g=function(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],i=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},h=function(e){function n(n,t,i,u){var r=e.call(this)||this;return r.routeParams=n,r.nimbleService=t,r.listener=i,r.lang=u,r.version=null,r.languageDrop=!1,r.showMenu=!1,r.langPrefix="DOC",r.teste=null,r.cancelListeners=[],r.versionForm=new a.a({version:{value:null}}),r}return m(n,e),Object.defineProperty(n.prototype,"versions",{get:function(){return this.nimbleService.versions},enumerable:!1,configurable:!0}),n.prototype.expandSubmenu=function(e){e.hasSubmenu&&this.render((function(){e.submenuExpanded=!e.submenuExpanded}))},n.prototype.isActive=function(e){var n=this;return e.hasPath?(""+(r.a.currentPath+location.hash)).startsWith(e.completePath):e.submenu.some((function(e){return n.isActive(e)}))},n.prototype.toggleLanguageDrop=function(){var e=this;setTimeout((function(){e.render((function(){return e.languageDrop=!e.languageDrop}))}),1)},n.prototype.toggleMenu=function(){var e=this;this.render((function(){return e.showMenu=!e.showMenu}))},n.prototype.onLinkClicked=function(e){var n=this;setTimeout((function(){n.render((function(){e&&!e.forceLink&&e.hasSubmenu&&(e.submenuExpanded=!0),n.showMenu=!n.showMenu}))}))},n.prototype.checkIfNeedExpandSubmenus=function(e){var n,t,i=this;try{for(var u=g(e),r=u.next();!r.done;r=u.next()){var o=r.value;o.submenuExpanded||(o.submenuExpanded=o.hasSubmenu&&(this.isActive(o)||o.submenu.some((function(e){return i.isActive(e)})))),o.hasSubmenu&&this.checkIfNeedExpandSubmenus(o.submenu)}}catch(e){n={error:e}}finally{try{r&&!r.done&&(t=u.return)&&t.call(u)}finally{if(n)throw n.error}}},n.prototype.highlightCodes=function(){setTimeout((function(){document.querySelectorAll('pre code[class*="language-"]').forEach((function(e){f.a.highlightElement(e)}))}),0)},n.prototype.onEnter=function(){var e=this;this.listener.listen(window,"click",(function(n){e.languageDrop&&e.render((function(){return e.languageDrop=!1}))}))},n.prototype.onInit=function(){var e=this;if(this.cancelListeners=[r.a.addListener(["FINISHED_CHANGE","CHANGE_REJECTED","CHANGE_ERROR"],(function(){e.render((function(){e.checkIfNeedExpandSubmenus(e.version.menu)})).then((function(){e.highlightCodes()}))}))],this.highlightCodes(),r.a.currentPath.split("/").length>1){var n=r.a.currentPath.split("/")[1];this.version=this.versions.find((function(e){return e.id===n})),this.teste="TESTE",this.versionForm.get("version").setValue(this.version.id)}this.version?(this.langPrefix="DOC."+this.version.id+".",this.checkIfNeedExpandSubmenus(this.version.menu)):console.log("Version not found!")},n.prototype.onDestroy=function(){this.cancelListeners.forEach((function(e){return e()}))},n=v([Object(u.b)({template:t(91),style:t(92)}),p("design:paramtypes",[o.a,l.a,s.a,c.a])],n)}(u.a)},82:function(e,n,t){"use strict";t.d(n,"a",(function(){return i.a})),t.d(n,"b",(function(){return r}));var i=t(37),u=(t(14),t(0)),r=function(){function e(){}return e.min=function(e){return function(n){return!Object(u.isNullOrUndefined)(null==n?void 0:n.value)&&""!==n.value&&n.value<e?{min:e}:{min:!1}}},e.max=function(e){return function(n){return!Object(u.isNullOrUndefined)(null==n?void 0:n.value)&&""!==n.value&&n.value>e?{max:e}:{max:!1}}},e.minLength=function(e){return function(n){var t;return{minLength:(null!==(t=null==n?void 0:n.value)&&void 0!==t?t:"").toString().length<e&&e}}},e.maxLength=function(e){return function(n){var t;return{maxLength:(null!==(t=null==n?void 0:n.value)&&void 0!==t?t:"").toString().length>e&&e}}},e.minChecked=function(e){return function(n){var t;return{minChecked:(null!==(t=null==n?void 0:n.value)&&void 0!==t?t:[]).length<e&&e}}},e.maxChecked=function(e){return function(n){var t;return{maxChecked:(null!==(t=null==n?void 0:n.value)&&void 0!==t?t:[]).length>e&&e}}},e.pattern=function(e){var n="string"==typeof e?new RegExp(e):e;return function(e){return!e.value||Object(u.isNullOrUndefined)(e.value)||n.test(e.value)?{pattern:!1}:{pattern:!0}}},e.required=function(e){return Object(u.isNullOrUndefined)(null==e?void 0:e.value)||""===(null==e?void 0:e.value)?{required:!0}:{required:!1}},e.requiredTrue=function(e){return e&&!0!==e.value?{required:!0}:{required:!1}},e.email=function(e){return!e.value||Object(u.isNullOrUndefined)(e.value)||/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.value)?{email:!1}:{email:!0}},e}()},91:function(e,n){e.exports='<div class=document-page> <div class=document-page-left [class]="{ \'menu-slided-to-right\': showMenu }"> <div class=document-page-left-header> <div class=home-header-menu-close (click)=toggleMenu()></div> <div class=header-logo> <a href="" class=d-block> <img src=assets/img/logo_white.png> </a> </div> </div> <div class=document-page-left-menu> <ul @if="version != null"> <li @for="itemMenu of version.menu"> <a @if=itemMenu.canHaveLink [href]=itemMenu.completePath (click)=onLinkClicked(itemMenu)> {{itemMenu.description}} </a> <span @if=!itemMenu.canHaveLink> {{itemMenu.description}} </span> <ul @if=itemMenu.hasSubmenu> <li @for="subitem of itemMenu.submenu" [class]="{ \'active\': isActive(subitem) }"> <a @if=subitem.canHaveLink [href]=subitem.completePath (click)=onLinkClicked(subitem)> {{subitem.description}} </a> <span @if=!subitem.canHaveLink (click)=onLinkClicked(subitem)> {{subitem.description}} </span> <ul @if="subitem.hasSubmenu && subitem.submenuExpanded"> <li @for="subSubitem of subitem.submenu" [class]="{ \'active\': isActive(subSubitem) }"> <a [href]=subSubitem.completePath (click)=onLinkClicked(subSubitem)> {{subSubitem.description}} </a> <ul @if="subSubitem.hasSubmenu && subSubitem.submenuExpanded"> <li @for="subSubSubitem of subSubitem.submenu" [class]="{ \'active\': isActive(subSubSubitem) }"> <a [href]=subSubSubitem.completePath (click)=onLinkClicked(subSubSubitem)> {{subSubSubitem.description}} </a> </li> </ul> </li> </ul> </li> </ul> </li> </ul> </div> </div> <div class=document-page-left-menu-backdrop (click)=toggleMenu()></div> <div class=document-page-right> <div class=document-page-right-header> <div class="d-table-cell align-middle"> <div class=document-page-toggle-menu (click)=toggleMenu()> <span></span> </div> <div class=header-logo> <a href=""> </a> </div> <div class=version-select> <form [form]=versionForm> <label class="mr-1 mb-0">Version: </label> <select form-field-name=version> <option @for="version of versions" [value]=version.id> {{version.name}} </option> </select> </form> </div> </div> <div class="d-table-cell align-middle text-right"> <div class=document-page-search> <i class=material-icons title="{{lang.get(\'HOME.HEADER.SEARCH\')}}" role=button (click)=openSearch()> search </i> </div> <div class=document-page-lang> <span (click)=toggleLanguageDrop()> <img src=assets/img/langs/{{lang.currentLang}}.png alt={{lang.currentLang}} /> </span> <div @if=languageDrop class="document-page-lang-options fadeIn"> <ul> <li (click)="lang.setCurrentLang(\'pt-BR\')"> <img src=assets/img/langs/pt-BR.png alt=pt-BR /> <span>{{lang.get(\'HOME.HEADER.LANGUAGES.PT_BR\')}}</span> </li> <li (click)="lang.setCurrentLang(\'en-US\')"> <img src=assets/img/langs/en-US.png alt=en-US /> <span>{{lang.get(\'HOME.HEADER.LANGUAGES.EN_US\')}}</span> </li> </ul> </div> </div> </div> </div> <div class=document-page-right-content> <nimble-router class=document-page-content-inner></nimble-router> </div> </div> </div>'},92:function(e,n,t){}}]);