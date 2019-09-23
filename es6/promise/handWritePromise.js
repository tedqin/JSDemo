//面试题 手写一个promise
const PENDING = 'pending'
const RESOLVING = 'resolving'
const REJECTING = 'rejecting'

function myPromise(param) {
    //定义参数
    const that = this
    that.state = PENDING
    that.value = null
    that.resolvedCallbacks = []
    that.rejectedCallbacks = []

    //定义resolve和reject
    function resolve(value) {
        if (that.state === PENDING) {
            that.state = RESOLVING
            that.value = value
            that.resolvedCallbacks.map(cb => cb(that.value))
        }
    }
    function reject(value) {
        if (that.state === PENDING) {
            that.state = REJECTING
            that.value = value
            that.rejectedCallbacks.map(cb => cb(that.value))
        }
    }

    //执行传入的参数
    try {
        param(resolve, reject)
    } catch(e) {
        reject(e)
    }
}

//定义.then
myPromise.prototype.then = function(onResolved, onRejected) {
    const that = this
    onResolved = typeof onResolved === 'function' ? onResolved : function(value) {resolve(value)}
    onRejected = typeof onRejected === 'function' ? onRejected : function(err) {thorw err}

    if (that.state === PENDING) {
        that.resolvedCallbacks.push(onResolved)
        that.rejectedCallbacks.push(onRejected)
    }

    if (that.state === RESOLVING) {
        onResolved(that.value)
    }

    if (that.state === REJECTING) {
        onRejected(that.value)
    }
}