const mandatories = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const parse = (data) => {
    res = []
    acc = []

    data.forEach((el) => {
        if (el === "") {
            res.push(acc)
            acc = []
        } else {
            acc.push(...el.split(' '))
        }
    })
    res.push(acc)
    return res
}

// Cost O(N)
const part1 = (data) => {
    let input = parse(data.input)

    input = input.map( el =>
        el.map( line => line.match(/[a-z]+/i)[0] )
    )
    
    let count = 0;
    input.forEach( el => {
        if(mandatories.every(mand => el.includes(mand))) ++count
    })
    return count
}

// Cost O(N)
const part2 = (data) => {
    let input = parse(data.input)
    
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

module.exports = {
    part1,
    part2
}