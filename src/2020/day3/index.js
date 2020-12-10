const { parseData } = require("../../utils")

const data = parseData(__dirname)


const slope = (input, right, down) => {
    let pos = [down, right]
    let trees = 0
    const maxWide = input[0].length

    while (pos[0] < input.length) {
        if (input[pos[0]][pos[1]] == "#") ++trees

        pos[0] += down
        pos[1] = (pos[1] + right) % maxWide
    }
    return trees
}

const part1 = (input) => {
    return slope(input, 3, 1)
}

const part2 = (input) => {
    const slopes = [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2],
    ]

    return slopes.reduce((acc, el) => {
        return acc * slope(input, ...el)
    }, 1)
}


/* Results */

console.time("Time")
const result1 = part1(data.input)
const result2 = part2(data.input)
console.timeEnd("Time")

console.log("Solution to part 1:", result1)
console.log("Solution to part 2:", result2)
