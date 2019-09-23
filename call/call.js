//面试题，手动实现call
Functiom.prototype.call = function(context) {
     //将当前定义的方法绑定在cxt.func上
     let cxt = context|window
     let cxt.func = this
     //定义args
     let args = Array.from(arguments).slice(1)
     //定义res
     let res = args.length > 1 ? cxt.func(...args) : cxt.func()
     delete cxt.func
     return res
}

//手动实现apply
Functiom.prototype.apply = function(context) {
     //将当前定义的方法绑定在cxt.func上
     let cxt = context|window
     let cxt.func = this
     //定义res
     let res = arguments[1] ? cxt.func(...arguments[1]) : cxt.func()
     delete cxt.func
     return res
}

//手动实现bind
Function.prototype.bind = function(context) {
    //深拷贝
    const cxt = JSON.parse(JSON.strinify(context))||window
    cxt.func = this
    const args = Array.from(arguments).slice(1)
    //bind返回一个函数，等待调用
    return function() {
        const allArgs = args.concat(Array.from(arguments))
        return allArgs.length > 0 ? cxt.func(...allArgs) : cxt.func()
    }
}