const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Lato', 'sans-serif'],
				logo: ['Sharpie']
			},
			colors: {
				// cyan
				primary: {
					50: '#ecfeff',
					100: '#cffafe',
					200: '#a5f3fc',
					300: '#67e8f9',
					400: '#22d3ee',
					500: '#06b6d4',
					600: '#0891b2',
					700: '#0e7490',
					800: '#155e75',
					900: '#164e63'
				}
			}
		}
	},

	plugins: [require('flowbite/plugin'), require('@tailwindcss/typography')],

	darkMode: 'class'
};

module.exports = config;
