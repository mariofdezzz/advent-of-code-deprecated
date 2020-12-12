const { readdirSync } = require("fs")
const parseData = require("./parseData")
const src = "../"

const achieved = () => {
    const list = {};
    const years = readdirSync("./src").filter(dir => /^\d+$/.test(dir))
    
    years.forEach( year => {
        list[year] = {}
        days = readdirSync("./src/"+ year)
    
        days.forEach( day => {
            let number = day.match(/\d+/)
            let path = src + year +"/"+ day
            let count = 0

            const { part1, part2 }= require(path + "/code.js")
            const data = parseData("src/" + year +"/"+ day)
    
            if (part1(data.input)) ++count
            if (part2(data.input)) ++count
    
            list[year][number] = count
        })
    })
    return list
}

module.exports = achieved