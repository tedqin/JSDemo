//数组扁平化，即将多维数组降纬
//如[1, [2, 3, [4]]] ，变成[1, 2, 3, 4]

//1. api
let arr = [1, [2, [3, 4]]];
arr.flat(Infinity) //Infinity表示无穷大

//2. 递归
function flatten(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(flatten(arr[i]))
        } else {
            res.push(arr[i])
        }
    }
    return res
}

//3. toString()
function flatten(arr) {
    return arr.toString(arr).split(',').map((item) => {
        return parseInt(item)
    })
}

//4. 展开运算符+some
function flatten(arr) {
    while(arr.some(item => {return Array.isArray(item)})) {
        arr = [].concat(...arr)
    }
    return arr
}
let arr = [1, [2, [3, 4]]];
console.log(flatten(arr))