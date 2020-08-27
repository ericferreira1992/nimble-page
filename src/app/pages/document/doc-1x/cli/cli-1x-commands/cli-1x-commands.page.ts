import { Page, PreparePage } from '@nimble-ts/core/page';
import { LangService } from 'src/app/services/lang.service';

@PreparePage({
    template: require('./cli-1x-commands.page.html'),
    style: require('./cli-1x-commands.page.scss'),
    title: 'CLI / Interactive commands - Nimble'
})
export class Cli1xCommandsPage extends Page {

    constructor(
		public lang: LangService
	) {
        super();
    }

    public getText(path: string) { return this.lang.get(`DOC.1x.CONTENT.CLI.INTERACTIVE_COMMANDS.${path}`); }

    onEnter() {
    }

    onExit() {
    }
}