import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.logno.dev',
	integrations: [mdx(),],
	markdown: {
		render: [
			'@astrojs/mardown-remark',
			{
				syntaxHighlight: 'shiki',
				shikiConfig: {
					theme: 'github-dark',
					langs: ['js', 'html', 'css', 'bash', 'astro'],
					wrap: false,
				}
			}
		]
	}

});
