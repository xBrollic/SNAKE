let usedPositions = [];

class Snake {
  constructor(position, rows, cols) {
    this.position = position;
    this.status = true;
    this.age = 1;
    this.rows = rows;
    this.cols = cols;
    this.width = canvas.width / this.rows;
    this.height = canvas.height / this.cols;
  }

  draw(ctx) {
    if (this.status) {
      ctx.fillStyle = "#fada0c";
      ctx.fillRect(
        this.position[0] * this.width,
        this.position[1] * this.height,
        this.width,
        this.height
      );
    }
    ctx.fillStyle = "#e6d35a";
    
      for (let i = 0; i < this.age; i++) {
        if (usedPositions[i]) {
          ctx.fillRect(
            usedPositions[i][0] * this.width,
            usedPositions[i][1] * this.height,
            this.width,
            this.height
          );
        }
    }
  }

  getPosition() {
    usedPositions.push([...this.position]);
  }

  check() {
    if (usedPositions.length > this.age) {
      usedPositions.shift();
    }
  }
}
