/*
global Renderium Animation Vector layer
*/

class Arc extends Renderium.Component {
  constructor (options) {
    super()
    this.color = options.color
    this.radius = options.radius
    this.theta = options.theta
    this.length = options.length
    this.width = options.width

    this._shouldRedraw = true
  }

  shouldRedraw () {
    return this._shouldRedraw
  }

  draw (layer) {
    var position = new Vector(layer.width / 2, layer.height / 2)
    
    layer.drawArc({
      position: position,
      color: this.color,
      radius: this.radius,
      startAngle: this.theta,
      endAngle: this.theta + this.length,
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

  get radius () {
    return this._radius
  }

  set radius (radius) {
    this._radius = radius
    this._shouldRedraw = true
  }

  get theta () {
    return this._theta
  }

  set theta (theta) {
    this._theta = theta
    this._shouldRedraw = true
  }
  
  get length () {
    return this._length
  }

  set length (length) {
    this._length = length
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
  new Arc({
    color: Renderium.colors.RED,
    radius: 25,
    theta: 0,
    length: 1.5 * Math.PI,
    width: 1
  })
])
