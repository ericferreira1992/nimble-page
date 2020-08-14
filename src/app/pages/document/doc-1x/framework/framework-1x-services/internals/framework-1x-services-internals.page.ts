import { Page, PreparePage } from '@nimble-ts/core';
import { LangService } from 'src/app/services/lang.service';

@PreparePage({
    template: require('./framework-1x-services-internals.page.html'),
    style: require('./framework-1x-services-internals.page.scss'),
    title: 'Services - Internals / Document - Nimble'
})
export class Framework1xServicesInternalPage extends Page {

    constructor(
        public lang: LangService
    ) {
        super();
    }

	public getText(path: string) { return this.lang.get(`DOC.1x.CONTENT.FRAMEWORK.SERVICES.INTERNAL.${path}`); }

    onInit() {
    }

    onDestroy() {
    }
}