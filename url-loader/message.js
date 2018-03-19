import renderToDom from './render-to-dom'
import makeMessage from './make-message'

const waitTime = new Promise((todoOk, todoMal) => {
    setTimeout(()=>{
        todoOk("han pasado 3 seg")
    },3000)
})

module.exports = {
    firstMessage:"Hi inside my module",
    delayedMessage: async () => {
        const message = await waitTime;
        renderToDom( makeMessage(message))
    }
}