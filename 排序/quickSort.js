//快排，nlogn，不稳定
//选定一个基准元素p，把小于p的放到左边，大于p的放到右边
let quickSort = function (arr) {
    if (arr.length < 2) {
        return arr
    } else {
        let p = arr[0]
        let left = []
        let right = []
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < p) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
        return quickSort(left).concat(p, quickSort(right))
    }
}
