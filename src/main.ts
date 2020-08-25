import { NimbleApp, enviroment } from '@nimble-ts/core';
import { ROUTES } from './app/routes';
import { NimbleDataService } from './app/services/nimble-data.service';
import { LangService } from './app/services/lang.service';

import hljs from 'highlight.js/lib/core';
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'));

// if (enviroment.production && ('serviceWorker' in navigator)) {
// 	navigator.serviceWorker
// 		.register('/nimble-page/sw.js', { scope: '/nimble-page/' });
// }

NimbleApp.config({
    routes: ROUTES,
    directives: [],
    providers: [
        LangService,
        NimbleDataService
    ]
}).start()