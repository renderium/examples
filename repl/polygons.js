/*
global Renderium Vector layer
*/

const DOUBLE_PI = 2 * Math.PI
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
    this.opacity = options.opacity
    this.lineDash = options.lineDash

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

  onadd () {
    this.points = this.createPolygon(this.position, this.radius, this.vertices)
  }

  draw (layer) {
    layer.drawPolygon({
      points: this.points,
      color: this.color,
      fillColor: this.fillColor,
      width: this.width,
      opacity: this.opacity,
      lineDash: this.lineDash
    })

    this._shouldRedraw = false
  }
}

layer.addComponents([
  new Polygon({
    position: new Vector(75, 75),
    vertices: 6,
    radius: 25,
    color: Renderium.colors.RED,
    fillColor: void 0,
    width: 1,
    opacity: 1,
    lineDash: []
  }),
  new Polygon({
    position: new Vector(175, 75),
    vertices: 6,
    radius: 25,
    color: void 0,
    fillColor: layer.createGradient({
      start: new Vector(0, 50),
      end: new Vector(0, 100),
      from: Renderium.colors.LIGHT_BLUE,
      to: Renderium.colors.INDIGO
    }),
    width: 2,
    opacity: 1,
    lineDash: []
  }),
  new Polygon({
    position: new Vector(300, 75),
    vertices: 6,
    radius: 50,
    color: Renderium.colors.YELLOW,
    fillColor: void 0,
    width: 2,
    opacity: 1,
    lineDash: []
  }),
  new Polygon({
    position: new Vector(425, 75),
    vertices: 6,
    radius: 25,
    color: Renderium.colors.GREEN,
    fillColor: void 0,
    width: 5,
    opacity: 0.5,
    lineDash: []
  }),
  new Polygon({
    position: new Vector(525, 75),
    vertices: 6,
    radius: 25,
    color: Renderium.colors.PURPLE,
    fillColor: void 0,
    width: 5,
    opacity: 1,
    lineDash: [10, 5]
  })
])
