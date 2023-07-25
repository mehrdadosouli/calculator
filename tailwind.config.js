module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({addVariant}) {
      addVariant('child','& > *');
      addVariant('child-hover','& > *:hover')
    }
  ],
  
}
