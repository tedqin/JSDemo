//节流
//在ns内执行一次事件
//不停的输入，也会在一段时间后输出一次

//时间戳版
function throttle(fn, delay) {
	let previous = 0
	return function (args) {
		let _args = args
		let _this = this
		let now = Date.now()
		if (now-previous > wait) {
			fn.call(_this, _args)
			previous = now
		}
	}
}

//定时器版
function throttle (fn, delay) {
	let timeout
	return function (args) {
		let _args = args
		let _this = this
		if (!timeout) {
			timeout = setTimeout(function(_args, _this) {
				fn.call(_this, _args)
			}, delay)
		}
	}
}

//使用节流
function print (content) {
    console.log(content)
}

let input = document.getElementById('text')
let throttleInput = throttle(print, 100)
input.addEventListener('keyup', function () {
    throttleInput(e.target.innerHTML)
})