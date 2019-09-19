//获取DOM节点
//get
let id1 = document.getElementById('id1') //id

let divs = document.getElementByTagName('div') //元素集合
let div0 = document.getElementByTagName('div')[0] //元素

let classes = document.getElementsByClassName('class1') //class集合
let class0 = document.getElementsByClassName('class1')[0] //class

//query
let id1 = document.querySelector('#id1') //id

let divs = document.querySelectorAll('div') //元素集合
let div0 = document.querySelector('div') //元素，选择第一个div
let div0 = document.querySelector('div')[0] //元素，选择第一个div

let classes = document.querySelectorAll('.class0') //class集合
let class0 = document.querySelector('class0') //class，选择第一个class
let class0 = document.querySelector('class0')[0] //class，选择第一个class