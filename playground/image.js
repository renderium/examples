/*
global Renderium Vector layer
*/

class ImageComponent extends Renderium.Component {
  constructor (options) {
    super()
    this.image = options.image
    this.width = options.width
    this.height = options.height
    this.opacity = options.opacity

    this.position = new Vector()

    this._shouldRedraw = true
  }

  shouldRedraw () {
    return this._shouldRedraw
  }

  plot (layer) {
    var x = layer.width / 2 - this.width / 2
    var y = layer.height / 2 - this.height / 2
    this.position = new Vector(x, y)
  }

  draw (layer) {
    layer.drawImage({
      position: this.position,
      image: this.image,
      width: this.width,
      height: this.height,
      opacity: this.opacity
    })

    this._shouldRedraw = false
  }

  get image () {
    return this._image
  }

  set image (image) {
    this._image = image
    this._shouldRedraw = true
  }

  get width () {
    return this._width
  }

  set width (width) {
    this._width = width
    this._shouldRedraw = true
  }

  get height () {
    return this._height
  }

  set height (height) {
    this._height = height
    this._shouldRedraw = true
  }

  get opacity () {
    return this._opacity
  }

  set opacity (opacity) {
    this._opacity = opacity
    this._shouldRedraw = true
  }
}

layer.addComponents([
  new ImageComponent({
    position: new Vector(50, 50),
    image: 'https://upload.wikimedia.org/wikipedia/en/2/24/Lenna.png',
    width: 128,
    height: 128,
    opacity: 1
  })
])
