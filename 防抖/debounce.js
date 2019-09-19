//防抖
//防止输入一个就输出一个这样的抖动情况
//设置一个延迟，超过这个延迟不执行输入的情况下，才会执行输出
//也就是输入一堆，停5ms不输入以后，才会输出
function debounce (fn, delay) {
    let timeout
    return function (args) {
        let _this = this
        let _args = args
        clearTimeout(timeout)
    	timout = setTimeout(function (_args, _this) {
            fn.call(_this, _args)
        }, delay)
    }
}

//使用防抖
function print (content) {
    console.log(content)
}

let input = document.getElementById('text')
let debounceInput = debounce(print, 100)
input.addEventListener('keyup', function () {
    debounceAjax(e.target.innerHTML)
})