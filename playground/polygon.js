/*
global Renderium Vector layer
*/

const DOUBLE_PI = 2 * Math.PI
const HALF_PI = Math.PI / 2

class Polygon extends Renderium.Component {
  constructor (options) {
    super()

    this.vertices = options.vertices
    this.radius = options.radius
    this.color = options.color
    this.fillColor = options.fillColor
    this.width = options.width

    this.position = new Vector()
    this.points = []

    this._shouldRedraw = true
  }

  createPolygon (position, radius, vertices) {
    var points = []

    for (var i = 0, theta = HALF_PI; i < vertices; i++) {
      theta += DOUBLE_PI / vertices
      points.push(position.add(Vector.fromAngle(theta, radius)))
    }

    return points
  }

  shouldRedraw () {
    return this._shouldRedraw
  }

  plot (layer) {
    this.position = new Vector(layer.width / 2, layer.height / 2)
    this.points = this.createPolygon(this.position, this.radius, this.vertices)
  }

  draw (layer) {
    layer.drawPolygon({
      points: this.points,
      color: this.color,
      fillColor: this.fillColor,
      width: this.width
    })

    this._shouldRedraw = false
  }

  get vertices () {
    return this._vertices
  }

  set vertices (vertices) {
    this._vertices = vertices
    this._shouldRedraw = true
  }

  get radius () {
    return this._radius
  }

  set radius (radius) {
    this._radius = radius
    this._shouldRedraw = true
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
}

layer.addComponents([
  new Polygon({
    vertices: 6,
    radius: 25,
    color: Renderium.colors.RED,
    fillColor: void 0,
    width: 1
  })
])
