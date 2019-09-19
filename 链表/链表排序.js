class Node {
	constrcutor (value) {
		this.val = value
		let next = undefied	
	}

}

class NodeList {
	constrcutor (arr) {
		let head = new Node(null)
		let next = head
		arr.forEach (item => {
			next.next = new Node (item)
			next = next.next
		})
		return head
	}
	
}

let swap = function (p, q) {
	let tmp = p.val
	p.val = q.val
	q.val = tmp
}