var raf = window.requestAnimationFrame

raf(function loop (time) {
  Canvas.digest(time)
  raf(loop)
})

var renderer = window.renderer = new Canvas({
  el: document.body
})

var component = new Component(renderer)

window.onload = function () {
  var gui = dat.GUI()

  component.options.forEach(option => {
    switch (option.type) {
      case 'color': {
        gui.addColor(component, option.name)
        break
      }
      default: {
        gui.add(component, option.name, option.min, option.max)
      }
    }
  })
}
