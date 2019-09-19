//选择排序 on2 不稳定
//从第一个元素开始遍历，把最小的元素和第一个元素交换位置，然后从第二个元素开始遍历
let selectionSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                let tmp = min
                min = arr[j]
                arr[j] = tmp
            }
        }
        arr[i] = min
    }
    return arr
}