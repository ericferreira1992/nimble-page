(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{21:function(t,n){t.exports='<div class=root-page> <div @if="loadingDictionary || loadingRoute" class="root-loading animated fadeIn"> </div> <nimble-router @if=!loadingDictionary class="root-content animated fadeIn"></nimble-router> </div>'},22:function(t,n,e){},41:function(t,n,e){"use strict";e.r(n),e.d(n,"RootPage",(function(){return l}));var o,i=e(1),r=e(4),c=e(5),a=(o=function(t,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),f=function(t,n,e,o){var i,r=arguments.length,c=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,n,e,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(n,e,c):i(n,e))||c);return r>3&&c&&Object.defineProperty(n,e,c),c},u=function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},l=function(t){function n(n,e){var o=t.call(this)||this;return o.nimbleService=n,o.lang=e,o.loadingDictionary=!0,o.loadingRoute=!0,o.cancelListeners=[],o}return a(n,t),n.prototype.onEnter=function(){var t=this;this.cancelListeners=[i.i.addListener("STARTED_CHANGE",(function(){t.render((function(){t.loadingRoute=!0}))})),i.i.addListener(["FINISHED_CHANGE","CHANGE_REJECTED","CHANGE_ERROR"],(function(){t.render((function(){t.loadingRoute=!1}))}))],this.lang.loadingLanguage().then((function(){t.render((function(){t.loadingDictionary=!1}))}))},n.prototype.onInit=function(){this.nimbleService.prapreMenu()},n.prototype.onExit=function(){this.cancelListeners.forEach((function(t){return t()}))},n=f([Object(i.f)({template:e(21),style:e(22)}),u("design:paramtypes",[c.a,r.a])],n)}(i.e)}}]);