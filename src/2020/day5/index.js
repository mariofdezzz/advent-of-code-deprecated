
// Cost O(N)
const getIds = (input) => {
    let rowsEncoded = input.map( el => el.slice(0, 7) )
    let colsEncoded = input.map( el => el.slice(7) )
    let rows = []
    let cols = []
    let min, max
    
    for (let n = 0; n < input.length; n++) {
        // Row decode
        let row = rowsEncoded[n]
        min = 0
        max = 127
        
        for (let i = 0; i < row.length - 1; i++) {
            if (row[i] === "F") max -= Math.round((max - min)/2)
            else min += Math.round((max - min)/2)
        }
        if (row[row.length-1] === "F") rows.push(min)
        else rows.push(max)
        
        // Col decode
        let col = colsEncoded[n]
        min = 0
        max = 7

        for (let i = 0; i < col.length - 1; i++) {
            if (col[i] === "L") max -= Math.round((max - min)/2)
            else min += Math.round((max - min)/2)
        }
        if (col[col.length-1] === "L") cols.push(min)
        else cols.push(max)
    }
    
    let ids = []
    for (let n = 0; n < input.length; n++) {
        ids.push(rows[n] * 8 + cols[n])
    }
    return ids
}

// Cost O(N)
const part1 = (data) => {
    let input = data.input
    let ids = getIds(input)

    return ids.reduce( (acc, el) => {
        if (el > acc) return el
        return acc
    })
}

const part2 = (data) => {
    let input = data.input
    let ids = getIds(input)

    ids = ids.sort( (a, b) => {
        if (a < b) return -1
        return 1
    })
    return ids.reduce( (acc, el, idx) => {
        if (idx > 1 && el - 1 != ids[idx-1]) return el-1
        return acc
    })
}

module.exports = {
    part1,
    part2
}