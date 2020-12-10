const { parseData } = require("../../utils")

const data = parseData(__dirname)
const target = 2020;
const table = (input) => 
    input.reduce((acc, item) => {
        acc[item] = item
        return acc
    }, {})


// Cost O(n)
const part1 = (input, dict) => {
    for (const el of input)
        if (dict.hasOwnProperty(target - el))
            if (target - el != el) return (target - el) * el

    return "Not found"
}

// Cost O(n^2)
const part2 = (input, dict) => {
    for (const elA of input)
        for (const elB of input)
            if (dict.hasOwnProperty(target - elA - elB))
                if (
                    target - elA - elB != elA &&
                    target - elA - elB != elB &&
                    elA != elB
                )
                    return (target - elA - elB) * elA * elB

    return "Not found"
}


/* Results */

console.time("Time")
const result1 = part1(data.input, table(data.input))
const result2 = part2(data.input, table(data.input))
console.timeEnd("Time")

console.log("Solution to part 1:", result1)
console.log("Solution to part 2:", result2)
