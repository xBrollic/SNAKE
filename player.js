let usedPositions = [];

class Snake {
  constructor(position, rows, cols) {
    this.position = position;
    this.status = true;
    this.age = 2;
    this.rows = rows;
    this.cols = cols;
    this.width = canvas.width / this.rows;
    this.height = canvas.height / this.cols;
  }

  draw(ctx) {
    if (this.status) {
      ctx.fillStyle = "lightblue";
      ctx.fillRect(
        this.position[0] * this.width,
        this.position[1] * this.height,
        this.width,
        this.height
      );
    }
  }

  getPosition(){
    usedPositions.push([...this.position]);
  }

  check(){
    if(usedPositions >= this.age){
      usedPositions.shift();
    }
  }

}
