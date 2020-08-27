import { Page, PreparePage } from '@nimble-ts/core/page';

@PreparePage({
    template: require('./404.page.html'),
    style: require('./404.page.scss'),
    title: 'Página não encontrada - Nimble framework'
})
export class NotFoundPage extends Page {

    constructor() {
        super();
    }

    onEnter() {
    }

    onExit() {
    }
}