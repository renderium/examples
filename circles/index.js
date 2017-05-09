/*
global Renderium Animation Vector layer
*/

class Circle extends Renderium.Component {
  constructor (options) {
    super()
    this.position = options.position
    this.color = options.color
    this.fillColor = options.fillColor
    this.radius = options.radius
    this.width = options.width
    this.duration = options.duration

    this.layerWidth = 0

    this._position = this.position.copy()
    this._shouldRedraw = true

    this.animation = new Animation({
      duration: this.duration,
      handler: this._hanlder.bind(this)
    })
    this.animation.queue(this.animation)
  }

  shouldRedraw () {
    return this._shouldRedraw
  }

  onadd (layer) {
    this.animation.start()
  }

  onremove (layer) {
    this.animation.cancel()
  }

  plot (layer, time) {
    this.layerWidth = layer.width
    this.animation.animate(time)
  }

  draw (layer) {
    layer.drawCircle({
      position: this._position,
      color: this.color,
      fillColor: this.fillColor,
      radius: this.radius,
      width: this.width
    })

    this._shouldRedraw = false
  }

  _hanlder (t) {
    this._position.x = (this.position.x + this.layerWidth * t) % this.layerWidth
    this._shouldRedraw = true
  }
}

layer.addComponents([
  new Circle({
    position: new Vector(100, 100),
    color: Renderium.colors.RED,
    fillColor: void 0,
    radius: 25,
    width: 1,
    duration: 3000
  }),
  new Circle({
    position: new Vector(225, 100),
    color: void 0,
    fillColor: layer.createGradient({
      start: new Vector(0, 75),
      end: new Vector(0, 125),
      from: Renderium.colors.LIGHT_BLUE,
      to: Renderium.colors.INDIGO
    }),
    radius: 25,
    width: 2,
    duration: 3000
  }),
  new Circle({
    position: new Vector(350, 100),
    color: Renderium.colors.GREEN,
    fillColor: void 0,
    radius: 25,
    width: 5,
    duration: 3000
  }),
  new Circle({
    position: new Vector(475, 100),
    color: Renderium.colors.YELLOW,
    fillColor: void 0,
    radius: 50,
    width: 2,
    duration: 3000
  })
])
