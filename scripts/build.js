const { loader } = require("../src/utils")
const fs = require("fs")

const achieved = JSON.parse(fs.readFileSync("src/achieved.json", "utf8"))
const maxCol = 8;

let years = ""
for (const year in achieved) {
    let table = ""
    let completed = 0

    for (let day = 1; day <= 25; day++) {
        let stars = 0
        if (achieved[year].hasOwnProperty(day))
            stars = achieved[year][day]

        completed += stars
        table += `|**${day}: ` + "🌟".repeat(stars) + "**"
        if (day % maxCol == 0) table += "|\n"
        if (day == maxCol) table += "|---".repeat(maxCol) + "|\n"
    }

    years += `## ${year} \n\n🌟 ${completed}/50 \n\n${table}| \n`
}

let text = `
# 🌠 Advent Of Code 
🎄 Christmas hobby made with JavaScript

${years}`

console.time("README created in")
fs.writeFile("README.md", text, (err) => {
    if (err) throw err
    console.timeEnd("README created in")
})
