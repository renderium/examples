/*
global Renderium Vector layer
*/

class Rect extends Renderium.Component {
  constructor (options) {
    super()

    this.position = options.position
    this.color = options.color
    this.fillColor = options.fillColor
    this.width = options.width
    this.height = options.height
    this.strokeWidth = options.strokeWidth
    this.opacity = options.opacity
    this.lineDash = options.lineDash

    this._shouldRedraw = true
  }

  shouldRedraw () {
    return this._shouldRedraw
  }

  draw (layer) {
    layer.drawRect({
      position: this.position,
      color: this.color,
      fillColor: this.fillColor,
      width: this.width,
      height: this.height,
      strokeWidth: this.strokeWidth,
      opacity: this.opacity,
      lineDash: this.lineDash
    })

    this._shouldRedraw = false
  }
}

layer.addComponents([
  new Rect({
    position: new Vector(50, 50),
    color: Renderium.colors.RED,
    fillColor: void 0,
    width: 50,
    height: 50,
    strokeWidth: 1,
    opacity: 1,
    lineDash: []
  }),
  new Rect({
    position: new Vector(150, 50),
    color: void 0,
    fillColor: layer.createGradient({
      start: new Vector(0, 50),
      end: new Vector(0, 100),
      from: Renderium.colors.LIGHT_BLUE,
      to: Renderium.colors.INDIGO
    }),
    width: 50,
    height: 50,
    strokeWidth: 2,
    opacity: 1,
    lineDash: []
  }),
  new Rect({
    position: new Vector(250, 25),
    color: Renderium.colors.YELLOW,
    fillColor: void 0,
    width: 100,
    height: 100,
    strokeWidth: 2,
    opacity: 1,
    lineDash: []
  }),
  new Rect({
    position: new Vector(400, 50),
    color: Renderium.colors.GREEN,
    fillColor: void 0,
    width: 50,
    height: 50,
    strokeWidth: 5,
    opacity: 0.5,
    lineDash: []
  }),
  new Rect({
    position: new Vector(500, 50),
    color: Renderium.colors.PURPLE,
    fillColor: void 0,
    width: 50,
    height: 50,
    strokeWidth: 5,
    opacity: 1,
    lineDash: [10, 5]
  })
])
