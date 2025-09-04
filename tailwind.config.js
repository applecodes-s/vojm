/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,  // ✅ Disables Tailwind's reset
  },
}
