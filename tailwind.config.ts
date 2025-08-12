import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		animation: {
  			scroll: 'scroll 100s linear infinite',
  			scroll2: 'scroll2 100s linear infinite',
			'scroll-rtl': 'scroll-rtl 100s linear infinite',
        'scroll2-rtl': 'scroll2-rtl 100s linear infinite',
  		},
  		keyframes: {
  			scroll: {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(100%)'
  				}
  			},
  			scroll2: {
  				'0%': {
  					transform: 'translateX(-100%)'
  				},
  				'100%': {
  					transform: 'translateX(0%)'
  				}
  			},
			'scroll-rtl': {
          		'0%': {
					transform: 'translateX(0%)'
				},
          		'100%': {
					transform: 'translateX(-100%)'
				}
        	},
        	'scroll2-rtl': {
          		'0%': { transform: 'translateX(100%)' },
          		'100%': { transform: 'translateX(0%)' }
        	},
  		},
  		fontFamily: {
  			hind: [
  				'var(--font-hind)',
  				'sans-serif'
  			],
  			inter: [
  				'var(--font-inter)',
  				'sans-serif'
  			],
  			manrope: [
  				'var(--font-manrope)',
  				'sans-serif'
  			],
  			gambarino: [
  				'Gambarino-Regular',
  				'sans-serif'
  			]
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		borderWidth: {
  			'3': '3px',
  			'5': '5px',
  			'6': '6px',
  			'7': '7px',
  			'3.5': '3.5px'
  		},
		fontSize:{
			'11xl':'192px'
		},
		minWidth:{
			'90':'350px',
			'100':'420px',
			'104':'500px'
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
