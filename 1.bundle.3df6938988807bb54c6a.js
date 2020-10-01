(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(21);Object.defineProperty(t,"Page",{enumerable:!0,get:function(){return a.Page}});var o=n(123);Object.defineProperty(t,"PreparePage",{enumerable:!0,get:function(){return o.PreparePage}})},123:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PreparePage=void 0;const a=n(124),o=n(1);n(8),t.PreparePage=function(e){return function(t){return e=new a.PageConfig(e),Object.assign(t.prototype,e),Reflect.defineMetadata(o.INJECTABLE_METADATA_KEY,!0,t),t}}},124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageConfig=void 0;const a=n(125);t.PageConfig=class{constructor(e){this.template="",this.style="",this.title="",this.meta={},Object.assign(this,e),this.meta&&(this.meta=new a.MetaConfig(this.meta))}}},125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MetaConfig=void 0;const a=n(126);t.MetaConfig=class{constructor(e){this.description="",this.keywords="",this.og={},Object.assign(this,e),this.og&&(this.og=new a.OpenGraphConfig(this.og))}}},126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OpenGraphConfig=void 0;t.OpenGraphConfig=class{constructor(e){Object.assign(this,e)}}},127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(48);Object.defineProperty(t,"Dialog",{enumerable:!0,get:function(){return a.Dialog}});var o=n(129);Object.defineProperty(t,"PrepareDialogConfig",{enumerable:!0,get:function(){return o.PrepareDialogConfig}});var l=n(133);Object.defineProperty(t,"DialogOpenConfig",{enumerable:!0,get:function(){return l.DialogOpenConfig}});var r=n(49);Object.defineProperty(t,"DialogBuilder",{enumerable:!0,get:function(){return r.DialogBuilder}}),Object.defineProperty(t,"DIALOG_REF",{enumerable:!0,get:function(){return r.DIALOG_REF}});var i=n(50);Object.defineProperty(t,"DialogRef",{enumerable:!0,get:function(){return i.DialogRef}});var s=n(134);Object.defineProperty(t,"PrepareDialog",{enumerable:!0,get:function(){return s.PrepareDialog}})},129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PrepareDialogConfig=void 0;t.PrepareDialogConfig=class{constructor(e){this.template="",this.style="",Object.assign(this,e)}}},133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DialogOpenConfig=void 0;t.DialogOpenConfig=class{constructor(e){Object.assign(this,e)}}},134:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PrepareDialog=void 0;const a=n(129),o=n(1);t.PrepareDialog=function(e){return function(t){return e=new a.PrepareDialogConfig(e),Object.assign(t.prototype,e),Reflect.defineMetadata(o.INJECTABLE_METADATA_KEY,!0,t),t}}},160:function(e,t){e.exports='<div class=example-dialog> <h3>Example</h3> <p>example-dialog works!</p> <p class="text-center pt-2"> <a (click)=dialogRef.close()>Fechar</a> </p> </div>'},161:function(e,t,n){},162:function(e,t){e.exports="<div class=framework-1x-dialogs-page> <h1> {{getText('TITLE')}} </h1> <p class=\"text-justify mt-2\"> {{getText('TEXT_1')}} </p> <p class=\"text-justify mt-2\"> {{getText('TEXT_2')}} <a href=doc/1x/cli/commands#generate-dialog>{{lang.get('GLOBAL.HERE')}}</a>. </p> <section class=mb-1> <h4> <a href=#structure name=structure> {{getText('STRUCTURE.TITLE')}} </a> </h4> <p class=mb-3 [html]=\"getText('STRUCTURE.TEXT_1')\"></p> <p class=mt-1 [html]=\"getText('STRUCTURE.TEXT_2')\"></p> <pre>\n            <code class=language-html>\n&lt;div class=\"example-dialog\"&gt;\n    &lt;h3&gt;Exampe&lt;/h3&gt;\n    example-dialog works!\n\n    &lt;a (click)=\"dialogRef.close()\"&gt;Fechar&lt;/a&gt;\n&lt;/div&gt;\n            </code>\n        </pre> <p class=mt-2 [html]=\"getText('STRUCTURE.TEXT_3')\"></p> <pre>\n            <code class=language-css>\n.example-dialog {\n}\n            </code>\n        </pre> <p class=mt-2 [html]=\"getText('STRUCTURE.TEXT_4')\"></p> <pre>\n            <code class=language-javascript>\nimport { Dialog, PrepareDialog, DIALOG_REF, DialogRef } from '@nimble-ts/core/dialog';\nimport { Inject } from '@nimble-ts/core/inject';\n\n@PrepareDialog({\n    template: require('./example.dialog.html'),\n    style: require('./example.dialog.scss')\n})\nexport class ExampleDialog extends Dialog {\n\n    constructor(\n        @Inject(DIALOG_REF) public dialogRef: DialogRef&lt;ExampleDialog&gt;\n    ) {\n        super();\n    }\n\n    onOpen() {\n    }\n\n    onClose() {\n    }\n}\n            </code>\n        </pre> <h6 class=\"mt-2 mb-1 border-0\" [html]=\"getText('STRUCTURE.EXAMPLE.TITLE')\"></h6> <button class=btn (click)=openExampleDialog()> <span>{{getText('STRUCTURE.EXAMPLE.TEXT')}}</span> </button> </section> <section class=mb-1> <h4> <a href=#life-clycle name=life-clycle> {{getText('LIFE_CYCLE.TITLE')}} </a> </h4> <p [html]=\"getText('LIFE_CYCLE.TEXT_1')\"></p> <p class=mt-4 [html]=\"getText('LIFE_CYCLE.TEXT_2')\"></p> <p class=mt-2 [html]=\"getText('LIFE_CYCLE.TEXT_3')\"></p> <p class=mt-2 [html]=\"getText('LIFE_CYCLE.TEXT_4')\"></p> <p class=mt-2 [html]=\"getText('LIFE_CYCLE.TEXT_5')\"></p> </section> <section class=mb-1> <h4> <a href=#how-to-use name=how-to-use> {{getText('HOW_USE.TITLE')}} </a> </h4> <p [html]=\"getText('HOW_USE.TEXT_1')\"></p> <section class=\"mt-5 mb-1\"> <h5 class=\"border-0 mb-0\"> {{getText('HOW_USE.OPEN.TITLE')}} </h5> <p [html]=\"getText('HOW_USE.OPEN.TEXT')\"></p> <pre>\n                <code class=language-javascript>\nimport { Page, PreparePage } from '@nimble-ts/core/page';\nimport { ExampleDialog } from 'src/app/dialogs/example/example.dialog';\n\n@PreparePage({\n    template: require('./example.page.html'),\n    style: require('./example.page.scss')\n})\nexport class ExamplePage extends Page {\n\n    constructor(\n        private dialog: DialogBuilder\n    ) {\n        super();\n    }\n\n    public openMyDialog() {\n        this.dialog.open(ExampleDialog);\n    }\n}\n                </code>\n            </pre> </section> <section class=\"mt-5 mb-1\"> <h5 class=\"border-0 mb-0\"> {{getText('HOW_USE.LISTENERS.TITLE')}} </h5> <p [html]=\"getText('HOW_USE.LISTENERS.TEXT')\"></p> <pre>\n                <code class=language-javascript>\nimport { Page, PreparePage } from '@nimble-ts/core/page';\nimport { ExampleDialog } from 'src/app/dialogs/example/example.dialog';\n\n@PreparePage({\n    template: require('./example.page.html'),\n    style: require('./example.page.scss')\n})\nexport class ExamplePage extends Page {\n\n    constructor(\n        private dialog: DialogBuilder\n    ) {\n        super();\n    }\n\n    public openMyDialog() {\n        let dialogRef = this.dialog.open(ExampleDialog);\n        dialogRef.onOpen.then(() => {\n            console.log('Is opened!');       \n        });\n        dialogRef.onClose.then(() => {\n            console.log('Is closed!');       \n        });\n    }\n}\n                </code>\n            </pre> </section> <section class=\"mt-5 mb-1\"> <h5 class=\"border-0 mb-0\"> {{getText('HOW_USE.CONFIG.TITLE')}} </h5> <p [html]=\"getText('HOW_USE.CONFIG.TEXT')\"></p> <section class=mt-4> <h6 class=\"border-0 mb-0 pb-2\"> 01 - {{getText('HOW_USE.CONFIG.STEP_1.TITLE')}} </h6> <p [html]=\"getText('HOW_USE.CONFIG.STEP_1.TEXT')\"></p> <pre>\n                    <code class=language-javascript>\nexport class DialogOpenConfig {\n    // {{getText('HOW_USE.CONFIG.STEP_1.DATA')}}\n    data?: any;\n\n    // {{getText('HOW_USE.CONFIG.STEP_1.WIDTH')}}\n    width?: string;\n\n    // {{getText('HOW_USE.CONFIG.STEP_1.MAX_WIDTH')}}\n    maxWidth?: string;\n\n    // {{getText('HOW_USE.CONFIG.STEP_1.MIN_WIDTH')}}\n    minWidth?: string;\n}\n                    </code>\n                </pre> </section> <section class=mt-4> <h6 class=\"border-0 mb-0 pb-2\"> 02 - {{getText('HOW_USE.CONFIG.STEP_2.TITLE')}} </h6> <p [html]=\"getText('HOW_USE.CONFIG.STEP_2.TEXT')\"></p> <pre>\n                    <code class=language-javascript>\nimport { Page, PreparePage } from '@nimble-ts/core/page';\nimport { ExampleDialog } from 'src/app/dialogs/example/example.dialog';\n\n@PreparePage({\n    template: require('./example.page.html'),\n    style: require('./example.page.scss')\n})\nexport class ExamplePage extends Page {\n\n    constructor(\n        private dialog: DialogBuilder\n    ) {\n        super();\n    }\n\n    public openMyDialog() {\n        let dialogRef = this.dialog.open(ExampleDialog, {\n            data: 'My custom data to ExampleDialog :)'\n        });\n    }\n}\n                    </code>\n                </pre> </section> <section class=mt-4> <h6 class=\"border-0 mb-0 pb-2\"> 03 - {{getText('HOW_USE.CONFIG.STEP_3.TITLE')}} </h6> <p [html]=\"getText('HOW_USE.CONFIG.STEP_3.TEXT')\"></p> <pre>\n                    <code class=language-javascript>\nimport { Dialog, PrepareDialog, DIALOG_REF, DialogRef } from '@nimble-ts/core/dialog';\nimport { Inject } from '@nimble-ts/core/inject';\n\n@PrepareDialog({\n    template: require('./example.dialog.html'),\n    style: require('./example.dialog.scss')\n})\nexport class ExampleDialog extends Dialog {\n\n    public myCustomData: string;\n\n    constructor(\n        @Inject(DIALOG_REF) public dialogRef: DialogRef&lt;ExampleDialog&gt;\n    ) {\n        super();\n        this.myCustomData = this.dialogRef.data;\n    }\n\n    onOpen() {\n        console.log(this.myCustomData);\n    }\n\n    onClose() {\n    }\n}\n                    </code>\n                </pre> </section> </section> <section class=\"mt-5 mb-1\"> <h5 class=\"border-0 mb-0\"> {{getText('HOW_USE.DATA_CLOSE.TITLE')}} </h5> <p [html]=\"getText('HOW_USE.DATA_CLOSE.TEXT')\"></p> <section class=\"mt-4 pt-1\"> <h6 class=\"border-0 mb-0 pb-2\"> 01 - {{getText('HOW_USE.DATA_CLOSE.STEP_1.TITLE')}} </h6> <p [html]=\"getText('HOW_USE.DATA_CLOSE.STEP_1.TEXT')\"></p> <pre>\n                    <code class=language-javascript>\nimport { Dialog, PrepareDialog, DIALOG_REF, DialogRef } from '@nimble-ts/core/dialog';\nimport { Inject } from '@nimble-ts/core/inject';\n\n@PrepareDialog({\n    template: require('./example.dialog.html'),\n    style: require('./example.dialog.scss')\n})\nexport class ExampleDialog extends Dialog {\n\n    public myCustomData: string;\n\n    constructor(\n        @Inject(DIALOG_REF) public dialogRef: DialogRef&lt;ExampleDialog&gt;\n    ) {\n        super();\n    }\n\n    public ok() {\n        this.dialogRef.close('My custom data when closed!');\n    }\n\n    onOpen() {\n    }\n\n    onClose() {\n    }\n}\n                    </code>\n                </pre> </section> <section class=mt-4> <h6 class=\"border-0 mb-0 pb-2\"> 02 - {{getText('HOW_USE.DATA_CLOSE.STEP_2.TITLE')}} </h6> <p [html]=\"getText('HOW_USE.DATA_CLOSE.STEP_2.TEXT')\"></p> <pre>\n                    <code class=language-javascript>\nimport { Page, PreparePage } from '@nimble-ts/core/page';\nimport { ExampleDialog } from 'src/app/dialogs/example/example.dialog';\n\n@PreparePage({\n    template: require('./example.page.html'),\n    style: require('./example.page.scss')\n})\nexport class ExamplePage extends Page {\n\n    constructor(\n        private dialog: DialogBuilder\n    ) {\n        super();\n    }\n\n    public openMyDialog() {\n        let dialogRef = this.dialog.open(ExampleDialog);\n        dialogRef.onClose.then((data: any) => {\n            console.log(data);       \n        });\n    }\n}\n                    </code>\n                </pre> </section> </section> </section> </div>"},163:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t),n.d(t,"Framework1xDialogsPage",(function(){return u}));var a=n(122),o=n(127),l=n(12),r=n(14),i=function(e,t,n,a){var o,l=arguments.length,r=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(r=(l<3?o(r):l>3?o(t,n,r):o(t,n))||r);return l>3&&r&&Object.defineProperty(t,n,r),r},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(e,t){return function(n,a){t(n,a,e)}};let p=(()=>{let e=class extends o.Dialog{constructor(e){super(),this.dialogRef=e}onOpen(){}onClose(){}};return e=i([Object(o.PrepareDialog)({template:n(160),style:n(161)}),c(0,Object(r.Inject)(o.DIALOG_REF)),s("design:paramtypes",[o.DialogRef])],e),e})();var g=function(e,t,n,a){var o,l=arguments.length,r=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(r=(l<3?o(r):l>3?o(t,n,r):o(t,n))||r);return l>3&&r&&Object.defineProperty(t,n,r),r},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let u=(()=>{let e=class extends a.Page{constructor(e,t){super(),this.lang=e,this.dialog=t}getText(e){return this.lang.get("DOC.1x.CONTENT.FRAMEWORK.DIALOGS."+e)}onInit(){}openExampleDialog(){this.dialog.open(p)}onDestroy(){}};return e=g([Object(a.PreparePage)({template:n(162),style:n(163),title:"Dialogs / Document - Nimble"}),m("design:paramtypes",[l.a,o.DialogBuilder])],e),e})()}}]);