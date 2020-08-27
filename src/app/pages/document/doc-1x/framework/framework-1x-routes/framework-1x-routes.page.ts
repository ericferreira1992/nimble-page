import { Page, PreparePage } from '@nimble-ts/core/page';
import { LangService } from 'src/app/services/lang.service';

@PreparePage({
    template: require('./framework-1x-routes.page.html'),
    style: require('./framework-1x-routes.page.scss'),
    title: 'Routes / Document - Nimble'
})
export class Framework1xRoutesPage extends Page {

    constructor(
        public lang: LangService
    ) {
        super();
    }

	public getText(path: string) { return this.lang.get(`DOC.1x.CONTENT.FRAMEWORK.ROUTES.${path}`); }

    onInit() {
    }

    onDestroy() {
    }
}