/*
global Renderium Vector layer
*/

const CIRCUMFERENCE = 2 * Math.PI
const HALF_PI = Math.PI / 2

class Polygon extends Renderium.Component {
  constructor (options) {
    super()

    this.position = options.position
    this.vertices = options.vertices
    this.radius = options.radius
    this.color = options.color
    this.fillColor = options.fillColor
    this.width = options.width

    this.points = []

    this._shouldRedraw = true
  }

  createPolygon (position, radius, vertices) {
    var points = []

    for (var i = 0, theta = HALF_PI; i < vertices; i++) {
      theta += CIRCUMFERENCE / vertices
      points.push(position.add(Vector.fromAngle(theta, radius)))
    }

    return points
  }

  shouldRedraw () {
    return this._shouldRedraw
  }

  onadd () {
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
}

layer.addComponents([
  new Polygon({
    position: new Vector(100, 100),
    vertices: 6,
    radius: 25,
    color: Renderium.colors.RED,
    width: 1
  }),
  new Polygon({
    position: new Vector(200, 100),
    vertices: 6,
    radius: 25,
    color: Renderium.colors.GREEN,
    width: 5
  }),
  new Polygon({
    position: new Vector(300, 100),
    vertices: 6,
    radius: 25,
    color: Renderium.colors.GREEN,
    fillColor: layer.createGradient({
      start: new Vector(0, 75),
      end: new Vector(0, 125),
      from: Renderium.colors.LIGHT_BLUE,
      to: Renderium.colors.INDIGO
    }),
    width: 2
  }),
  new Polygon({
    position: new Vector(425, 100),
    vertices: 6,
    radius: 50,
    color: Renderium.colors.YELLOW,
    width: 2
  })
])
