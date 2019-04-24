/* global Event */

(() => {
  const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
  const event = new Event('konamicode')
  let keyBuffer = []

  window.addEventListener(
    'keydown',
    e => {
      keyBuffer = keyBuffer.concat(e.key).slice(-code.length)

      if (keyBuffer.length === code.length && keyBuffer.every((item, i) => item === code[i])) {
        keyBuffer = []
        window.dispatchEvent(event)
      }
    }
  )
})()
