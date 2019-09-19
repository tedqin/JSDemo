//获取attribute
let p0 = document.querySelectorAll('p')[0]
p0.getAttribute('attr1') //获取p0上的attr1属性的值
p0.getAttribute('attr1', 'abc') //修改属性
p0.getAttribute('style') //获取style，元素上必须有style才行
p0.getAttribute('style', 'font-size:30px')
