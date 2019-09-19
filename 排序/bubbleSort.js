//冒泡排序 o2，稳定
//从第一个元素开始和相邻元素比较，如果相邻元素大就交换
let bubbleSort = function (arr) {
    for (let i = arr.length-1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            let tmp = arr[j]
            if (tmp > arr[j+1]) {
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }
    }
    return arr
}