import "../css/styles.css"
import {firstMessage, delayedMessage} from './message.js'
import myImg from '../img/platzi.png' 
document.write(firstMessage)

delayedMessage()

//--
const img = document.createElement('img')
img.setAttribute('src',myImg)
img.setAttribute('width',20)
img.setAttribute('heigth',20)
document.body.appendChild(img)