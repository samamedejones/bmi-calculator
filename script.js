
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal h2 span'),
  buttonClose: document.querySelector('.modal button.close'),


  open() {
    Modal.wrapper.classList.remove('invisiblle')
  },
  close() {
    Modal.wrapper.classList.add('invisiblle')
    inputWeight.value = ""
    inputHeight.value = ""
    inputWeight.focus()
  }
}

const error = {
  alert: document.querySelector('.alert-error'),

  open(){
    error.alert.classList.add('open')
  },
  close(){
    error.alert.classList.remove('open')
  }
}

form.onsubmit = function(event) {
  event.preventDefault()


  const weight = inputWeight.value
  const height = inputHeight.value

  let showAlertError = notANumber(weight) || notANumber(height)

  if(showAlertError){
    error.open()
    return;
  }

  error.close()
  

  let result = IMC(weight, height)

  let message = `Seu IMC é de ${result}`
  
  Modal.message.innerText = message
  Modal.open()
  
  console.log(message)
}

function notANumber(value){
  return isNaN(value) || value == ""
}

function IMC(peso, altura) {
  return (peso / ((altura / 100) **2)).toFixed(2)
}

Modal.buttonClose.onclick = function(){
  Modal.close()
}

window.addEventListener('keydown', handleClick)
function handleClick(event){
  if (event.key === 'Escape'){
    Modal.close()
  } 
}





