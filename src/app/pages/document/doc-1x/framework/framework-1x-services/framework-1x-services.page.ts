import { Page, PreparePage } from '@nimble-ts/core';
import { LangService } from 'src/app/services/lang.service';

@PreparePage({
    template: require('./framework-1x-services.page.html'),
    style: require('./framework-1x-services.page.scss'),
    title: 'Services / Document - Nimble'
})
export class Framework1xServicesPage extends Page {

    constructor(
        public lang: LangService
    ) {
        super();
    }

	public getText(path: string) { return this.lang.get(`DOC.1x.CONTENT.FRAMEWORK.SERVICES.${path}`); }

    onInit() {
    }

    onDestroy() {
    }
}