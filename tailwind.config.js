module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {
        // border: ['last'],
        // borderRight: ['last'],
        borderWidth: ['last'],
      },
    },
    plugins: [require('@tailwindcss/typography')],
};
