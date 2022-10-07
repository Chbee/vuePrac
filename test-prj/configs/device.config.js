const isMobile = process.env.MOBILE || false

const title = isMobile ? 'Mobile Page' : 'Web Page'
const template = 'public/index.html'
const entry = isMobile ? 'src/main.mob.js' : 'src/main.js'

console.log('entry', entry)

module.exports = {
    pages: {
        index: {
            entry, 
            template,
            filename: 'index.html',
            title,
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    }
}