import { RouteBase } from '@nimble-ts/core/route';

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
									{
										path: 'ssr',
										page: () => import(`./${docsEssentialsPrefix}/doc-1x-ssr/doc-1x-ssr.page`).then(x => x.Doc1xSsrPage)
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
										children: [
											{ path: '', redirect: '/doc/1x/framework/services/about' },
											{
												path: 'about',
												page: () => import(`./${docsFrameworkPrefix}/framework-1x-services/about/framework-1x-services-about.page`).then(x => x.Framework1xServicesAboutPage)
											},
											{
												path: 'internals',
												page: () => import(`./${docsFrameworkPrefix}/framework-1x-services/internals/framework-1x-services-internals.page`).then(x => x.Framework1xServicesInternalPage)
											}
										]
									},
									{
										path: 'directives',
										children: [
											{ path: '', redirect: '/doc/1x/framework/directives/about' },
											{
												path: 'about',
												page: () => import(`./${docsFrameworkPrefix}/framework-1x-directives/about/framework-1x-directives-about.page`).then(x => x.Framework1xDirectivesAboutPage)
											},
											{
												path: 'internals',
												page: () => import(`./${docsFrameworkPrefix}/framework-1x-directives/internals/framework-1x-directives-internal.page`).then(x => x.Framework1xDirectivesInternalPage)
											}
										]
									},
									{
										path: 'reactive-forms',
										children: [
											{
												path: '',
												page: () => import(`./${docsFrameworkPrefix}/framework-1x-forms/framework-1x-forms.page`).then(x => x.Framework1xFormsPage)
											},
											{
												path: 'directives',
												page: () => import(`./${docsFrameworkPrefix}/framework-1x-forms/framework-1x-forms-directives/framework-1x-forms-directives.page`).then(x => x.Framework1xFormsDirectivesPage)
											}
										]
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