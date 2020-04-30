import { NimbleApp } from '@nimble-ts/core';
import { ROUTES } from './app/routes';
import { NimbleDataService } from './app/services/nimble-data.service';

NimbleApp.config({
    routes: ROUTES,
    directives: [],
    providers: [
        NimbleDataService
    ]
}).start();