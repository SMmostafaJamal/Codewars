class Block{
  
  constructor(data){
    // ...
    this.width = data[0]
    this.length = data[1]
    this.height = data[2]
    
  }
  getWidth () {
    return this.width
  }
    getLength () {
    return this.length
  }
    getHeight () {
    return this.height
  }
  getVolume() {
    return this.length * this.width * this.height
  }
  getSurfaceArea() {
    return (2*this.length * this.width) + (2*this.length * this.height) + (2*this.height * this.width)
  }
  
}


