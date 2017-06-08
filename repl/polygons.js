/*
global Renderium Vector layer
*/

class Polygon extends Renderium.Component {
  constructor (options) {
    super()

    this.position = options.position
    this.radius = options.radius
    this.color = options.color
    this.fillColor = options.fillColor
    this.width = options.width

    this.points = []

    this._shouldRedraw = true
  }

  createPolygon (position, radius) {
    return [
      position.add(Vector.fromAngle(-Math.PI / 2, radius)),
      position.add(Vector.fromAngle(-Math.PI / 6, radius)),
      position.add(Vector.fromAngle(Math.PI / 6, radius)),
      position.add(Vector.fromAngle(Math.PI / 2, radius)),
      position.add(Vector.fromAngle(Math.PI - Math.PI / 6, radius)),
      position.add(Vector.fromAngle(Math.PI + Math.PI / 6, radius))
    ]
  }

  shouldRedraw () {
    return this._shouldRedraw
  }

  onadd () {
    this.points = this.createPolygon(this.position, this.radius)
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
    radius: 25,
    color: Renderium.colors.RED,
    width: 1
  }),
  new Polygon({
    position: new Vector(200, 100),
    radius: 25,
    color: Renderium.colors.GREEN,
    width: 5
  }),
  new Polygon({
    position: new Vector(300, 100),
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
    radius: 50,
    color: Renderium.colors.YELLOW,
    width: 2
  })
])
