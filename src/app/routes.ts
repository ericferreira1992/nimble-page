import { RouteBase } from '@nimble-ts/core';

let docsPrefix = 'pages/document/doc-1x';
let docsEssentialsPrefix = `${docsPrefix}/essentials`;
let docsCliPrefix = `${docsPrefix}/cli`;
let docsFrameworkPrefix = `${docsPrefix}/framework`;

export const ROUTES: RouteBase[] = [
    {
        path: '',
        page: () => import('./pages/root/root.page').then(x => x.RootPage),
        children: [
            {
                path: '',
                page: () => import('./pages/home/home.page').then(x => x.HomePage)
            },
            {
                path: 'doc',
                page: () => import('./pages/document/document.page').then(x => x.DocumentPage),
                children: [
                    { path: '', redirect: '/doc/1x/essentials/introduction' },
					{
						path: '1x',
						children: [
							{ path: '', redirect: '/doc/1x/essentials/introduction' },
							{
								path: 'essentials',
								children: [
									{ path: '', redirect: '/doc/1x/essentials/introduction' },
									{
										path: 'introduction',
										page: () => import(`./${docsEssentialsPrefix}/doc-1x-introduction/doc-1x-introduction.page`).then(x => x.Doc1xIntroductionPage)
									},
									{
										path: 'get-started',
										page: () => import(`./${docsEssentialsPrefix}/doc-1x-get-started/doc-1x-get-started.page`).then(x => x.Doc1xGetStartedPage)
									},
									{
										path: 'structure',
										page: () => import(`./${docsEssentialsPrefix}/doc-1x-structure/doc-1x-structure.page`).then(x => x.Doc1xStructurePage)
									},
								]
							},
							{
								path: 'framework',
								children: [
									{ path: '', redirect: '/doc/1x/framework/pages' },
									{
										path: 'pages',
										page: () => import(`./${docsFrameworkPrefix}/framework-1x-pages/framework-1x-pages.page`).then(x => x.Framework1xPagesPage)
									},
									{
										path: 'routes',
										page: () => import(`./${docsFrameworkPrefix}/framework-1x-routes/framework-1x-routes.page`).then(x => x.Framework1xRoutesPage)
									},
									{
										path: 'dialogs',
										page: () => import(`./${docsFrameworkPrefix}/framework-1x-dialogs/framework-1x-dialogs.page`).then(x => x.Framework1xDialogsPage)
									},
									{
										path: 'services',
										page: () => import(`./${docsFrameworkPrefix}/framework-1x-services/framework-1x-services.page`).then(x => x.Framework1xServicesPage)
									},
									{
										path: 'directives',
										page: () => import(`./${docsFrameworkPrefix}/framework-1x-directives/framework-1x-directives.page`).then(x => x.Framework1xDirectivesPage)
									},
									{
										path: 'reactive-forms',
										page: () => import(`./${docsFrameworkPrefix}/framework-1x-directives/framework-1x-directives.page`).then(x => x.Framework1xDirectivesPage)
									},
								]
							},
							{
								path: 'cli',
								children: [
									{ path: '', redirect: '/doc/1x/cli/overview' },
									{
										path: 'overview',
										page: () => import(`./${docsCliPrefix}/cli-1x-overview/cli-1x-overview.page`).then(x => x.Cli1xOverviewPage),
									},
									{
										path: 'commands',
										page: () => import(`./${docsCliPrefix}/cli-1x-commands/cli-1x-commands.page`).then(x => x.Cli1xCommandsPage),
									},
									{
										path: 'args',
										page: () => import(`./${docsCliPrefix}/cli-1x-args/cli-1x-args.page`).then(x => x.Cli1xCommandsPage),
									},
								]
							},
						]
					}
                ]
			} 
        ]
    },
    {
        path: '**',
        page: () => import('./pages/404/404.page').then(x => x.NotFoundPage)
    }
];