/*
global Renderium Animation Vector
*/

var raf = window.requestAnimationFrame

raf(function loop (time) {
  Renderium.digest(time)
  Animation.animate(time)
  raf(loop)
})

var renderer = window.renderer = new Renderium({
  el: document.getElementById('root')
})

var layer = window.layer = new Renderium.WebglLayer({
  Vector
})

renderer.addLayer(layer)

Renderium.spawn(renderer)
