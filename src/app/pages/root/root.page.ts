import { Page, PreparePage, Router } from '@nimble-ts/core';
import { LangService } from 'src/app/services/lang.service';
import hljs from 'highlight.js';

@PreparePage({
    template: require('./root.page.html'),
    style: require('./root.page.scss')
})
export class RootPage extends Page {

    public loadingDictionary: boolean = true;
    public loadingRoute: boolean = true;
    private cancelListeners: any[] = [];

    constructor(
        private lang: LangService,
    ) {
        super();
    }

    onEnter() {
        this.cancelListeners = [
            Router.addListener('STARTED_CHANGE', () => {
                this.render(() => {
                    this.loadingRoute = true;
                });
            }),
            Router.addListener(['FINISHED_CHANGE', 'CHANGE_REJECTED', 'CHANGE_ERROR'], () => {
                this.render(() => {
                    this.loadingRoute = false;
                });
            })
        ];
        this.lang.loadingLanguage().then(() => {
            this.render(() => {
                this.loadingDictionary = false;
            });
        });
        hljs.initHighlightingOnLoad();
    }

    onExit() {
        this.cancelListeners.forEach(x => x());
    }
}