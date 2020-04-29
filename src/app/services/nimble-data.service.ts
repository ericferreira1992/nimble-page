import { Provider } from '@nimble-ts/core';
import { Version } from 'src/app/models/version.model';
import { VersionMenu } from '../models/version-menu.model';

@Provider({ single: true })
export class NimbleDataService {

    public versions: Version[] = [
        {
            id: '1x',
            name: '1.x',
            menu: [
                new VersionMenu({
                    description: 'Essentials',
                    submenu: [
                        new VersionMenu({
                            description: 'Get Started',
                            path: 'get-started',
                            submenu: [
                                new VersionMenu({
                                    description: 'Install CLI',
                                    path: 'install-cli'
                                })
                            ]
                        }),
                        new VersionMenu({
                            description: 'Introduction',
                            path: 'introduction'
                        }),
                    ]
                })
            ]
        }
    ];
    
    public languages: { id: string, name: string }[] = [
        { id: 'enUS', name: 'ENGLISH' },
        { id: 'ptBR', name: 'PORTUGUESE' },
    ];

    constructor() {
    }
}