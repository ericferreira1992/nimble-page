import { NimbleApp } from '@nimble-ts/core';
import { ROUTES } from './app/routes';
import { NimbleDataService } from './app/services/nimble-data.service';
import { LangService } from './app/services/lang.service';

// import hljs from 'highlight.js/lib/core';
// hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
// hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
// hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
// hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'));

NimbleApp.config({
    routes: ROUTES,
    directives: [],
    providers: [
        LangService,
        NimbleDataService
    ]
}).start()