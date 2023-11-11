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
				github: 'https://github.com/withastro/starlight',
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
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
		}),
	],
});
