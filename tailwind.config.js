module.exports = {
  content: ["tailwind.html"],
  theme: {
    extend: {
      colors: {
        foreground: '#333',
        background: '#fff',
      },
      spacing: {
        'bar-width': 'var(--bar-width)',
        'bar-height': 'var(--bar-height)',
        'hamburger-gap': 'var(--hamburger-gap)',
        'hamburger-margin': 'var(--hamburger-margin)',
        'hamburger-height': 'var(--hamburger-height)',
        'x-width': 'var(--x-width)',
      },
      padding: {
        'sidebar-top': 'calc(var(--hamburger-height) + var(--hamburger-margin) + 1rem)',
      },
      transformOrigin: {
        'left-center': 'left center',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      translate: {
        'translate-before': 'var(--translate-before)',
        'translate-after': 'var(--translate-after)',
      },
    },
  },
  plugins: [],
}
