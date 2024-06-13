import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://mprojectscode.github.io',
	base: '/obsidian-collection',
	integrations: [
		starlight({
			title: 'Obsidian Collection',
			social: {
				github: 'https://github.com/mProjectsCode/obsidian-collection',
			},
			components: {
				TableOfContents: './src/components/TableOfContents.astro',
				SocialIcons: './src/components/SocialIcons.astro',
			},
			sidebar: [
				{
					label: 'Plugin Dev',
					autogenerate: { directory: 'Plugin Dev' },
				},
				{
					label: 'Theme Dev',
					autogenerate: { directory: 'Theme Dev' },
				},
				{
					label: 'TTRPG',
					autogenerate: { directory: 'TTRPG' },
				},
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
		}),
	],
});
