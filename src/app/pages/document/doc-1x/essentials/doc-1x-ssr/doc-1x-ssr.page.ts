import { Page, PreparePage } from '@nimble-ts/core/page';
import { LangService } from 'src/app/services/lang.service';

@PreparePage({
    template: require('./doc-1x-ssr.page.html'),
    style: require('./doc-1x-ssr.page.scss'),
    title: 'SSR / Document - Nimble'
})
export class Doc1xSsrPage extends Page {

	public EXAMPLE_HTML = {
		title: '{{ article.title }}',
		content: '{{ article.content }}',
	};

    constructor(
        public lang: LangService
    ) {
        super();
    }

    public getText(path: string) { return this.lang.get(`DOC.1x.CONTENT.ESSENTIALS.SSR.${path}`); }

    onInit() {
    }

    onDestroy() {
    }
}