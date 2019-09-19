//观察者模式
//1对多

//主题，保存状态，状态变化之后触发所有观察者对象
class Subject {
    constructor () {
        this.state = 0
        this.observers = []
    }
    getState () {
        return this.state
    }
    setState (state) {
        this.state = state
        this.notifyAllObservers ()
    }
    notifyAllObservers () {
        this.observers.forEach (element => {
            element.update()
        })
    }
    attach (element) {
        this.observers.push (element)
    }

}

//观察者
class Observer {
    constructor (name, subject) {
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }

    update () {
        console.log(`${this.name} update, state: ${this.subject.getState()}`)
    }
}

//测试
let s = new Subject()
let o1 = new Observer('o1', s)
let o2 = new Observer('o2', s)

s.setState(1)
s.setState(2)

