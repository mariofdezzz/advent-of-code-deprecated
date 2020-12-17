
// Cost O(n^2)
const part1 = (data) => {
    let input = data.input
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
const part2 = (data) => {
    let input = data.input
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

module.exports = {
    part1,
    part2
}