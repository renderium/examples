/*
global Renderium Vector layer
*/

class Polyline extends Renderium.Component {
  constructor (options) {
    super()

    this.position = options.position
    this.color = options.color
    this.width = options.width
    this.lineDash = options.lineDash

    this.points = []

    this._shouldRedraw = true
  }

  createPolyline (position) {
    return [
      position.sub(new Vector(Math.round(50 * Math.random() - 25), 40)),
      position.sub(new Vector(Math.round(50 * Math.random() - 25), 20)),
      position,
      position.add(new Vector(Math.round(50 * Math.random() - 25), 20)),
      position.add(new Vector(Math.round(50 * Math.random() - 25), 40))
    ]
  }

  shouldRedraw () {
    return this._shouldRedraw
  }

  onadd () {
    this.points = this.createPolyline(this.position)
  }

  draw (layer) {
    layer.drawPolyline({
      points: this.points,
      color: this.color,
      lineDash: this.lineDash,
      width: this.width
    })
  }
}

layer.addComponents([
  new Polyline({
    position: new Vector(100, 100),
    color: Renderium.colors.RED,
    width: 1
  }),
  new Polyline({
    position: new Vector(200, 100),
    color: Renderium.colors.GREEN,
    width: 5
  }),
  new Polyline({
    position: new Vector(300, 100),
    color: layer.createGradient({
      start: new Vector(0, 75),
      end: new Vector(0, 125),
      from: Renderium.colors.LIGHT_BLUE,
      to: Renderium.colors.INDIGO
    }),
    width: 2
  }),
  new Polyline({
    position: new Vector(425, 100),
    color: Renderium.colors.YELLOW,
    width: 2,
    lineDash: [2, 2]
  })
])
