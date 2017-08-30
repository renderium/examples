/*
global Renderium Vector layer
*/

class Circle extends Renderium.Component {
  constructor (options) {
    super()
    this.color = options.color
    this.fillColor = options.fillColor
    this.radius = options.radius
    this.width = options.width

    this.position = new Vector()

    this._shouldRedraw = true
  }

  shouldRedraw () {
    return this._shouldRedraw
  }

  plot (layer) {
    this.position = new Vector(layer.width / 2, layer.height / 2)
  }

  draw (layer) {
    layer.drawCircle({
      position: this.position,
      color: this.color,
      fillColor: this.fillColor,
      radius: this.radius,
      width: this.width
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

  get radius () {
    return this._radius
  }

  set radius (radius) {
    this._radius = radius
    this._shouldRedraw = true
  }

  get width () {
    return this._width
  }

  set width (width) {
    this._width = width
    this._shouldRedraw = true
  }
}

layer.addComponents([
  new Circle({
    color: Renderium.colors.RED,
    fillColor: void 0,
    radius: 25,
    width: 1
  })
])
