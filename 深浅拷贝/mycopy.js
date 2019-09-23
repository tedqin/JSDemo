//.................浅拷贝.................
let arr = [1,2,3,4]
let obj = {k1: {k11:11, k22:22}, k2: 2}

//直接遍历
let newArray=[]
for (i in arr) {
    newArray.push(arr[i])
}

//对数组，slice() concat()
newArray = arr.slice()
newArray = arr.concat()

//对对象，Object.assign()
copyObj = Object.assign({}, obj)

//................深拷贝.................
//简单深拷贝
let obj = [{name:'ted', age:23}, {name2:'teddy', age:'secret'}]
let copyObj = JSON.parse(JSON.strinify(obj))
//递归深拷贝
function myCopy(obj) {
    let copyObj = obj.constructor === Array ? [] : {}
    for (let i in obj) {
        if (typeof obj[i] === 'object') {
            copyObj[i] = myCopy(obj[i])
        } else {
            copyObj[i] = obj[i]
        }
    }
    return copyObj
}