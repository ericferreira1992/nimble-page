(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{132:function(t,e,n){"use strict";n.r(e),n.d(e,"RootPage",(function(){return d}));var i,r=n(89),o=n(90),a=n(26),c=n(42),u=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},l=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(t,e,n,i){return new(n||(n=Promise))((function(r,o){function a(t){try{u(i.next(t))}catch(t){o(t)}}function c(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((i=i.apply(t,e||[])).next())}))},p=function(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},d=function(t){function e(e,n){var i=t.call(this)||this;return i.nimbleService=e,i.lang=n,i.loadingRoute=!0,i.initialized=!1,i.cancelListeners=[],i}return u(e,t),e.prototype.onInit=function(){return f(this,void 0,void 0,(function(){var t=this;return p(this,(function(e){switch(e.label){case 0:return[4,this.lang.loadingLanguage()];case 1:return e.sent(),this.nimbleService.prapreMenu(),this.loadingRoute=!1,this.initialized=!0,this.cancelListeners=[o.a.addListener("STARTED_CHANGE",(function(){t.render((function(){t.loadingRoute=!0}))})),o.a.addListener(["FINISHED_CHANGE","CHANGE_REJECTED","CHANGE_ERROR"],(function(){t.render((function(){t.loadingRoute=!1,t.initialized=!0}))}))],[2]}}))}))},e.prototype.onExit=function(){this.cancelListeners.forEach((function(t){return t()}))},e=s([Object(r.b)({template:n(92),style:n(93),title:"Nimble Framework",meta:{description:"Nimble framework page and documentation",keywords:"nimble, nb, framework",og:{url:"https://ericferreira1992.github.io/nimble-page",image:"https://ericferreira1992.github.io/nimble-page/assets/img/nimble_icon.png",imageWidth:"100",imageHeight:"100",imageType:"image/png",type:"webiste"}}}),l("design:paramtypes",[c.a,a.a])],e)}(r.a)},89:function(t,e,n){"use strict";n.d(e,"a",(function(){return i.a})),n.d(e,"b",(function(){return u}));var i=n(20),r=function(t){Object.assign(this,t)},o=function(t){this.description="",this.keywords="",this.og={},Object.assign(this,t),this.og&&(this.og=new r(this.og))},a=function(t){this.template="",this.style="",this.title="",this.meta={},Object.assign(this,t),this.meta&&(this.meta=new o(this.meta))},c=n(2);n(21);function u(t){return function(e){return t=new a(t),Object.assign(e.prototype,t),Reflect.defineMetadata(c.a,!0,e),e}}},90:function(t,e,n){"use strict";n.d(e,"a",(function(){return i.a}));n(1),n(40);var i=n(3);n(39)},92:function(t,e){t.exports='<div class=root-page> <div @if="!initialized || loadingRoute" class="root-loading animated fadeIn"> </div> <nimble-router @if=initialized class="root-content animated fadeIn"></nimble-router> </div>'},93:function(t,e,n){}}]);