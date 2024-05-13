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
				'heebo': ['Heebo', 'sans-serif'],
			},
			textColor: {
				skin: {
					base: 'var(--color-text-white)',
					red: 'var(--color-text-red)',
					primary: 'var(--color-text-primary)',
					secondary: 'var(--color-text-secondary)',
					accent: 'var(--color-text-accent)',
				}
			},
			backgroundColor: {
				skin: {
					base: 'var(--background-custom)',
					secondary: 'var(--color-secondary)',
					primary: 'var(--color-primary)',
					accent: 'var(--color-accent)',
				}
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
