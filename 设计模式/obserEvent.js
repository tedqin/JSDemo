//观察者模式实现一个事件监听和触发
var Event = {
    // 通过on接口监听事件eventName
    // 如果事件eventName被触发，则执行callback回调函数
    handles: {},
    add: function(eventName, callback) {
        if (!this.handles[eventName]) {
            this.handles[eventName] = [];
        }
        this.handles[eventName].push(callback);
    },
    // 触发事件 eventName
    emit: function(eventName) {
        let target = this.handles[eventName]
        for (let i = 0; i < target.length; i++) {
            target[i]()
        }
    },
    //删除事件
    remove: function(eventName, callbacks) {
        let target = this.handles[eventName]
        let id = target.indexOf(callbacks)
        target.splice(id, 1)
    }
}

Event.add('test', function () {
   console.log("t1");
})
Event.add('test', function () {
   console.log('t2');
})
Event.emit('test')// 输出 't1' 和 't2'

Event.remove('test', function () {
   console.log("t2")
})
Event.emit('test')// 输出 't1'
