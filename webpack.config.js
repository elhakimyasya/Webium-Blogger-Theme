const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        scripts: './src/assets/scripts/scripts.js',
    },
    output: {
        path: path.resolve(__dirname, './build/scripts'),
        filename: '[name].js'
    },
    watch: false
}