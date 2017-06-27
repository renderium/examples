/*
global Renderium Vector layer
*/

class TextAlign extends Renderium.Component {
  constructor (options) {
    super()

    this.text = options.text
    this.font = options.font
    this.textColor = options.textColor
    this.crossColor = options.crossColor
    this.size = options.size

    this.aligns = ['center', 'left', 'right']
    this.baseLines = ['middle', 'top', 'bottom', 'hanging', 'alphabetic', 'ideographic']

    this._shouldRedraw = true
  }

  shouldRedraw () {
    return this._shouldRedraw
  }

  drawCross (layer, position, textWidth) {
    layer.drawPolyline({
      points: [
        position.sub(new Vector(textWidth, 0)),
        position.add(new Vector(textWidth, 0))
      ],
      color: this.crossColor
    })

    layer.drawPolyline({
      points: [
        position.sub(new Vector(0, this.size)),
        position.add(new Vector(0, this.size))
      ],
      color: this.crossColor
    })
  }

  draw (layer) {
    var textWidth = layer.measureText({
      text: this.text
    })

    for (var i = 0; i < this.baseLines.length; i++) {
      for (var j = 0; j < this.aligns.length; j++) {
        var position = new Vector(100 + 300 * j, 40 + 100 * i)
        var baseLine = this.baseLines[i]
        var align = this.aligns[j]

        this.drawCross(layer, position, textWidth)

        layer.drawText({
          position: position,
          text: this.text,
          color: this.textColor,
          font: this.font,
          size: this.size,
          align: align,
          baseline: baseLine
        })
      }
    }

    this._shouldRedraw = false
  }
}

layer.addComponent(
  new TextAlign({
    text: 'Sample text',
    font: 'Helvetica',
    size: 24,
    textColor: Renderium.colors.BLUE,
    crossColor: Renderium.colors.YELLOW
  })
)
