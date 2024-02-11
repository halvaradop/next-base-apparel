import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: 'hsl(0, 36%, 70%)',
          100: 'hsl(0, 93%, 68%)',
          200: 'hsl(0, 6%, 24%)'
        }
      },
      backgroundImage: {
        'grd-100': 'linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))',
        'grd-200': 'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))'
      }
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('user-invalid', '&:user-invalid')
      addVariant('peer-user-invalid', '.peer:user-invalid ~ &')
    })
  ],
};
export default config;
