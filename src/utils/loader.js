const loader = (text) => {
    var P = ["\\", "|", "/", "-"]
    var x = 0
    return setInterval(function () {
        process.stdout.write("\r" + P[x++] + " Generating README")
        x = x % P.length
    }, 150)
}

module.exports = loader
