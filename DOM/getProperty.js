//获取property
let p0 = document.quertSelectorAll('p')[0]

console.log(p0.style.width) //获取样式
p0.style.width = '200px' //修改样式
console.log(p0.className) //获取class
p0.className = 'p0' //修改class

console.log(p0.nodeName) //p
console.log(p0.nodeType) //1 