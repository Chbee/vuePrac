const { defineConfig } = require('@vue/cli-service')
const { merge } = require('webpack-merge')

const deviceConfig = require('./configs/device.config')


// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false
// })

module.exports = merge(deviceConfig, {
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api/v1': {
                target: process.env.VUE_APP_API_BASE_URL
            }
        }
    }
})