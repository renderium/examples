/*
global Renderium Vector layer
*/

class Polyline extends Renderium.Component {
  constructor (options) {
    super()

    this.position = options.position
    this.color = options.color
    this.width = options.width
    this.opacity = options.opacity
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
      width: this.width,
      opacity: this.opacity,
      lineDash: this.lineDash
    })
  }
}

layer.addComponents([
  new Polyline({
    position: new Vector(75, 75),
    color: Renderium.colors.RED,
    width: 1,
    opacity: 1,
    lineDash: []
  }),
  new Polyline({
    position: new Vector(175, 75),
    color: layer.createGradient({
      start: new Vector(0, 50),
      end: new Vector(0, 100),
      from: Renderium.colors.LIGHT_BLUE,
      to: Renderium.colors.INDIGO
    }),
    width: 10,
    opacity: 1,
    lineDash: []
  }),
  new Polyline({
    position: new Vector(275, 75),
    color: Renderium.colors.GREEN,
    width: 5,
    opacity: 0.5,
    lineDash: []
  }),
  new Polyline({
    position: new Vector(375, 75),
    color: Renderium.colors.PURPLE,
    width: 2,
    opacity: 1,
    lineDash: [10, 5]
  })
])
