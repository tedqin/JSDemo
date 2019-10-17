//----------------------------1. 创建链表----------------------------
//申明节点
class Node {
	constructor (value) {
		this.val = value
		this.next = undefined	
	}
}

//申明链表
class NodeList {
	constructor (arr) {
		//声明链表的头节点
		let head = new Node(arr.shift())
		let next = head
		arr.forEach(item => {
			next.next = new Node(item)
			next = next.next
		})
		//constructor中return可以改变this的指向，this只想head
		return head
	}
}

// //链表排序 leetcode148 快排
// //q指针指向头元素，让p指针左侧的小于基准元素，p指针右侧的大于基准元素

// //交换两个节点的值
// let swap = function (p, q) {
// 	let tmp = p.val
// 	p.val = q.val
// 	q.val = tmp
// }

//----------------------------2. 判断链表是否闭环 leetcode141----------------------------
//用快慢双指针，判断fast和slow是否在某一时间会重合（或者fast在slow后面了），就说明有环
function isCircle(head) {
	let slow = head
	let fast = head.next
	while(1) {
		if(!fast || !fast.next) {
			return false
		} else if(fast === slow || fast.next === slow) {
			return true
		} else {
			//继续循环
			slow = slow.next
			fast = fast.next.next
		}
	}
}
//测试
let head = new NodeList([6, 1, 2, 5, 7, 9])
head.next.next.next.next.next.next = head.next
console.log(isCircle(head)) //true

//----------------------------3. 判断两个链表是否相交----------------------------
//因为两个链表一旦相交，则交点后续的链表都是相同的，所以只可能是两个单链表相交或者两个有环链表相交
//只需要判断尾节点地址是否相同即可
function isCross(list1, list2) {
	if (!list1 || !list2) {
		return false
	}
	while(list1.next) {
		list1 = list1.next
	}
	while(list2.next) {
		list2 = list2.next
	}
	if (list1.val === list2.val) {
		return true
	} else {
		return false
	}
}

let list1 = new NodeList([1,1,3,4,5])
let list2 = new NodeList([4,2,3,4,5])
console.log(isCross(list1, list2))