const { achieved, readme } = require("../src/utils")

console.time("README generated in")
readme(achieved())
console.timeEnd("README generated in")