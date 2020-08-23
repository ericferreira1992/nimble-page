import { Page, PreparePage, Router } from '@nimble-ts/core';
import { LangService } from 'src/app/services/lang.service';
import { NimbleDataService } from 'src/app/services/nimble-data.service';

@PreparePage({
    template: require('./root.page.html'),
    style: require('./root.page.scss')
})
export class RootPage extends Page {

	public loadingRoute: boolean = true;
    public initialized: boolean = false;
	
    private cancelListeners: (() => void)[] = [];

    constructor(
		private nimbleService: NimbleDataService,
        private lang: LangService,
    ) {
        super();
    }
	
	async onInit() {
		await this.lang.loadingLanguage();
		this.nimbleService.prapreMenu();

		this.loadingRoute = false;
		this.initialized = true;

		this.cancelListeners = [
			Router.addListener('STARTED_CHANGE', () => {
				this.render(() => {
					this.loadingRoute = true;
				});
			}),
			Router.addListener(['FINISHED_CHANGE', 'CHANGE_REJECTED', 'CHANGE_ERROR'], () => {
				this.render(() => {
					this.loadingRoute = false;
					this.initialized = true;
				});
			})
		]
	}

    onExit() {
        this.cancelListeners.forEach(x => x());
    }
}