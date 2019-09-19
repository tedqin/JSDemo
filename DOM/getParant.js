//获取父元素和子元素
let div1 = getElementById(div1)
let parent = div1.parentElement
let child = div1.childNodes
//删除第一个子元素
div1.removeChild(child[0])