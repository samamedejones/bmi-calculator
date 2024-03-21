export const Modal = {

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

Modal.buttonClose.onclick = function(){
  Modal.close()
}

window.addEventListener('keydown', handleClick)
function handleClick(event){
  if (event.key === 'Escape'){
    Modal.close()
  } 
}