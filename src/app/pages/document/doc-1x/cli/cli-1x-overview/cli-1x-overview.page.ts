import { Page, PreparePage } from '@nimble-ts/core/page';
import { LangService } from 'src/app/services/lang.service';

@PreparePage({
    template: require('./cli-1x-overview.page.html'),
    style: require('./cli-1x-overview.page.scss'),
    title: 'CLI / Overview - Nimble'
})
export class Cli1xOverviewPage extends Page {

    constructor(
		public lang: LangService
	) {
        super();
    }

    public getText(path: string) { return this.lang.get(`DOC.1x.CONTENT.CLI.OVERVIEW.${path}`); }

    onEnter() {
    }

    onExit() {
    }
}