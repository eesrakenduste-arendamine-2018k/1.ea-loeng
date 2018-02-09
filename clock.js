// Avalikud muutujad
let clockContainer // = null

window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)

  startClock()

  document
    .querySelector('#size-up')
    .addEventListener('click', sizeUp)

  document
    .querySelector('#size-down')
    .addEventListener('click', sizeDown)

  window.addEventListener('keypress', hideClock)
}

function hideClock (event) {
  console.log(event)
  if (event.key == 'h') {
    clockContainer.style.display = 'none'
    // clockContainer.style.visibility = 'hidden'
  }
}

function sizeUp () {
  console.log('+')
  clockContainer.style.fontSize = 12 + 'px'
}
function sizeDown () {
  console.log('-')
  clockContainer.style.fontSize = '5px'
}

function startClock () {
  updateClock()

  window.setInterval(function () {
    updateClock()
  }, 1000)
}

function updateClock() {
  const date = new Date()

  clockContainer.innerHTML = date  
}