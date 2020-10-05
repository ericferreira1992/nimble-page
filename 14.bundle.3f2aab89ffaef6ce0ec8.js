(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{111:function(e,t){e.exports="<div class=framework-1x-routes-page> <h1> {{getText('TITLE')}} </h1> <p class=\"text-justify mt-2\"> {{getText('TEXT_1')}} </p> <section class=mb-1> <h4> <a href=#life-clycle name=life-clycle> {{getText('LIFE_CYCLE.TITLE')}} </a> </h4> <p [html]=\"getText('LIFE_CYCLE.TEXT_1')\"></p> <section class=mt-4> <h5 class=\"border-0 mb-1 pb-1\">{{getText('LIFE_CYCLE.STEPS.TITLE')}}</h5> <p [html]=\"getText('LIFE_CYCLE.STEPS.TEXT')\"></p> <h6 class=\"border-0 mt-4 mb-1 pb-1\"> 01 - {{getText('LIFE_CYCLE.STEPS.ROUTE.TITLE')}} </h6> <p [html]=\"getText('LIFE_CYCLE.STEPS.ROUTE.TEXT')\"></p> <p class=mt-2 [html]=\"getText('LIFE_CYCLE.STEPS.ROUTE.TEXT_1')\"></p> <p class=mt-2 [html]=\"getText('LIFE_CYCLE.STEPS.ROUTE.TEXT_2')\"></p> <p class=mt-2 [html]=\"getText('LIFE_CYCLE.STEPS.ROUTE.TEXT_3')\"></p> <p class=mt-2 [html]=\"getText('LIFE_CYCLE.STEPS.ROUTE.TEXT_4')\"></p> <p class=mt-2 [html]=\"getText('LIFE_CYCLE.STEPS.ROUTE.TEXT_5')\"></p> <p class=mt-2 [html]=\"getText('LIFE_CYCLE.STEPS.ROUTE.TEXT_6')\"></p> <p class=mt-2 [html]=\"getText('LIFE_CYCLE.STEPS.ROUTE.TEXT_7')\"></p> <p class=mt-2 [html]=\"getText('LIFE_CYCLE.STEPS.ROUTE.TEXT_8')\"></p> <h6 class=\"border-0 mt-4 pt-1 mb-1 pb-1\"> 02 - {{getText('LIFE_CYCLE.STEPS.RERENDER.TITLE')}} </h6> <p [html]=\"getText('LIFE_CYCLE.STEPS.RERENDER.TEXT')\"></p> <p class=mt-2 [html]=\"getText('LIFE_CYCLE.STEPS.RERENDER.TEXT_1')\"></p> <p class=mt-2 [html]=\"getText('LIFE_CYCLE.STEPS.RERENDER.TEXT_2')\"></p> </section> <section class=mt-4> <h5 class=\"border-0 mb-1 pb-1\">{{getText('LIFE_CYCLE.LISTENER.TITLE')}}</h5> <p [html]=\"getText('LIFE_CYCLE.LISTENER.TEXT_1')\"></p> <p class=mt-2 [html]=\"getText('LIFE_CYCLE.LISTENER.TEXT_2')\"></p> <p class=mt-2 [html]=\"getText('LIFE_CYCLE.LISTENER.TEXT_3')\"></p> <pre>\n                <code class=language-javascript>\nimport { Page, PreparePage } from '@nimble-ts/core/page';\nimport { Router } from '@nimble-ts/core/route';\n\n@PreparePage({\n    style: require('./root.page.scss'),\n    template: `\n    &lt;div class=\"root-page\"&gt;\n        &lt;div @if=\"loading\"&gt;Carregando...&lt;/div&gt;\n        &lt;nimble-router&gt;&lt;/nimble-router&gt;\n    &lt;/div&gt;`\n})\nexport class RootPage extends Page {\n\n    public loading: boolean = true;\n    public fnCancelStart: () => void;\n    public fnCancelFinished: () => void;\n\n    constructor() {\n        super();\n    }\n\n    public onEnter() {\n        this.fnCancelStart = Router.addListener('STARTED_CHANGE', () => {\n            this.render(() => {\n                this.loading = true;\n            });\n        });\n        this.fnCancelFinished = Router.addListener(['FINISHED_CHANGE', 'CHANGE_REJECTED', 'CHANGE_ERROR'], () => {\n            this.render(() => {\n                this.loading = false;\n            });\n        });\n    }\n    \n    public onExit() {\n        this.fnCancelStart();\n        this.fnCancelFinished();\n    }\n}\n                </code>\n            </pre> </section> </section> <section class=mb-1> <h4> <a href=#structure name=structure> {{getText('STRUCTURE.TITLE')}} </a> </h4> <p [html]=\"getText('STRUCTURE.TEXT_1')\"></p> <pre>\n            <code class=language-javascript>\nexport class RouteBase {\n    // {{getText('STRUCTURE.PROPERTIES.PATH')}}\n    public path: string;\n    \n    // {{getText('STRUCTURE.PROPERTIES.PAGE')}}\n    public page?: () => Promise | Type&lt;Page&gt; | string;\n    \n    // {{getText('STRUCTURE.PROPERTIES.CHILDREN')}}\n    public children?: RouteBase[];\n    \n    // {{getText('STRUCTURE.PROPERTIES.DATA')}}\n    public data?: { [key: string]: any };\n    \n    // {{getText('STRUCTURE.PROPERTIES.REDIRECT')}}\n    public redirect?: string;\n\n    // {{getText('STRUCTURE.PROPERTIES.GUARD')}}\n    public guard?: Type&lt;ActivateRoute&gt;[];\n}\n            </code>\n        </pre> </section> <section class=mb-1> <h4> <a href=#cases name=cases> {{getText('CASES.TITLE')}} </a> </h4> <p class=mb-3 [html]=\"getText('CASES.TEXT_1')\"></p> <p class=mb-5> <span [html]=\"getText('CASES.TEXT_2')\"></span> <a href=doc/1x/cli/commands#generate-page>{{lang.get('GLOBAL.HERE')}}</a>. </p> <section class=mt-2> <h5 class=\"border-0 mb-1 pb-1\">{{getText('CASES.CASE_1.TITLE')}}</h5> <p [html]=\"getText('CASES.CASE_1.TEXT')\"></p> <pre>\n                <code class=language-javascript>\nexport const ROUTES: RouteBase[] = [\n    {\n        path: 'home',\n        page: () => import('./pages/home/home.page').then(x => x.HomePage)\n    }\n]\n                </code>\n            </pre> </section> <section class=mt-3> <h5 class=\"border-0 mb-1 pb-1\">{{getText('CASES.CASE_2.TITLE')}}</h5> <p [html]=\"getText('CASES.CASE_2.TEXT_1')\"></p> <p [html]=\"getText('CASES.CASE_2.TEXT_2')\"></p> <pre>\n                <code class=language-javascript>\nexport const ROUTES: RouteBase[] = [\n    {\n        path: '',\n        page: () => import('./pages/root/root.page').then(x => x.RootPage)\n        children: [\n            {\n                path: '',\n                page: () => import('./pages/home/home.page').then(x => x.HomePage)\n            },\n            {\n                path: 'about-us',\n                page: () => import('./pages/about-us/about-us.page').then(x => x.AboutUsPage)\n            }\n        ]\n    }\n]\n                </code>\n            </pre> </section> <section class=mt-3> <h5 class=\"border-0 mb-1 pb-1\">{{getText('CASES.CASE_3.TITLE')}}</h5> <p [html]=\"getText('CASES.CASE_3.TEXT')\"></p> <pre>\n                <code class=language-javascript>\nexport const ROUTES: RouteBase[] = [\n    {\n        path: '',\n        page: () => import('./pages/home/home.page').then(x => x.HomePage)\n    },\n    {\n        path: 'about-us',\n        page: () => import('./pages/about-us/about-us.page').then(x => x.AboutUsPage)\n    },\n    {\n        path: 'admin',\n        page: () => import('./pages/admin-root/admin-root.page').then(x => x.AdminRootPage)\n        children: [\n            {\n                path: 'login',\n                page: () => import('./pages/admin-login/admin-login.page').then(x => x.AdminLoginPage)\n            },\n            {\n                path: 'dashboard',\n                page: () => import('./pages/admin-dashboard/admin-dashboard.page').then(x => x.AdminDashboardPage)\n            },\n        ]\n    }\n]\n</code>\n            </pre> <h6 class=\"border-0 mb-1 pb-1\">{{getText('CASES.CASE_3.ATTENTION.TITLE')}}</h6> <p [html]=\"getText('CASES.CASE_3.ATTENTION.TEXT')\"></p> <pre>\n                <code class=language-html>\n&lt;div class=\"root-admin-page\"&gt;\n    &lt;nimble-router&gt;&lt;/nimble-router&gt;\n&lt;/div&gt;\n                </code>\n            </pre> </section> <section class=mt-2> <h5 class=\"border-0 mb-1 pb-1\">{{getText('CASES.CASE_4.TITLE')}}</h5> <p [html]=\"getText('CASES.CASE_4.TEXT')\"></p> <pre>\n                <code class=language-javascript>\nexport const ROUTES: RouteBase[] = [\n    { path: 'old-route', redirect: '/new-route' },\n    {\n        path: 'new-route',\n        page: () => import('./pages/home/home.page').then(x => x.HomePage)\n    },\n]\n                </code>\n            </pre> </section> <section class=mt-2> <h5 class=\"border-0 mb-1 pb-1\">{{getText('CASES.CASE_5.TITLE')}}</h5> <p [html]=\"getText('CASES.CASE_5.TEXT')\"></p> <pre>\n                <code class=language-javascript>\nexport const ROUTES: RouteBase[] = [\n    {\n        path: 'not-found',\n        page: () => import('./pages/not-found/not-found.page').then(x => x.NotFoundPage)\n    },\n    { path: '**', redirect: '/not-found' },\n]\n                </code>\n            </pre> </section> </section> <section class=mb-1> <h4> <a href=#data name=data> {{getText('DATA.TITLE')}} </a> </h4> <p class=mb-5 [html]=\"getText('DATA.TEXT')\"></p> <h5 class=\"border-0 mb-1 pb-1\">{{getText('DATA.STEP_1.TITLE')}}</h5> <p [html]=\"getText('DATA.STEP_1.TEXT')\"></p> <pre>\n            <code class=language-javascript>\nexport const ROUTES: RouteBase[] = [\n    {\n        path: 'example01',\n        page: () => import('./pages/example/example.page').then(x => x.ExamplePage),\n        data: { myData: 'Hello example 1' }\n    },\n    {\n        path: 'example02',\n        page: () => import('./pages/example/example.page').then(x => x.ExamplePage),\n        data: { myData: 'Hello example 2' }\n    }\n]\n            </code>\n        </pre> <h5 class=\"border-0 mb-1 pb-1\">{{getText('DATA.STEP_2.TITLE')}}</h5> <p [html]=\"getText('DATA.STEP_2.TEXT')\"></p> <pre>\n            <code class=language-javascript>\nimport { Page, PreparePage } from '@nimble-ts/core/page';\nimport { RouteParams } from '@nimble-ts/core/providers/route-params';\n\n@PreparePage({\n    template: require('./example.page.html'),\n    style: require('./example.page.scss')\n})\nexport class ExamplePage extends Page {\n\n    constructor(\n        private routeParams: RouteParams\n    ) {\n        super();\n    }\n\n    public onInit() {\n        let myData = this.routeParams.data.myData;\n        console.log(myData);\n    }\n\n}\n            </code>\n        </pre> </section> <section class=mb-1> <h4> <a href=#parameters name=parameters> {{getText('PARAMETERS.TITLE')}} </a> </h4> <p class=mb-5 [html]=\"getText('PARAMETERS.TEXT')\"></p> <h5 class=\"border-0 mb-1 pb-1\">{{getText('PARAMETERS.STEP_1.TITLE')}}</h5> <p [html]=\"getText('PARAMETERS.STEP_1.TEXT')\"></p> <pre>\n            <code class=language-javascript>\nexport const ROUTES: RouteBase[] = [\n    {\n        path: 'articles',\n        page: () => import('./pages/articles/articles.page').then(x => x.ArticlesPage)\n    },\n    {\n        path: 'articles/{id}',\n        page: () => import('./pages/article/article.page').then(x => x.ArticlePage),\n    }\n]\n            </code>\n        </pre> <h5 class=\"border-0 mb-1 pb-1\">{{getText('PARAMETERS.STEP_2.TITLE')}}</h5> <p [html]=\"getText('PARAMETERS.STEP_2.TEXT')\"></p> <pre>\n            <code class=language-javascript>\nmport { Page, PreparePage } from '@nimble-ts/core/page';\nimport { RouteParams } from '@nimble-ts/core/providers/route-params';\n\n@PreparePage({\n    template: require('./article.page.html'),\n    style: require('./article.page.scss')\n})\nexport class ArticlePage extends Page {\n\n    constructor(\n        private routeParams: RouteParams\n    ) {\n        super();\n    }\n\n    public onInit() {\n        let articleId = this.routeParams.params.id;\n        console.log(articleId);\n    }\n\n}\n            </code>\n        </pre> </section> <section class=mb-1> <h4> <a href=#guard name=guard> {{getText('GUARD.TITLE')}} </a> </h4> <p class=mb-3 [html]=\"getText('GUARD.TEXT_1')\"></p> <p class=mb-3 [html]=\"getText('GUARD.TEXT_2')\"></p> <p class=mb-5> <span [html]=\"getText('GUARD.TEXT_3')\"></span> <a href=doc/1x/cli/commands#generate-guard>{{lang.get('GLOBAL.HERE')}}</a>. </p> <section class=mt-2> <h5 class=\"border-0 mb-1 pb-1\">{{getText('GUARD.STEP_1.TITLE')}}</h5> <p [html]=\"getText('GUARD.STEP_1.TEXT')\"></p> <pre>\n                <code class=language-javascript>\nimport { RouteBase } from '@nimble-ts/core';\nimport { AuthGuard } from './route-guards/auth.guard';\n\nexport const ROUTES: RouteBase[] = [\n    {\n        path: 'login',\n        page: () => import('./pages/public/login/login.page').then(x => x.LoginPage)\n    },\n    {\n        path: 'admin',\n        guard: [AuthGuard],\n        page: () => import('./pages/admin/admin.page').then(x => x.AdminPage),\n        children: [\n            {\n                path: 'dashboard',\n                page: () => import('./pages/admin/dashboard/dashboard.page').then(x => x.DashboardPage)\n            },\n            {\n                path: 'users',\n                page: () => import('./pages/admin/users/users.page').then(x => x.UsersPage)\n            }         \n        ]\n    }\n];\n                </code>\n            </pre> </section> <section class=mt-2> <h5 class=\"border-0 mb-1 pb-1\">{{getText('GUARD.STEP_2.TITLE')}}</h5> <p [html]=\"getText('GUARD.STEP_2.TEXT')\"></p> <pre>\n                <code class=language-javascript>\nimport { RouteGuard, Route, Router } from '@nimble-ts/core/route';\nimport { Injectable } from '@nimble-ts/core/inject';\nimport { AuthService } from 'src/services/auth.service';\n\n@Injectable()\nexport class AuthGuard extends RouteGuard {\n\n    constructor(\n        private authService: AuthService\n    ){\n        super();\n    }\n\n    public doActivate(currentPath: string, nextPath: string, route: Route): boolean {\n    \n        if (nextPath !== '/login' && !this.authService.isLogged) {\n            Router.redirect('/login');\n            return false;\n        }\n\n        return true;\n    }\n}\n                </code>\n            </pre> </section> </section> </div>"},112:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t),n.d(t,"Framework1xRoutesPage",(function(){return p}));var a=n(84),s=n(24),r=function(e,t,n,a){var s,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var p=e.length-1;p>=0;p--)(s=e[p])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let p=(()=>{let e=class extends a.a{constructor(e){super(),this.lang=e}getText(e){return this.lang.get("DOC.1x.CONTENT.FRAMEWORK.ROUTES."+e)}onInit(){}onDestroy(){}};return e=r([Object(a.b)({template:n(111),style:n(112),title:"Routes / Document - Nimble"}),o("design:paramtypes",[s.a])],e),e})()},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return a.a})),n.d(t,"b",(function(){return T}));var a=n(19);class s{constructor(e){Object.assign(this,e)}}class r{constructor(e){this.description="",this.keywords="",this.og={},Object.assign(this,e),this.og&&(this.og=new s(this.og))}}class o{constructor(e){this.template="",this.style="",this.title="",this.meta={},Object.assign(this,e),this.meta&&(this.meta=new r(this.meta))}}var p=n(3);n(20);function T(e){return function(t){return e=new o(e),Object.assign(t.prototype,e),Reflect.defineMetadata(p.a,!0,t),t}}}}]);