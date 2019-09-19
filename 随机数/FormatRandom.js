//获取长度一致的随机数
let formatRandom = function () {
    let random = Math.random()
    random = random + '0000000000'
    return random.slice(0, 10)
}

console.log(formatRandom())