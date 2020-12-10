const { parseData } = require("../../utils")

const data = parseData(__dirname)

// Cost O(n^2)
const part1 = (input) => {
    let valids = 0

    input.forEach((el) => {
        let [min, max] = el.match(/\d+/g)
        let letter = el.match(/[a-z]/i)[0]
        let password = el.match(/[a-z]+$/i)[0]

        let count = (password.match(new RegExp(letter, "g")) || []).length

        if (min <= count && count <= max) ++valids
    })
    return valids
}

// Cost O(n)
const part2 = (input) => {
    let valids = 0

    input.forEach((el) => {
        let positions = el.match(/\d+/g)
        let letter = el.match(/[a-z]/i)[0]
        let password = el.match(/[a-z]+$/i)[0]

        if (
            positions.reduce((acc, el) => {
                if (password[+el - 1] == letter) acc = !acc
                return acc
            }, false)
        )
            ++valids
    })
    return valids
}


/* Results */

console.time("Time")
const result1 = part1(data.input)
const result2 = part2(data.input)
console.timeEnd("Time")

console.log("Solution to part 1:", result1)
console.log("Solution to part 2:", result2)
