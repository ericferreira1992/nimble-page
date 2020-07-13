import { Page, PreparePage } from '@nimble-ts/core';
import { LangService } from 'src/app/services/lang.service';

@PreparePage({
    template: require('./doc-1x-structure.page.html'),
    style: require('./doc-1x-structure.page.scss'),
    title: 'Strucutre / Document - Nimble'
})
export class Doc1xStructurePage extends Page {

    constructor(
        public lang: LangService
    ) {
        super();
    }

    public getText(path: string) { return this.lang.get(`DOC.1x.CONTENT.ESSENTIALS.STRUCTURE.${path}`); }

    onInit() {
    }

    onDestroy() {
    }
}