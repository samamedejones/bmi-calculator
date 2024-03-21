import { Modal } from "./modal.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function(event) {
  event.preventDefault()


  const weight = inputWeight.value
  const height = inputHeight.value

  result = IMC(weight, height)

  message = `Seu IMC é de ${result}`
  
  Modal.message.innerText = message
  Modal.open()
  
}

function IMC(peso, altura) {
  return (peso / ((altura / 100) **2)).toFixed(2)
}






