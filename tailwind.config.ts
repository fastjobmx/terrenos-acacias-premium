import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				luxury: {
					DEFAULT: 'hsl(var(--luxury))',
					foreground: 'hsl(var(--luxury-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-luxury': 'var(--gradient-luxury)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-glass': 'var(--gradient-glass)',
			},
			boxShadow: {
				'luxury': 'var(--shadow-luxury)',
				'elegant': 'var(--shadow-elegant)',
				'glow': 'var(--shadow-glow)',
				'soft': 'var(--shadow-soft)',
				'medium': 'var(--shadow-medium)',
				'large': 'var(--shadow-large)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'display': ['Playfair Display', 'serif'],
				'body': ['Inter', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)' 
					},
					'33%': { 
						transform: 'translateY(-8px) rotate(1deg)' 
					},
					'66%': { 
						transform: 'translateY(-4px) rotate(-1deg)' 
					}
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: 'var(--shadow-glow)',
						transform: 'scale(1)' 
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(251, 191, 36, 0.5), 0 0 60px rgba(251, 191, 36, 0.3)',
						transform: 'scale(1.02)' 
					}
				},
				'slide-up-fade': {
					from: {
						opacity: '0',
						transform: 'translateY(40px) scale(0.95)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'slide-in-right': {
					from: {
						opacity: '0',
						transform: 'translateX(40px) scale(0.95)'
					},
					to: {
						opacity: '1',
						transform: 'translateX(0) scale(1)'
					}
				},
				'scale-bounce': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.3)'
					},
					'50%': {
						transform: 'scale(1.05)'
					},
					'70%': {
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'shimmer-wave': {
					'0%': { 
						backgroundPosition: '-200% 0',
						transform: 'skewX(-15deg)' 
					},
					'100%': { 
						backgroundPosition: '200% 0',
						transform: 'skewX(-15deg)' 
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1',
						transform: 'scale(1)',
						boxShadow: '0 0 0 0 rgba(251, 191, 36, 0.7)'
					},
					'50%': {
						opacity: '0.9',
						transform: 'scale(1.05)',
						boxShadow: '0 0 0 10px rgba(251, 191, 36, 0)'
					}
				},
				'bounce-gentle': {
					'0%, 20%, 53%, 80%, 100%': {
						transform: 'translate3d(0, 0, 0)'
					},
					'40%, 43%': {
						transform: 'translate3d(0, -8px, 0)'
					},
					'70%': {
						transform: 'translate3d(0, -4px, 0)'
					},
					'90%': {
						transform: 'translate3d(0, -2px, 0)'
					}
				},
				'fade-in-up': {
					from: {
						opacity: '0',
						transform: 'translate3d(0, 30px, 0)'
					},
					to: {
						opacity: '1',
						transform: 'translate3d(0, 0, 0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 4s ease-in-out infinite',
				'glow': 'glow-pulse 3s ease-in-out infinite',
				'slide-up': 'slide-up-fade 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'slide-in-right': 'slide-in-right 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'scale-bounce': 'scale-bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'shimmer': 'shimmer-wave 2.5s infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'bounce-gentle': 'bounce-gentle 2s infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
