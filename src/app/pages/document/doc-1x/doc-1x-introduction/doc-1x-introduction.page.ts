import { Page, PreparePage } from '@nimble-ts/core';
import { LangService } from 'src/app/services/lang.service';

@PreparePage({
    template: require('./doc-1x-introduction.page.html'),
    style: require('./doc-1x-introduction.page.scss'),
    title: 'Introduction / Document - Nimble'
    // title: (page) => {
    //     return 'Introduction / Document - Nimble';
    // }
})
export class Doc1xIntroductionPage extends Page {

    public get DECLARATIVE_RENDER_USING_INTERPOLATION_TO_PRINT_HTML() { return `
<div class="my-first-page">
    Hello {{myDynamicText}} :)
</div>
 `}

    public DECLARATIVE_RENDER_NOTIFICATION_TO_RERENDER_TIMER: any;
    public get DECLARATIVE_RENDER_NOTIFICATION_TO_RERENDER_HTML() { return `
<div class="my-first-page">
    ${this.getText('DECLARATIVE_RENDER.NOTIFICATION_TO_RERENDER.TEXT_04_2')} {{seconds}} ${this.getText('DECLARATIVE_RENDER.NOTIFICATION_TO_RERENDER.TEXT_04_3')}
</div>
 `}
    public DECLARATIVE_RENDER_NOTIFICATION_TO_RERENDER_TIMER_VALUE: number = 0;

    public get CONDITION_AND_LOOPS_IF_DIRECTIVE_HTML() { return `
<div class="my-first-page">
    <span @if="show">${this.getText('CONDITION_AND_LOOPS.IF_DIRECTIVE.TEXT_03_2')}<span>
    <span @if="!show">${this.getText('CONDITION_AND_LOOPS.IF_DIRECTIVE.TEXT_03_3')}<span>
</div>
 `}

    public get CONDITION_AND_LOOPS_FOR_DIRECTIVE_HTML() { return `
<div class="my-first-page">
    <ul>
        <li @for="var item of menuItems">
            {{item}}
        </li>
    </ul>
</div>
 `}

    constructor(
        public lang: LangService
    ) {
        super();
    }

    public getText(path: string) { return this.lang.get(`DOC.1x.CONTENT.INTRODUCTION.${path}`); }

    onInit() {
        this.DECLARATIVE_RENDER_NOTIFICATION_TO_RERENDER_TIMER = setInterval(() => {
            this.DECLARATIVE_RENDER_NOTIFICATION_TO_RERENDER_TIMER_VALUE += 1;
            this.render();
        }, 1000);
    }

    onDestroy() {
        clearInterval(this.DECLARATIVE_RENDER_NOTIFICATION_TO_RERENDER_TIMER);
    }
}