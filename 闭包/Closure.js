let isFirstLoad = function () {
    let _list = []
    return function (el) {
        if (_list.indexOf(el) >= 0) {
            return false
        } else {
            _list.push(el)
            return true
        }
    }
}

let firstLoad = isFirstLoad()
isFirstLoad(10) //true
isFirstLoad(10) //false
isFirstLoad(20) //true