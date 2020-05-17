import { Provider } from '@nimble-ts/core';
import { Version } from 'src/app/models/version.model';
import { VersionMenu } from '../models/version-menu.model';

@Provider({ single: true })
export class NimbleDataService {

    public versions: Version[] = [
        new Version({
            id: '1x',
            name: '1.x',
            menu: [
                new VersionMenu({
                    description: 'Essentials',
                    path: 'essentials',
                    submenu: [
                        new VersionMenu({
                            description: 'Introduction',
                            path: 'introduction',
                            forceLink: true,
                            submenu: [
                                new VersionMenu({
                                    description: 'About',
                                    path: '#about'
                                })
                            ]
                        }),
                        new VersionMenu({
                            description: 'Get Started',
                            path: 'get-started',
                            forceLink: true,
                            submenu: [
                                new VersionMenu({
                                    description: 'Install CLI',
                                    path: '#install-cli'
                                }),
                                new VersionMenu({
                                    description: 'Create a project',
                                    path: '#create-a-project'
                                })
                            ]
                        }),
                    ]
                })
            ]
        })
    ];
    
    public languages: { id: string, name: string }[] = [
        { id: 'enUS', name: 'ENGLISH' },
        { id: 'ptBR', name: 'PORTUGUESE' },
    ];

    constructor() {
    }
}