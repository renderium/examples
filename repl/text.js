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
    this.opacity = options.opacity

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
      size: this.size,
      opacity: this.opacity
    })

    this._shouldRedraw = false
  }
}

layer.addComponents([
  new Text({
    position: new Vector(75, 75),
    text: 'Text',
    color: Renderium.colors.RED,
    font: 'courier',
    size: 16,
    opacity: 1,
  }),
  new Text({
    position: new Vector(175, 75),
    text: 'Text',
    color: layer.createGradient({
      start: new Vector(0, 50),
      end: new Vector(0, 100),
      from: Renderium.colors.LIGHT_BLUE,
      to: Renderium.colors.INDIGO
    }),
    font: 'sans-serif',
    size: 48,
    opacity: 1,
  }),
  new Text({
    position: new Vector(275, 75),
    text: 'Text',
    color: Renderium.colors.GREEN,
    font: 'serif',
    size: 16,
    opacity: 0.5,
  })
])
