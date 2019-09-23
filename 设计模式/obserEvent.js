//观察者模式实现一个事件监听和触发
var Event = {
    // 通过on接口监听事件eventName
    // 如果事件eventName被触发，则执行callback回调函数
    on: function(eventName, callback) {
        if (!this.handles) {
            this.handles = {};
        }
        if (!this.handles[eventName]) {
            this.handles[eventName] = [];
        }
        this.handles[eventName].push(callback);
    },
    // 触发事件 eventName
    emit: function(eventName) {
        if (this.handles[arguments[0]]) {
            for (var i = 0; i < this.handles[arguments[0]].length; i++) {
                //执行事件
                this.handles[arguments[0]][i](arguments[1]);
            }
        }
    }
}

Event.on('test', function (result) {
   console.log(result);
})
Event.on('test', function () {
   console.log('test');
})
Event.emit('test', 'hello world')// 输出 'hello world' 和 'test'
