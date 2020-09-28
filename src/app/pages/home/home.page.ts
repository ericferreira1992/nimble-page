import Prism from 'prismjs';
import { Page, PreparePage } from '@nimble-ts/core/page';
import { Router } from '@nimble-ts/core/route';
import { ElementListener } from '@nimble-ts/core/render';
import { DialogBuilder } from '@nimble-ts/core/dialog';
import { NimbleDataService } from 'src/app/services/nimble-data.service';
import { LangService } from 'src/app/services/lang.service';
import { SearchDialog } from 'src/app/dialogs/search/search.dialog';

@PreparePage({
    template: require('./home.page.html'),
    style: require('./home.page.scss'),
	title: 'Home - Nimble Framework'
})
export class HomePage extends Page {
    public get routePath() { return Router.currentPath; }
    public get lastVersion() {
        return this.nimbleData.lastVersion;
    }

    public showMenu: boolean = false;
    public languageDrop: boolean = false;

    constructor(
        private lang: LangService,
        private nimbleData: NimbleDataService,
        private listener: ElementListener,
        private dialog: DialogBuilder,
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

    public showSearchDialog() {
        this.dialog.open(SearchDialog, {
			width: '100%',
			maxWidth: '500px',
			panelClass: 'dialog-panel-top'
		});
    }
}