/*
global Renderium Animation Vector layer
*/

class Arc extends Renderium.Component {
  constructor (options) {
    super()
    this.position = options.position
    this.color = options.color
    this.radius = options.radius
    this.startAngle = options.startAngle
    this.endAngle = options.endAngle
    this.width = options.width
    this.opacity = options.opacity
    this.lineDash = options.lineDash
    this.duration = options.duration

    this._startAngle = this.startAngle
    this._endAngle = this.endAngle

    this._shouldRedraw = true

    this.animation = new Animation({
      duration: this.duration,
      handler: this._hanlder.bind(this)
    })
    this.animation.queue(this.animation)
  }

  shouldRedraw () {
    return this._shouldRedraw
  }

  onadd (layer) {
    this.animation.start()
  }

  onremove (layer) {
    this.animation.cancel()
  }

  draw (layer) {
    layer.drawArc({
      position: this.position,
      color: this.color,
      radius: this.radius,
      startAngle: this._startAngle,
      endAngle: this._endAngle,
      width: this.width,
      opacity: this.opacity,
      lineDash: this.lineDash
    })

    this._shouldRedraw = false
  }

  _hanlder (t) {
    var theta = t * (Math.PI * 2)
    this._startAngle = this.startAngle + theta
    this._endAngle = this.endAngle + theta
    this._shouldRedraw = true
  }
}

layer.addComponents([
  new Arc({
    position: new Vector(75, 75),
    color: Renderium.colors.RED,
    radius: 25,
    startAngle: 0,
    endAngle: 1.5 * Math.PI,
    width: 1,
    opacity: 1,
    lineDash: [],
    duration: 1000
  }),
  new Arc({
    position: new Vector(175, 75),
    color: layer.createGradient({
      start: new Vector(0, 50),
      end: new Vector(0, 100),
      from: Renderium.colors.LIGHT_BLUE,
      to: Renderium.colors.INDIGO
    }),
    radius: 25,
    startAngle: 0,
    endAngle: 1.5 * Math.PI,
    width: 10,
    opacity: 1,
    lineDash: [],
    duration: 1000
  }),
  new Arc({
    position: new Vector(300, 75),
    color: Renderium.colors.YELLOW,
    radius: 50,
    startAngle: Math.PI,
    endAngle: 0.5 * Math.PI,
    width: 2,
    opacity: 1,
    lineDash: [],
    duration: 1000
  }),
  new Arc({
    position: new Vector(425, 75),
    color: Renderium.colors.GREEN,
    radius: 25,
    startAngle: Math.PI,
    endAngle: 0.5 * Math.PI,
    width: 5,
    opacity: 0.5,
    lineDash: [],
    duration: 1000
  }),
  new Arc({
    position: new Vector(525, 75),
    color: Renderium.colors.PURPLE,
    radius: 25,
    startAngle: Math.PI,
    endAngle: 0.5 * Math.PI,
    width: 5,
    opacity: 1,
    lineDash: [10, 5],
    duration: 1000
  })
])
