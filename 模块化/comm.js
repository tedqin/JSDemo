//util.js
module.exports = {
    func: function () {
        return 1
    }
}

//a-util.js
let util = require('./util.js')
module.exports = {
    func2: function () {
        return utils()
    }
}