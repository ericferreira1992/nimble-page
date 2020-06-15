import { NimbleApp } from '@nimble-ts/core';
import { ROUTES } from './app/routes';
import { NimbleDataService } from './app/services/nimble-data.service';
import { LangService } from './app/services/lang.service';

import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

NimbleApp.config({
    routes: ROUTES,
    directives: [],
    providers: [
        LangService,
        NimbleDataService
    ]
}).start()