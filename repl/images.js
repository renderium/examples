/*
global Renderium Animation Vector layer
*/

class ImageComponent extends Renderium.Component {
  constructor (options) {
    super()
    this.position = options.position
    this.image = options.image
    this.width = options.width
    this.height = options.height
    this.opacity = options.opacity

    this._shouldRedraw = true

    this.animation = new Animation({
      duration: 1000
    })
  }

  shouldRedraw () {
    return this._shouldRedraw
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
}

layer.addComponents([
  new ImageComponent({
    position: new Vector(50, 50),
    image: 'https://upload.wikimedia.org/wikipedia/en/2/24/Lenna.png',
    width: 128,
    height: 128,
    opacity: 1
  }),
  new ImageComponent({
    position: new Vector(250, 50),
    image: 'https://upload.wikimedia.org/wikipedia/en/2/24/Lenna.png',
    width: 256,
    height: 256,
    opacity: 1
  }),
  new ImageComponent({
    position: new Vector(575, 50),
    image: 'https://upload.wikimedia.org/wikipedia/en/2/24/Lenna.png',
    width: 128,
    height: 128,
    opacity: 0.5
  })
])
