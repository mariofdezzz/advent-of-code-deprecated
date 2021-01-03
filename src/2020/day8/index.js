
const complete = (input, visited, pointer) => {
    let instuct
    let acc = 0

    while(pointer < input.length) {
        if (visited.has(pointer)) return false

        instuct = input[pointer].split(' ')
        visited.add(pointer)

        switch (instuct[0]) {
            case "acc":
                acc += +instuct[1]
                break
            case "jmp":
                pointer += +instuct[1]
                continue
        }
        ++pointer
    }
    return true
}

const part1 = (data) => {
    let input = data.input
    let visited = new Set()
    let acc = 0
    let pointer = 0
    let inst
    
    while(pointer < input.length && !visited.has(pointer)) {
        inst = input[pointer].split(' ')
        visited.add(pointer)

        switch (inst[0]) {
            case "acc":
                acc += +inst[1]
                break
            case "jmp":
                pointer += +inst[1]
                continue
        }
        ++pointer
    }

    return acc
}

const part2 = (data) => {
    let input = data.input
    let visited = new Set()
    let acc = 0
    let pointer = 0
    let inst

    while(pointer < input.length) {
        inst = input[pointer].split(' ')
        visited.add(pointer)

        switch (inst[0]) {
            case "acc":
                acc += +inst[1]
                break
            case "jmp":
                if (complete(input, visited, pointer+1)) // jmp -> nop
                    break
                
                pointer += +inst[1]
                continue
            case "nop":
                if (complete(input, visited, pointer+(+inst[1]))) {// nop -> jmp
                    pointer += +inst[1]
                    continue
                }
        }
        ++pointer
    }

    return acc
}

module.exports = {
    part1,
    part2
}