const target = 2020
const table = (input) =>
    input.reduce((acc, item) => {
        acc[item] = item
        return acc
    }, {})

// Cost O(n)
const part1 = (input) => {
    let dict = table(input)
    for (const el of input)
        if (dict.hasOwnProperty(target - el))
            if (target - el != el) return (target - el) * el

    return "Not found"
}

// Cost O(n^2)
const part2 = (input) => {
    let dict = table(input)
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

module.exports = {
    part1,
    part2
}