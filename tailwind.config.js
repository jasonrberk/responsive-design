module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'body': ['Montserrat'],
      'accent': ['Oswald'],
    },
    fontWeight: {
      /*
      remove all of the provided font weights as we only 
      link to a single weight of each font.  Setting the 
      font family implicitly sets the weight.

      for the provided design, we'll just set `.font-body` on the <body>
      and `.font-accent` where we need to override it.
      */
    },
    extend: {
      colors: {
        custom: {
          accent: '#A59678',
          dark: '#6F737F',
          darker: '#3B4050',
          darkest: '#2E323F',
        },
      }
    },
  },
  plugins: [],
}
