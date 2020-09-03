import { NimbleApp } from '@nimble-ts/core';
import { ROUTES } from './app/routes';
import { NimbleDataService } from './app/services/nimble-data.service';
import { LangService } from './app/services/lang.service';

NimbleApp.config({
    routes: ROUTES,
    directives: [],
    providers: [
        LangService,
        NimbleDataService
    ]
}).start()