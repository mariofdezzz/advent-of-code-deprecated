const { parseData } = require("../../utils")
const { readFile, writeFile } = require("fs")

const data = parseData(__dirname)
let mandatories = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

// Cost O(N)
const part1 = (input) => {
    input = input.map((el) =>
        el.map((line) => line.match(/[a-z]+/i)[0])
    )
    
    let count = 0;
    input.forEach( el => {
        if(mandatories.every(mand => el.includes(mand))) ++count
    })
    return count
}

// Cost O(N)
const part2 = (input) => {
    let list = input.map((el) =>
        el.map((line) => line.match(/[a-z]+/i)[0])
    )
    let table = input.map((el) =>
        el.reduce((acc, line) => {
            let values = line.split(":")
            acc[values[0]] = values[1]

            return acc
        }, {})
    )
    
    let count = 0;
    let eyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
    for (let i = 0; i < list.length; i++) {
        if(mandatories.every(mand => list[i].includes(mand))) {
            let el = table[i]
            if (
                1920 <= el.byr && el.byr <= 2002 &&
                2010 <= el.iyr && el.iyr <= 2020 &&
                2020 <= el.eyr && el.eyr <= 2030 &&
                /^#[0-9a-f]{6}$/i.test(el.hcl) &&
                eyeColors.includes(el.ecl) &&
                /^\d{9}$/.test(el.pid)
            ) {
                if (
                    /.+cm$/.test(el.hgt) && 
                    150 <= el.hgt.match(/\d+/) &&
                    el.hgt.match(/\d+/) <= 193
                ) ++count
                else if (
                    /.+in$/.test(el.hgt) && 
                    59 <= el.hgt.match(/\d+/) &&
                    el.hgt.match(/\d+/) <= 76
                ) ++count
            }
        }
        
        
    }
    return count
}

/* Results */

console.time("Time")
const result1 = part1(data.input)
const result2 = part2(data.input)
console.timeEnd("Time")

console.log("Solution to part 1:", result1)
console.log("Solution to part 2:", result2)

module.exports = {
    part1,
    part2
}