const fs = require("fs")

const readme = (achieved) => {
    const maxCol = 9;

    let years = ""
    for (const year in achieved) {
        let table = ""
        let completed = 0

        for (let day = 1; day <= 25; day++) {
            let stars = 0
            if (achieved[year].hasOwnProperty(day))
                stars = achieved[year][day]

            completed += stars
            table += `|**${day}: ` + 
                "🌟".repeat(stars) + 
                "🔒".repeat(2 - stars) + "**"
            
            if (day % maxCol == 0) table += "|\n"
            if (day == maxCol) table += "|---".repeat(maxCol) + "|\n"
        }

        years += `## ${year} \n\n🌟 ${completed}/50 \n\n${table}| \n`
    }

    let text = "# 🌠 Advent Of Code\n"+
        "🎄 Christmas hobby made with JavaScript\n\n"+
        `${years}`
    
    fs.writeFileSync("README.md", text)
}

module.exports = readme