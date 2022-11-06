import pelican from './images/pelican.jpeg'
import script from './assets/js/script.js'
import style from './assets/css/master.css'
import sass from './assets/scss/master.scss'

let image = document.createElement('img')
image.src = pelican
document.body.append(image)

console.log('index.js')
