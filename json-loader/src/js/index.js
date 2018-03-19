import "../css/styles.css"
import {firstMessage, delayedMessage} from './message.js'
import myImg from '../img/platzi.png' 
import data from './products.json'
import renderToDom from './render-to-dom'


document.write(firstMessage)

delayedMessage()

//--
const img = document.createElement('img')
img.setAttribute('src',myImg)
img.setAttribute('width',20)
img.setAttribute('heigth',20)
document.body.appendChild(img)

//--
console.info(data)
data.products.forEach(item => {
    const element = document.createElement("li")
    element.textContent = item.name
    renderToDom(element)
});