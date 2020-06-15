import { Page, PreparePage, Router, Listener } from '@nimble-ts/core';
import { NimbleDataService } from 'src/app/services/nimble-data.service';
import { LangService } from 'src/app/services/lang.service';

@PreparePage({
    template: require('./home.page.html'),
    style: require('./home.page.scss'),
    title: 'Home'
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
        private listener: Listener
    ) {
        super();
    }

    onEnter() {
        this.listener.listen(window, 'click', (e) => {
            if (this.languageDrop)
                this.render(() => this.languageDrop = false);
        });
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