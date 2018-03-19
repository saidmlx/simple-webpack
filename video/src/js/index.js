import "../css/styles.css"
import {firstMessage, delayedMessage} from './message.js'
import myImg from '../img/platzi.png' 
import videoMeli from '../video/IMG_4247.m4v'
document.write(firstMessage)

delayedMessage()

//--
const img = document.createElement('img')
img.setAttribute('src',myImg)
img.setAttribute('width',20)
img.setAttribute('heigth',20)
document.body.appendChild(img)

//--
const video = document.createElement('video')
video.setAttribute('src',videoMeli)
video.setAttribute('autoplay',true)
video.setAttribute('width',400);
video.setAttribute('controls',true)
document.body.appendChild(video)