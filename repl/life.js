/*
global Renderium Vector layer
*/

class Life extends Renderium.Component {
  constructor (options) {
    super()
    this.color = options.color
    this.cellSize = options.cellSize
  }

  fill (layer) {
    this.size = new Vector(
      Math.floor(layer.width / (this.cellSize + 1)),
      Math.floor(layer.height / (this.cellSize + 1))
    )

    this.currentPopulation = new Uint8Array(this.size.x * this.size.y)
    this.nextPopulation = new Uint8Array(this.size.x * this.size.y)
    this.changes = new Uint8Array(this.size.x * this.size.y)

    for (var y = 0; y < this.size.y; y++) {
      for (var x = 0; x < this.size.x; x++) {
        var value = +(Math.random() * !!x * !!y * !!(this.size.y - y - 1) * !!(this.size.x - x - 1) > 0.5)
        this.set(this.currentPopulation, y, x, value)
        this.set(this.changes, y, x, 1)
      }
    }
  }

  onadd () {
    this.fill(layer)
  }

  plot () {
    var currentPopulation = this.currentPopulation
    var nextPopulation = this.nextPopulation
    var changes = this.changes

    for (var y = 1, maxY = this.size.y - 1; y < maxY; y++) {
      for (var x = 1, maxX = this.size.x - 1; x < maxX; x++) {
        if (this.get(changes, y, x)) {
          var sum =
            this.get(currentPopulation, y - 1, x - 1) +
            this.get(currentPopulation, y - 1, x) +
            this.get(currentPopulation, y - 1, x + 1) +
            this.get(currentPopulation, y, x - 1) +
            this.get(currentPopulation, y, x + 1) +
            this.get(currentPopulation, y + 1, x - 1) +
            this.get(currentPopulation, y + 1, x) +
            this.get(currentPopulation, y + 1, x + 1)

          var value = +((sum === 3) || (sum === 2 && this.get(currentPopulation, y, x)))

          this.set(nextPopulation, y, x, value)
        }

        this.set(changes, y, x, 0)
      }
    }
  }

  draw (layer) {
    var currentPopulation = this.currentPopulation
    var nextPopulation = this.nextPopulation
    var changes = this.changes
    var cellSize = this.cellSize
    var color = this.color

    for (var y = 1, maxY = this.size.y - 1; y < maxY; y++) {
      for (var x = 1, maxX = this.size.x - 1; x < maxX; x++) {
        if (this.get(nextPopulation, y, x)) {
          layer.drawRect({
            position: new Vector(x * (cellSize + 1), y * (cellSize + 1)),
            width: cellSize,
            height: cellSize,
            fillColor: color
          })
        }

        if (this.get(currentPopulation, y, x) ^ this.get(nextPopulation, y, x)) {
          this.set(changes, y - 1, x - 1, 1)
          this.set(changes, y - 1, x, 1)
          this.set(changes, y - 1, x + 1, 1)
          this.set(changes, y, x - 1, 1)
          this.set(changes, y, x + 1, 1)
          this.set(changes, y + 1, x - 1, 1)
          this.set(changes, y + 1, x, 1)
          this.set(changes, y + 1, x + 1, 1)
        }
      }
    }

    currentPopulation.set(nextPopulation)
  }

  shouldRedraw () {
    return true
  }

  get (array, i, j) {
    return array[i * this.size.x + j]
  }

  set (array, i, j, value) {
    return (array[i * this.size.x + j] = value)
  }
}

var colors = Object.keys(Renderium.colors).map(key => Renderium.colors[key])

function rand (start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start
}

layer.addComponents([
  new Life({
    color: colors[rand(0, colors.length - 1)],
    cellSize: 2
  })
])
