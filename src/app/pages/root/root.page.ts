import { Page, PreparePage, Router } from '@nimble-ts/core';
import hljs from 'highlight.js';

@PreparePage({
    template: require('./root.page.html'),
    style: require('./root.page.scss')
})
export class RootPage extends Page {

    onEnter() {
        hljs.initHighlightingOnLoad();
    }

}