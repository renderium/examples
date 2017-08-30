/*
global Renderium Vector layer
*/

class Text extends Renderium.Component {
  constructor (options) {
    super()

    this.text = options.text
    this.color = options.color
    this.font = options.font
    this.size = options.size

    this.position = new Vector(0, 0)

    this._shouldRedraw = true
  }

  shouldRedraw () {
    return this._shouldRedraw
  }

  plot (layer) {
    this.position = new Vector(layer.width / 2, layer.height / 2)
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

  get color () {
    return this._color
  }

  set color (color) {
    this._color = color
    this._shouldRedraw = true
  }

  get font () {
    return this._font
  }

  set font (font) {
    this._font = font
    this._shouldRedraw = true
  }

  get size () {
    return this._size
  }

  set size (size) {
    this._size = size
    this._shouldRedraw = true
  }
}

layer.addComponents([
  new Text({
    text: 'Sample text',
    color: Renderium.colors.RED,
    font: 'courier',
    size: 16
  })
])
