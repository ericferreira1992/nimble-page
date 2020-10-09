(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{122:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(21);Object.defineProperty(t,"Page",{enumerable:!0,get:function(){return n.Page}});var a=s(123);Object.defineProperty(t,"PreparePage",{enumerable:!0,get:function(){return a.PreparePage}})},123:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PreparePage=void 0;const n=s(124),a=s(1);s(8),t.PreparePage=function(e){return function(t){return e=new n.PageConfig(e),Object.assign(t.prototype,e),Reflect.defineMetadata(a.INJECTABLE_METADATA_KEY,!0,t),t}}},124:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageConfig=void 0;const n=s(125);t.PageConfig=class{constructor(e){this.template="",this.style="",this.title="",this.meta={},Object.assign(this,e),this.meta&&(this.meta=new n.MetaConfig(this.meta))}}},125:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MetaConfig=void 0;const n=s(126);t.MetaConfig=class{constructor(e){this.description="",this.keywords="",this.og={},Object.assign(this,e),this.og&&(this.og=new n.OpenGraphConfig(this.og))}}},126:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OpenGraphConfig=void 0;t.OpenGraphConfig=class{constructor(e){Object.assign(this,e)}}},148:function(e,t){e.exports="<div class=doc-1x-get-started-page> <h1> {{getText('TITLE')}} </h1> <section class=mb-1> <h4> <a href=#what-is-nimble name=what-is-nimble> {{getText('WHAT_IS_NIMBLE.TITLE')}} </a> </h4> <p class=\"text-justify mb-3\"> {{getText('WHAT_IS_NIMBLE.TEXT_1')}} </p> <p class=\"text-justify mb-3\"> {{getText('WHAT_IS_NIMBLE.TEXT_2')}} </p> <p class=text-justify> {{getText('WHAT_IS_NIMBLE.TEXT_3')}} </p> <img class=\"m-auto d-block pt-3\" src=assets/img/doc-1x/routes_1.png alt=\"Nimble routes\" style=max-width:758px;width:100%;height:auto /> </section> <section class=mb-3> <h4 class=\"mt-2 mb-3\"> <a href=#first-steps name=first-steps> {{getText('FIRST_STEPS.TITLE')}} </a> <span> <a href=doc/1x/essentials/get-started#install-cli> ({{lang.get('GLOBAL.INSTALL')}}) </a> </span> </h4> <p class=mb-4> <span [html]=\"getText('FIRST_STEPS.TEXT')\"></span> <a href=doc/1x/essentials/get-started#install-cli> {{lang.get('GLOBAL.HERE')}}. </a> </p> <section class=mt-4> <h4 class=mb-3> <a href=#rendering-a-simple-page name=rendering-a-simple-page> {{getText('FIRST_STEPS.RENDERING_A_SIMPLE_PAGE.TITLE')}} </a> </h4> <p class=mb-0> <span class=font-weight-bold>01</span> <span [html]=\"'- ' +\n                    getText('FIRST_STEPS.RENDERING_A_SIMPLE_PAGE.TEXT_01')\"></span> </p> <pre class=language-shell>\n                <code>\n$ nb\n> Select what do you want: <span style=color:#0ff>Generate</span>\n> Which what do you want to generate? <span style=color:#0ff>Page</span>\n> What is path and name? (ex.: pages/home) <span style=color:#0ff> pages/my-first</span>\n<span style=color:#8fbc8f>CREATED:</span> src/app/pages/my-first/my-first.page.html\n<span style=color:#8fbc8f>CREATED:</span> src/app/pages/my-first/my-first.page.scss\n<span style=color:#8fbc8f>CREATED:</span> src/app/pages/my-first/my-first.page.ts\n                </code>\n            </pre> <p class=\"mb-0 mt-1\"> <span class=font-weight-bold>02</span> <span [html]=\"'- ' +\n                    getText('FIRST_STEPS.RENDERING_A_SIMPLE_PAGE.TEXT_02')\"></span> </p> <pre>\n                <code class=language-javascript>\nimport { RouteBase } from '@nimble-ts/core/route';\n\nexport const ROUTES: RouteBase[] = [\n    {\n        path: 'my-first',\n        page: () => import('./pages/my-first/my-first.page').then(x => x.MyFirstPage)\n    }\n]\n                </code>\n            </pre> <p class=\"mb-0 mt-1\"> <span class=font-weight-bold>03</span> - {{getText('FIRST_STEPS.RENDERING_A_SIMPLE_PAGE.TEXT_03')}} </p> <pre>\n                <code class=language-html>\n&lt;div class=\"my-first-page\"&gt;\n    My first &lt;span class=\"purple\"&gt;Nimble&lt;/span&gt; page :)\n&lt;/div&gt;\n                </code>\n            </pre> <p class=\"mb-0 mt-1\"> <span class=font-weight-bold>04</span> - {{getText('FIRST_STEPS.RENDERING_A_SIMPLE_PAGE.TEXT_04')}} </p> <pre>\n                <code class=language-css>\n.my-first-page {\n    .purple {\n        color: purple;\n    }\n}\n                </code>\n            </pre> <p class=\"mb-0 mt-1\"> <span class=font-weight-bold>05</span> - {{getText('FIRST_STEPS.RENDERING_A_SIMPLE_PAGE.TEXT_05')}} </p> <pre>\n                <code class=language-javascript>\nimport { Page, PreparePage } from '@nimble-ts/core/page';\n\n@PreparePage({\n    template: require('./my-first.page.html'),\n    style: require('./my-first.page.scss')\n})\nexport class MyFirstPage extends Page {\n\n    constructor() {\n        super();\n    }\n\n}\n                </code>\n            </pre> <p class=mb-0> <span class=font-weight-bold>05</span> .1 - <span [html]=\"getText('FIRST_STEPS.RENDERING_A_SIMPLE_PAGE.TEXT_05_01')\"></span> </p> <pre class=language-shell>\n                <code>\n$ nb serve\n\n❯ <strong class=\"pl-2 pr-2\">Nimble</strong> project is running at <span style=color:#ff0>http://0.0.0.0:8090/</span> <span style=color:gray>(open in your browser)</span>\n❯ Environment from: <span style=color:#ff0>src/environments/env.local</span>\n\n<span style=color:#0ff>❯ Await, starting the server...</span>\n                </code>\n            </pre> <p class=mb-0> <span class=font-weight-bold>05</span> .2 - <span [html]=\"getText('FIRST_STEPS.RENDERING_A_SIMPLE_PAGE.TEXT_05_02')\"></span> </p><div class=\"browser-template mt-3\"> <header> <div class=header-close>fiber_manual_record</div> <div class=header-url> <span>http://localhost:8090/my-first</span> </div> </header> <section [html]=FIRST_STEPS_RENDERING_A_SIMPLE_PAGE_TEXT_05_02_HTML_RESULT> </section> </div> <p></p> </section> </section> <section class=mt-5> <h4 class=\"mt-5 mb-3\"> <a href=#declarative-render name=declarative-render> {{getText('DECLARATIVE_RENDER.TITLE')}} </a> </h4> <p class=mb-4> {{getText('DECLARATIVE_RENDER.TEXT')}} </p> <section> <p class=mb-0> <span class=font-weight-bold>01</span> - {{getText('DECLARATIVE_RENDER.USING_INTERPOLATION_TO_PRINT.TEXT_01')}} </p> <pre>\n                <code class=language-javascript>\nimport { Page, PreparePage } from '@nimble-ts/core/page';\n\n@PreparePage({ ... })\nexport class MyFirstPage extends Page {\n\n    public myDynamicText: string = 'Eric';\n\n    constructor() {\n        super();\n    }\n\n}\n                </code>\n            </pre> <p class=mb-0> <span class=font-weight-bold>02</span> - {{getText('DECLARATIVE_RENDER.USING_INTERPOLATION_TO_PRINT.TEXT_02')}} </p> <pre>\n                <code class=language-html [content]=DECLARATIVE_RENDER_USING_INTERPOLATION_TO_PRINT_HTML>\n                </code>\n            </pre> <p class=mb-0> <span class=font-weight-bold>03</span> - {{getText('DECLARATIVE_RENDER.USING_INTERPOLATION_TO_PRINT.TEXT_03')}} </p><div class=\"browser-template mt-3\"> <header> <div class=header-close>fiber_manual_record</div> <div class=header-url> <span>http://localhost:8090/my-first</span> </div> </header> <section> Hello Eric :) </section> </div> <p></p> </section> <section class=mt-5> <h4 class=\"mt-5 mb-3\"> <a href=#notification-to-update-page name=notification-to-update-page> {{getText('DECLARATIVE_RENDER.NOTIFICATION_TO_RERENDER.TITLE')}} </a> </h4> <p class=mb-4> <span [html]=\"getText('DECLARATIVE_RENDER.NOTIFICATION_TO_RERENDER.TEXT_01_1')\"></span> <br><br> <span [html]=\"getText('DECLARATIVE_RENDER.NOTIFICATION_TO_RERENDER.TEXT_01_2')\"></span> </p> <section> <p class=mb-0> <span class=font-weight-bold>01</span> - <span [html]=\"getText('DECLARATIVE_RENDER.NOTIFICATION_TO_RERENDER.TEXT_02')\"></span> </p> <pre>\n                    <code class=language-javascript>\nimport { Page, PreparePage } from '@nimble-ts/core/page';\n\n@PreparePage({ ... })\nexport class MyFirstPage extends Page {\n\n    private timer: any;\n    public seconds: number = 0;\n\n    constructor() {\n        super();\n    }\n\n    onInit() {\n        this.timer = setInterval(() => {\n            this.seconds += 1;\n            this.render();\n        }, 1000);\n    }\n\n    onDestroy() {\n        clearInterval(this.timer);\n    }\n\n}\n                    </code>\n                </pre> <p class=mb-0> <span class=font-weight-bold>02</span> - {{getText('DECLARATIVE_RENDER.NOTIFICATION_TO_RERENDER.TEXT_03')}} </p> <pre>\n                    <code class=language-html [content]=DECLARATIVE_RENDER_NOTIFICATION_TO_RERENDER_HTML>\n                    </code>\n                </pre> <p class=mb-0> <span class=font-weight-bold>03</span> - {{getText('DECLARATIVE_RENDER.NOTIFICATION_TO_RERENDER.TEXT_04_1')}} </p><div class=\"browser-template mt-3\"> <header> <div class=header-close>fiber_manual_record</div> <div class=header-url> <span>http://localhost:8090/my-first</span> </div> </header> <section> {{getText('DECLARATIVE_RENDER.NOTIFICATION_TO_RERENDER.TEXT_04_2')}} {{DECLARATIVE_RENDER_NOTIFICATION_TO_RERENDER_TIMER_VALUE}} {{getText('DECLARATIVE_RENDER.NOTIFICATION_TO_RERENDER.TEXT_04_3')}} </section> </div> <p></p> </section> </section> </section> <section class=mt-5> <h4 class=mt-5> <a href=#condition-and-loops name=condition-and-loops> {{getText('CONDITION_AND_LOOPS.TITLE')}} </a> </h4> <p> {{getText('CONDITION_AND_LOOPS.TEXT')}} </p> <section> <h4 class=\"mt-1 mb-3\"> <a href=#hide-and-show-elements name=hide-and-show-elements> {{getText('CONDITION_AND_LOOPS.IF_DIRECTIVE.TITLE')}} </a> </h4> <p class=mb-4 [html]=\"getText('CONDITION_AND_LOOPS.IF_DIRECTIVE.TEXT_01')\"></p> <section> <p class=mb-0> <span class=font-weight-bold>01</span> - <span [html]=\"getText('CONDITION_AND_LOOPS.IF_DIRECTIVE.TEXT_02')\"></span> </p> <pre>\n                    <code class=language-javascript>\nimport { Page, PreparePage } from '@nimble-ts/core/page';\n\n@PreparePage({ ... })\nexport class MyFirstPage extends Page {\n\n    public show: boolean = true;\n\n    constructor() {\n        super();\n    }\n\n    public toggleMsg() {\n        this.render(() => {\n            this.show = !this.show;\n        });\n    }\n\n}\n                    </code>\n                </pre> <p class=\"mt-2 mb-0\"> <span class=font-weight-bold>02</span> - {{getText('CONDITION_AND_LOOPS.IF_DIRECTIVE.TEXT_03_1')}} </p> <pre>\n                    <code class=language-html [content]=CONDITION_AND_LOOPS_IF_DIRECTIVE_HTML>\n                    </code>\n                </pre> <p class=\"mt-2 mb-0\"> <span class=font-weight-bold>03</span> - {{getText('CONDITION_AND_LOOPS.IF_DIRECTIVE.TEXT_04')}} </p><div class=\"browser-template mt-3\"> <header> <div class=header-close>fiber_manual_record</div> <div class=header-url> <span>http://localhost:8090/my-first</span> </div> </header> <section> <p @if=CONDITION_AND_LOOPS_IF_DIRECTIVE_SHOW>{{getText('CONDITION_AND_LOOPS.IF_DIRECTIVE.TEXT_03_2')}}</p> <p @if=!CONDITION_AND_LOOPS_IF_DIRECTIVE_SHOW>{{getText('CONDITION_AND_LOOPS.IF_DIRECTIVE.TEXT_03_3')}}</p> <button (click)=CONDITION_AND_LOOPS_IF_DIRECTIVE_TOGGLE_SHOW()> {{lang.get('GLOBAL.TOGGLE')}} </button> </section> </div> <p></p> </section> </section> <section class=mt-5> <h4 class=\"mt-5 mb-3\"> <a href=#show-list-elements name=show-list-elements> {{getText('CONDITION_AND_LOOPS.FOR_DIRECTIVE.TITLE')}} </a> </h4> <p class=mb-4 [html]=\"getText('CONDITION_AND_LOOPS.FOR_DIRECTIVE.TEXT_01')\"></p> <section> <p class=mb-0> <span class=font-weight-bold>01</span> - <span [html]=\"getText('CONDITION_AND_LOOPS.FOR_DIRECTIVE.TEXT_02')\"></span> </p> <pre>\n                    <code class=language-javascript>\nimport { Page, PreparePage } from '@nimble-ts/core/page';\n\n@PreparePage({ ... })\nexport class MyFirstPage extends Page {\n\n    public menuItems: string[] = [\n        'Home',\n        'About',\n        'Business',\n        'Contact'\n    ];\n\n    constructor() {\n        super();\n    }\n\n}\n                    </code>\n                </pre> <p class=\"mb-0 mt-1\"> <span class=font-weight-bold>02</span> - <span [html]=\"getText('CONDITION_AND_LOOPS.FOR_DIRECTIVE.TEXT_03_1')\"></span> </p> <pre>\n                    <code class=language-html [content]=CONDITION_AND_LOOPS_FOR_DIRECTIVE_HTML>\n                    </code>\n                </pre> <p class=mb-0> <span class=font-weight-bold>03</span> - {{getText('CONDITION_AND_LOOPS.FOR_DIRECTIVE.TEXT_04')}} </p><div class=\"browser-template mt-3\"> <header> <div class=header-close>fiber_manual_record</div> <div class=header-url> <span>http://localhost:8090/my-first</span> </div> </header> <section> <ul class=\"mb-0 pl-3\"> <li>Home</li> <li>About</li> <li>Business</li> <li>Contact</li> </ul> </section> </div> <p></p> </section> </section> </section> </div>"},149:function(e,t,s){},52:function(e,t,s){"use strict";s.r(t),s.d(t,"Doc1xIntroductionPage",(function(){return o}));var n=s(122),a=s(12),r=function(e,t,s,n){var a,r=arguments.length,T=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(e,t,s,n);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(T=(r<3?a(T):r>3?a(t,s,T):a(t,s))||T);return r>3&&T&&Object.defineProperty(t,s,T),T},T=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends n.Page{constructor(e){super(),this.lang=e,this.DECLARATIVE_RENDER_NOTIFICATION_TO_RERENDER_TIMER_VALUE=0,this.CONDITION_AND_LOOPS_IF_DIRECTIVE_SHOW=!0}get FIRST_STEPS_RENDERING_A_SIMPLE_PAGE_TEXT_05_02_HTML_RESULT(){return this.getText("FIRST_STEPS.RENDERING_A_SIMPLE_PAGE.TEXT_05_02_HTML_RESULT")}get DECLARATIVE_RENDER_USING_INTERPOLATION_TO_PRINT_HTML(){return'\n<div class="my-first-page">\n    Hello {{myDynamicText}} :)\n</div>\n '}get DECLARATIVE_RENDER_NOTIFICATION_TO_RERENDER_HTML(){return`\n<div class="my-first-page">\n    ${this.getText("DECLARATIVE_RENDER.NOTIFICATION_TO_RERENDER.TEXT_04_2")} {{seconds}} ${this.getText("DECLARATIVE_RENDER.NOTIFICATION_TO_RERENDER.TEXT_04_3")}\n</div>\n `}get CONDITION_AND_LOOPS_IF_DIRECTIVE_HTML(){return`\n<div class="my-first-page">\n    <p @if="show">${this.getText("CONDITION_AND_LOOPS.IF_DIRECTIVE.TEXT_03_2")}</p>\n    <p @if="!show">${this.getText("CONDITION_AND_LOOPS.IF_DIRECTIVE.TEXT_03_3")}</p>\n    <button (click)="toggleMsg()">\n        ${this.lang.get("GLOBAL.TOGGLE")}\n    </button>\n</div>\n `}get CONDITION_AND_LOOPS_FOR_DIRECTIVE_HTML(){return'\n<div class="my-first-page">\n    <ul>\n        <li @for="item of menuItems">\n            {{item}}\n        </li>\n    </ul>\n</div>\n '}getText(e){return this.lang.get("DOC.1x.CONTENT.ESSENTIALS.INTRODUCTION."+e)}CONDITION_AND_LOOPS_IF_DIRECTIVE_TOGGLE_SHOW(){this.render(()=>{this.CONDITION_AND_LOOPS_IF_DIRECTIVE_SHOW=!this.CONDITION_AND_LOOPS_IF_DIRECTIVE_SHOW})}onInit(){this.DECLARATIVE_RENDER_NOTIFICATION_TO_RERENDER_TIMER=setInterval(()=>{this.DECLARATIVE_RENDER_NOTIFICATION_TO_RERENDER_TIMER_VALUE+=1,this.render()},1e3)}onDestroy(){clearInterval(this.DECLARATIVE_RENDER_NOTIFICATION_TO_RERENDER_TIMER)}};o=r([Object(n.PreparePage)({template:s(148),style:s(149),title:"Introduction / Document - Nimble"}),T("design:paramtypes",[a.a])],o)}}]);