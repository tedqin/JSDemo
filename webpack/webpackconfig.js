var path = require('path')
var webpack = require('require')

module.exports = {
    context: path.resolve(__dirname, './src'),
    extry: {
        app: './app.js'
    }.
    output: {
        path: path.resolve(__dirname, './dist')
        filename: 'bundle.js'
    }
}