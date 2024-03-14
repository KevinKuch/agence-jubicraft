import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
			},
		},
		extend: {
			screens: {
				"1xl": "1400px",
				"xsm": "400px",
			},

			fontFamily: {
				'trirong': ['Trirong', 'serif'],
				'telex': ['Telex', 'sans-serif'],
				'rubik': ['Rubik Moonrocks', 'sans-serif'],
				'rubik-doodle': ['Rubik Doodle Shadow', 'system-ui'],
				'heebo': ['Heebo', 'sans-serif'],
			},

			textColor: {
				skin: {
					base: 'var(--color-text-base)',
				}
			},
			backgroundColor: {
				skin: {
					base: 'var(--background-custom)',
					secondary: 'var(--color-secondary)',
					primary: 'var(--color-primary)',
					third: 'var(--color-third)',
				}
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
