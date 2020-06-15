import { Provider } from '@nimble-ts/core';
import { Version } from 'src/app/models/version.model';
import { VersionMenu } from '../models/version-menu.model';
import { LangService } from './lang.service';

@Provider({ single: true })
export class NimbleDataService {

    public versions: Version[] = [];
    
    public languages: { id: string, name: string }[] = [
        { id: 'enUS', name: 'ENGLISH' },
        { id: 'ptBR', name: 'PORTUGUESE' },
    ];

    constructor(
        private langService: LangService
    ) {
    }

    public prapreMenu() {
        this.versions = [
            new Version({
                id: '1x',
                name: `1.2.2 ${this.langService.get('GLOBAL.LATEST').toLowerCase()}`,
                menu: [
                    new VersionMenu({
                        description: 'ESSENTIALS',
                        path: 'essentials',
                        keyWords: [],
                        submenu: [
                            new VersionMenu({
                                description: 'STRUCTURE',
                                path: 'structure',
                                keyWords: [],
                                submenu: [
                                    new VersionMenu({
                                        description: 'FOLDER_ARCHIVES_STRUCTURE',
                                        path: '#folder-archives-structure',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'ROOT_FILES',
                                        path: '#root-files',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'PUBLIC_DIRECTORY',
                                        path: '#public-directory',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'SOURCE_DIRECTORY',
                                        path: '#src-directory',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'APP_DIRECTORY',
                                        path: '#app-directory',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'ENVIRONMENTS_DIRECTORY',
                                        path: '#environments-directory',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'SCSS_DIRECTORY',
                                        path: '#scss-directory',
                                        keyWords: []
                                    }),
                                ]
                            }),
                            new VersionMenu({
                                description: 'INTRODUCTION',
                                path: 'introduction',
                                keyWords: [],
                                submenu: [
                                    new VersionMenu({
                                        description: 'WHAT_IS_THE_NIMBLE',
                                        path: '#what-is-nimble',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'FIRST_STEPS',
                                        path: '#first-steps',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'RENDERING_A_SIMPLE_PAGE',
                                        path: '#rendering-a-simple-page',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'DECLARATIVE_RENDER',
                                        path: '#declarative-render',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'NOTIFICATION_TO_RERENDER',
                                        path: '#notification-to-update-page',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'CONDITION_AND_LOOPS',
                                        path: '#condition-and-loops',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'HIDE_AND_SHOW_ELEMENTS',
                                        path: '#hide-and-show-elements',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'SHOW_LIST_ELEMENTS',
                                        path: '#show-list-elements',
                                        keyWords: []
                                    })
                                ]
                            }),
                            new VersionMenu({
                                description: 'GET_STARTED',
                                path: 'get-started',
                                keyWords: [],
                                submenu: [
                                    new VersionMenu({
                                        description: 'INSTALL_CLI',
                                        path: '#install-cli',
                                        keyWords: []
                                    }),
                                    new VersionMenu({
                                        description: 'CREATE_A_PROJECT',
                                        path: '#create-a-project',
                                        keyWords: []
                                    })
                                ]
                            }),
                        ]
                    })
                ]
            })
        ];

        this.versions.forEach(v => {
            v.seLangService(this.langService);
        });
    }
}