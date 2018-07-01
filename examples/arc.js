class Component {
  constructor (renderer) {
    this.renderer = renderer
    this.options = this.createOptions()
    this._x = this.renderer.width / 2
    this._y = this.renderer.height / 2
    this._radius = 50
    this._theta = 0
    this._length = 1.5 * Math.PI
    this._width = 4
    this._opacity = 1
    this._stroke = '#2196f3'

    this.renderer.render(renderer => {
      renderer.arc(this)
    })
    this.renderer.enqueue()
  }

  get x () {
    return this._x
  }

  set x (x) {
    this._x = x
    this.renderer.enqueue()
  }

  get y () {
    return this._y
  }

  set y (y) {
    this._y = y
    this.renderer.enqueue()
  }

  get radius () {
    return this._radius
  }

  set radius (radius) {
    this._radius = radius
    this.renderer.enqueue()
  }

  get theta () {
    return this._theta
  }

  set theta (theta) {
    this._theta = theta
    this.renderer.enqueue()
  }

  get length () {
    return this._length
  }

  set length (length) {
    this._length = length
    this.renderer.enqueue()
  }

  get width () {
    return this._width
  }

  set width (width) {
    this._width = width
    this.renderer.enqueue()
  }

  get opacity () {
    return this._opacity
  }

  set opacity (opacity) {
    this._opacity = opacity
    this.renderer.enqueue()
  }

  get stroke () {
    return this._stroke
  }

  set stroke (stroke) {
    this._stroke = stroke
    this.renderer.enqueue()
  }

  createOptions () {
    return [
      {
        name: 'x',
        min: 0,
        max: this.renderer.width,
        type: 'default'
      },
      {
        name: 'y',
        min: 0,
        max: this.renderer.height,
        type: 'default'
      },
      {
        name: 'radius',
        min: 0,
        max: Math.min(this.renderer.width / 2, this.renderer.height / 2),
        type: 'default'
      },
      {
        name: 'theta',
        min: 0,
        max: 2 * Math.PI,
        type: 'default'
      },
      {
        name: 'length',
        min: 0,
        max: 2 * Math.PI,
        type: 'default'
      },
      {
        name: 'width',
        min: 0,
        max: 20,
        type: 'default'
      },
      {
        name: 'opacity',
        min: 0,
        max: 1,
        type: 'default'
      },
      {
        name: 'stroke',
        type: 'color'
      }
    ]
  }
}
