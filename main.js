const poop = document.querySelector('#poop')
const mac = document.querySelector('#mac')

function movePoop () {
  poop.style.top = Math.random() * innerHeight + 'px'
  poop.style.left = Math.random() * innerWidth + 'px'
}

function waitAsec() {
  setTimeout(movePoop, 250)
}

function changePoop () {
  mac.play()
  document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  poop.setAttribute('src','images/happy.png')
}

function keyWasPressed(e) {
  if (e.key == 'Enter') {
    document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  }
}

poop.addEventListener('mouseover', waitAsec)
poop.addEventListener('click', changePoop)

window.addEventListener('keypress', keyWasPressed)
