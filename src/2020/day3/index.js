const { parseData } = require("../../utils")
const { part1, part2 } = require("./code")

const data = parseData(__dirname)

// === Results ===
console.time("Time")
const result1 = part1(data.input)
const result2 = part2(data.input)
console.timeEnd("Time")

console.log("Solution to part 1:", result1)
console.log("Solution to part 2:", result2)
