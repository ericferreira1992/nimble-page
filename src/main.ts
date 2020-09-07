import { NimbleApp, enviroment } from '@nimble-ts/core';
import { ROUTES } from './app/routes';
import { NimbleDataService } from './app/services/nimble-data.service';
import { LangService } from './app/services/lang.service';
import '@nimble-ts/core/plugins/google-analytics';

NimbleApp.config({
    routes: ROUTES,
    directives: [],
    providers: [
        LangService,
        NimbleDataService
    ]
})
.pluginGoogleAnalytics({
	id: 'UA-177358955-1',
	disabled: !enviroment.production
})
.start();