import type { Config } from 'tailwindcss'
import { elevationPlugin } from './plugins/elevation'

export default {
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /^elevation/,
    },
  ],
  plugins: [elevationPlugin],
} satisfies Config
