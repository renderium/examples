/*
global Renderium Vector layer
*/

class Circle extends Renderium.Component {
  constructor (options) {
    super()
    this.position = options.position
    this.color = options.color
    this.fillColor = options.fillColor
    this.radius = options.radius
    this.width = options.width
    this.opacity = options.opacity
    this.lineDash = options.lineDash

    this._shouldRedraw = true
  }

  shouldRedraw () {
    return this._shouldRedraw
  }

  draw (layer) {
    layer.drawCircle({
      position: this.position,
      color: this.color,
      fillColor: this.fillColor,
      radius: this.radius,
      width: this.width,
      opacity: this.opacity,
      lineDash: this.lineDash
    })

    this._shouldRedraw = false
  }
}

layer.addComponents([
  new Circle({
    position: new Vector(75, 75),
    color: Renderium.colors.RED,
    fillColor: void 0,
    radius: 25,
    width: 1,
    opacity: 1,
    lineDash: []
  }),
  new Circle({
    position: new Vector(175, 75),
    color: void 0,
    fillColor: layer.createGradient({
      start: new Vector(0, 50),
      end: new Vector(0, 100),
      from: Renderium.colors.LIGHT_BLUE,
      to: Renderium.colors.INDIGO
    }),
    radius: 25,
    width: 2,
    opacity: 1,
    lineDash: []
  }),
  new Circle({
    position: new Vector(300, 75),
    color: Renderium.colors.YELLOW,
    fillColor: void 0,
    radius: 50,
    width: 2,
    opacity: 1,
    lineDash: []
  }),
  new Circle({
    position: new Vector(425, 75),
    color: Renderium.colors.GREEN,
    fillColor: void 0,
    radius: 25,
    width: 5,
    opacity: 0.5,
    lineDash: []
  }),
  new Circle({
    position: new Vector(525, 75),
    color: Renderium.colors.PURPLE,
    fillColor: void 0,
    radius: 25,
    width: 5,
    opacity: 1,
    lineDash: [10, 5]
  })
])
