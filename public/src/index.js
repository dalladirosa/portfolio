import jump from 'jump.js'

let button = document.getElementById('scroll')

button.addEventListener('click', () => {
  jump('.about')
})

// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement
    this.words = words
    this.wordIndex = 0
    this.wait = parseInt(wait, 10)
    this.type()
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length
    // Get full text of current word
    const fullTxt = this.words[current]

    // Insert txt into element
    this.txtElement.innerHTML = `
    <span class="heading-primary--sub">${fullTxt}</span>`

    // Initial Type Speed
    let typeSpeed = 300
    // Make pause at end
    typeSpeed = this.wait

    this.wordIndex++

    setTimeout(() => this.type(), typeSpeed)
  }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init)

// Init App
function init() {
  const txtElement = document.querySelector('.heading-primary--sub')
  const words = JSON.parse(txtElement.getAttribute('data-words'))
  const wait = txtElement.getAttribute('data-wait')
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait)
}
