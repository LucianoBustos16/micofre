/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/flowbite/**/*.js" ],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [
		require(
			'tailwind-scrollbar-hide',
			'flowbite/plugin',
			)
	],
}