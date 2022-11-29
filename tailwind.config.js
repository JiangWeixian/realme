module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    bgGrid: () => ({
      100: {
        backgroundImage:
          "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='#f1f5f9'><path d='M0 .5H31.5V32'/></svg>",
      },
      700: {
        backgroundImage:
          "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.25)'><path d='M0 .5H31.5V32'/></svg>",
      },
    }),
  },
}
