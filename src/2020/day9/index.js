const sorted = (a, b) => {
    if (a < b) return -1
    return 1
}

const isLegal = (sum, pool) => {
    spool = [...pool].sort(sorted)
    l = 0
    r = spool.length - 1

    while (l < r) {
        // console.log(l, r, pool[l] + pool[r]);
        if (spool[l] + spool[r] == sum) return true

        if (spool[l] + spool[r] < sum) l++
        else r--
    }
    return false
}

const squeeze = (input, target) => {
    let start = 0
    let sum = input[0] + input[1] // At least, 2 numbers

    for (let i = 2; i <= input.length; i++) {
        while (sum > target && start < i-2) {
            sum -= input[start]
            ++start
        }

        if (sum == target) return input.slice(start, i)

        if (i < input.length) sum += input[i]
    }
    return
}

const find = (input, preamble) => {
    let pool = input.slice(0, preamble).reverse()
    let list = input.slice(preamble)
    
    for (const item of list) {
        if (!isLegal(item, pool)) return item
        
        pool.unshift(item)
        pool.pop()
    }
    return
}

const part1 = (data) => {
    let input = data.input.map(el => +el)

    return find(input, 25)
}

const part2 = (data) => {
    let input = data.input.map(el => +el)
    const invalid = find(input, 25)
    
    let subset = squeeze(input, invalid)

    if (subset ?? false) {
        subset.sort(sorted)

        return subset[0] + subset[subset.length - 1]
    }

    return
}

module.exports = {
    part1,
    part2
}