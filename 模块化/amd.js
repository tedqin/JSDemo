//util.js
define(function() {
    return {
        func: function () {
            return 1
        }
    }
})

//a-utils.js
define(['./utils.js'], function(util) {
    return {
        func2: function () {
            return util.func()
        }
    }
})

