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
      strokeWidth: this.strokeWidth
    })

    this._shouldRedraw = false
  }
}

layer.addComponents([
  new Rect({
    position: new Vector(75, 75),
    color: Renderium.colors.RED,
    width: 50,
    height: 50,
    strokeWidth: 1
  }),
  new Rect({
    position: new Vector(175, 75),
    color: Renderium.colors.GREEN,
    width: 50,
    height: 50,
    strokeWidth: 5
  }),
  new Rect({
    position: new Vector(275, 75),
    fillColor: layer.createGradient({
      start: new Vector(0, 75),
      end: new Vector(0, 125),
      from: Renderium.colors.LIGHT_BLUE,
      to: Renderium.colors.INDIGO
    }),
    width: 100,
    height: 50,
    strokeWidth: 5
  }),
  new Rect({
    position: new Vector(415, 50),
    color: Renderium.colors.YELLOW,
    width: 80,
    height: 100,
    strokeWidth: 2
  })
])
