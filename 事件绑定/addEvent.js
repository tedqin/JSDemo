//通用事件绑定函数
function bindEvent (elem, type, fn) {
    elem.addEventListener(type, fn)
}

let a1 = document.getElementById('a1')
bindEvent(a1, 'click', function (e) {
    e.preventDefault()
    alert('clicked')
})