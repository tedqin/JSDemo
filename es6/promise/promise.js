//promise异步加载图片的例子
function imageLoad(url) {
    return new Promise(function(resolve, reject) {
        let img = new Image()
        img.onload = function() {
            resolve(img)
        }
        img.onerror = function() {
            reject(new Error("onload error" + url))
        }
    })
}

let url = "http://abc.com/api/demo.jpg"
imgLoad(url).then(function() {
    alert("load success")
})

//promise实现ajax
//.catch方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数
//一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），而是用catch方法代替.then的第二个参数。
function getJSON(url) {
    return new Promise(function(resolve, reject) {
        let client = new XMLHttpRequest()
        client.open("GET", url)
        client.onreadystatechange() = function() {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(this.responseText)
                }
            } else {
                reject(new Error("ajax error" + this.statusText))
            }
        }
        client.send()
    })
}

let url = "http://abc.com/api/demo.json"
getJSON(url).then(function(response) {
    console.log("ajax sucess" + response)
}, function(error) {
    console.log("ajax error" + error)
}).catch(function(error) {
    console.log("resolve error" + error)
})