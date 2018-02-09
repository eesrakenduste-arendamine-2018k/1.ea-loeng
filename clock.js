// Avalikud muutujad
let clockContainer // = null
let changeColorButton 


window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)
  changeColorButton = document.querySelector('#change-color')

  startClock()

  changeColorButton.addEventListener('click', changeBackgroundColor)
  window.addEventListener('mousemove', changeBackgroundColor)
}

function changeBackgroundColor () {
  console.log('muudan värvi')

  const r = Math.round(Math.random() * 255)
  const g = Math.round(Math.random() * 255)
  const b = Math.round(Math.random() * 255)

  clockContainer.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
}

function startClock () {
  updateClock()

  window.setInterval(function () {
   updateClock()
  }, 1000)
}

function updateClock () {
  const date = new Date()

  clockContainer.innerHTML = date
}