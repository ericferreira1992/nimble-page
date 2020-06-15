import { Provider, HttpClient, NimbleApp } from '@nimble-ts/core';
import { isObject } from 'util';

@Provider({ single: true })
export class LangService {

    private langs: string[] = [ 'pt-BR', 'en-US' ];
    private dictionary: { [key: string]: string } = {};
    public get currentLang() {
        let currentLang = localStorage.getItem('lang');
        if (!currentLang || !this.langs.some(x => x === currentLang)) {
            let systemLang = this.getSystemLanguages();
            currentLang = systemLang.detected;

            if (!this.langs.some(x => x === currentLang))
                currentLang = this.langs[0];

            localStorage.setItem('lang', currentLang);
        }

        return currentLang;
    }

    constructor(private httpClient: HttpClient) {
    }

    public async loadingLanguage() {
        const response = await this.httpClient.get<any>(`assets/langs/${this.currentLang}.json`);
        this.dictionary = response.data;
    }

    public setCurrentLang(lang: string) {
        if (lang && lang != this.currentLang && this.langs.some(x => x === lang)) {
            localStorage.setItem('lang', lang);
            location.reload();
        }
    }

    public get(completePath: string) {
        let paths = completePath.split('.');

        let dict = this.dictionary;
        let path = paths.shift();

        while (paths.length > 0) {
            if (path in dict){
                if (isObject(dict[path])) {
                    dict = dict[path] as any;
                    path = paths.shift();
                    continue;
                }
                else {
                    return dict[path];
                }
            }
            return '';
        }

        return dict[path];
    }

    private getSystemLanguages() {
        let lg = {
            a: navigator['language'],
            b: navigator['languages'],
            c: navigator['userLanguage'],
            d: navigator['browserLanguage'],
            e: navigator['systemLanguage']
        }
        return {
            detected: lg.a || lg.c || lg.d || lg.e || lg.b[0],
            available: lg.b || [lg.a] || [lg.c] || [lg.d] || [lg.e]
        }
    }

}