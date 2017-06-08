/*
global Renderium Vector layer
*/

class Rect extends Renderium.Component {
  constructor (options) {
    super()

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
    var x = layer.width / 2 - this.width / 2
    var y = layer.height / 2 - this.height / 2
    var position = new Vector(x, y)

    layer.drawRect({
      position: position,
      color: this.color,
      fillColor: this.fillColor,
      width: this.width,
      height: this.height,
      strokeWidth: this.strokeWidth
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

  get fillColor () {
    return this._fillColor
  }

  set fillColor (fillColor) {
    this._fillColor = fillColor
    this._shouldRedraw = true
  }

  get width () {
    return this._width
  }

  set width (width) {
    this._width = width
    this._shouldRedraw = true
  }

  get height () {
    return this._height
  }

  set height (height) {
    this._height = height
    this._shouldRedraw = true
  }

  get strokeWidth () {
    return this._strokeWidth
  }

  set strokeWidth (strokeWidth) {
    this._strokeWidth = strokeWidth
    this._shouldRedraw = true
  }
}

layer.addComponents([
  new Rect({
    color: Renderium.colors.RED,
    width: 50,
    height: 50,
    strokeWidth: 1
  })
])
