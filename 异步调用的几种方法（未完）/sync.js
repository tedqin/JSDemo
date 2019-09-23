//异步编程的4种方法
//第一种：直接用回掉函数
let f1 = function(callback) {
    callback()
    setTimeout(function() {
        console.log("f1")
    }, 2000)
}
let f2 = function() {
    console.log("f2")
}
let f3 = function() {
    console.log("f3")
}
f1(f2)
f3()

//第二种：事件监听，给f1绑定事件done，一旦trigger就出发done事件执行f2
let f2 = function() {
    console.log("f2")
}
let f1 = function() {
    setTimeout(function() {
        console.log("f1")
        f1.trigger('done')
    }, 2000)
}
f1.on('done', f2)
f1()

//第三种：发布订阅模式，f2订阅jquery中心的done事件，一旦f1执行完就发布done事件，f2执行
let f2 = function() {
    console.log("f2")
}
jQuery.subscibe('done', f2)
let f1 = function() {
    setTimeout(function() {
        console.log("f1")
        jQuery.public('done')
    }, 2000)
}
f1()
//取消订阅
jQuery.unsubscribe('done', f2)

//第四种：promise

