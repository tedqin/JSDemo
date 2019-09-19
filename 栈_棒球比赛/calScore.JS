let arr = []
let calScore = function (arr) {
	let s
	arr.forEach(item=> {
		switch (item) {
			case 'C': 
				if (s.length) {
					s.pop()
				}
				break
			case 'D':
				let pre = arr.pop()
				s.push(pre, pre*2)
				break
			case '+':
				let pre1 = arr.pop()
				let pre2 = arr.pop()
				s.push(pre2, pre1, pre1 + pre2)
				break
			default:
				s.push(item*1)
		}
	}) 
	return s.reduce((total, num) => {
		return total + num
	})
} 