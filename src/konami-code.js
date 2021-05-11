/* global Event */

(() => {
  const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
  const event = new Event('konamicode')
  let keyStrokeCounter = 0

  window.addEventListener(
    'keydown',
    e => {
      if (e.key !== code[keyStrokeCounter] || (++keyStrokeCounter === code.length && window.dispatchEvent(event))) {
        keyStrokeCounter = 0
      }
    }
  )
})()
