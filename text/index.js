/*
global Renderium Vector layer
*/

class Text extends Renderium.Component {
  constructor (options) {
    super()

    this.position = options.position
    this.text = options.text
    this.color = options.color
    this.font = options.font
    this.size = options.size

    this._shouldRedraw = true
  }

  shouldRedraw () {
    return this._shouldRedraw
  }

  draw (layer) {
    layer.drawText({
      position: this.position,
      text: this.text,
      color: this.color,
      font: this.font,
      size: this.size
    })

    this._shouldRedraw = false
  }
}

layer.addComponents([
  new Text({
    position: new Vector(100, 100),
    text: 'Sample text',
    color: Renderium.colors.RED,
    font: 'courier',
    size: 16
  }),
  new Text({
    position: new Vector(200, 100),
    text: 'Sample text',
    color: Renderium.colors.GREEN,
    font: 'serif',
    size: 16
  }),
  new Text({
    position: new Vector(345, 100),
    text: 'Sample text',
    color: layer.createGradient({
      start: new Vector(0, 75),
      end: new Vector(0, 125),
      from: Renderium.colors.LIGHT_BLUE,
      to: Renderium.colors.INDIGO
    }),
    font: 'sans-serif',
    size: 36
  })
])
