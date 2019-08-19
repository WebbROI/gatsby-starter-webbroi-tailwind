import "./src/styles/site.css"
import "typeface-roboto"
import "typeface-open-sans"

require("typeface-roboto")
require("typeface-open-sans")

// ES5 way
// exports.onClientEntry = () => {
// ES6 way
export const onClientEntry = () => {  
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}