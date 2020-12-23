const parse = data => {

}

const part1 = (data) => {
    let input = data.input
    let list = new Set()
    let count = 0

    input.forEach( el => {
        if (el == "") {
            count += list.size
            list.clear()
        } else {
            el.split('').forEach( item => list.add(item) )
        }
    })
    count += list.size
    return count
}

const part2 = (data) => {
    let input = data.input
    let list = {}
    let count = 0
    let size = 0
    const increment = () => {
        for (const item in list) {
            if (list[item] == size) ++count
        }
    }

    input.forEach( el => {
        if (el == "") {
            increment()
            list = {}
            size = 0
        } else {
            ++size;
            el.split('').forEach( item => {
                if (list.hasOwnProperty(item)) ++list[item]
                else list[item] = 1
            } )
        }
    })
    increment()
    return count
}

module.exports = {
    part1,
    part2
}