import { Page, PreparePage } from '@nimble-ts/core/page';
import { Router } from '@nimble-ts/core/route';
import { ElementListener } from '@nimble-ts/core/render';
import { NimbleDataService } from 'src/app/services/nimble-data.service';
import { LangService } from 'src/app/services/lang.service';
import Prism from 'prismjs';
// import hljs from 'highlight.js/lib/core';

@PreparePage({
    template: require('./home.page.html'),
    style: require('./home.page.scss'),
	title: 'Home - Nimble Framework',
	meta: {
		description: '',
		keywords: 'nimble, nb, framework',
		og: {
			url: 'https://ericferreira1992.github.io/nimble-page',
			title: 'Home - Nimble Framework',
			siteName: 'Home - Nimble Framework',
			description: 'Nimble framework page and documentation',
			image: 'https://ericferreira1992.github.io/nimble-page/assets/img/nimble_icon.png',
			imageWidth: '100',
			imageHeight: '100',
			imageType: 'image/png',
			type: 'webiste',
		}
	}
})
export class HomePage extends Page {
    public get routePath() { return Router.currentPath; }
    public get lastVersion() {
        return this.nimbleData.versions.length > 0 ? this.nimbleData.versions[this.nimbleData.versions.length - 1].id : '';
    }

    public showMenu: boolean = false;
    public languageDrop: boolean = false;

    constructor(
        private lang: LangService,
        private nimbleData: NimbleDataService,
        private listener: ElementListener
    ) {
        super();
    }

    onEnter() {
        this.listener.listen(window, 'click', (e) => {
            if (this.languageDrop)
                this.render(() => this.languageDrop = false);
        });
    }

    onInit() {
        this.highlightCodes();
    }

    private highlightCodes() {
		setTimeout(() => {
			document.querySelectorAll('pre code[class*="language-"]').forEach((block) => {
				Prism.highlightElement(block);
            });
        }, 0);
        // hljs.initHighlightingOnLoad();
        // setTimeout(() => {
        //     document.querySelectorAll('pre code').forEach((block) => {
        //         hljs.highlightBlock(block);
        //     });
        // }, 0);
    }

    public toggleMenu() {
        this.render(() => {
            this.showMenu = !this.showMenu;
        });
    }

    public selectLang(lang: string) {
        this.lang.setCurrentLang(lang);
    }

    public toggleLanguageDrop() {
        setTimeout(() => {
            this.render(() => this.languageDrop = !this.languageDrop);
        }, 1);
    }

    public openSearch() {
        
    }
}