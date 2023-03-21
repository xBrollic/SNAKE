class Grid {
  constructor(x, y, rows, cols) {
    this.x = x;
    this.y = y;
    this.rows = rows;
    this.cols = cols;
    this.grid = [];

    this.width = canvas.width / this.rows;
    this.height = canvas.height / this.cols;
  }
  createGrid() {
    this.grid = new Array(this.rows);
    for (let j = 0; j < this.cols; j++) {
      this.grid = new Array(j);
    }
  }

  drawGrid() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        ctx.beginPath();
        ctx.rect(
          this.x + i * this.width,
          this.y + j * this.height,
          this.width,
          this.height
        );
        ctx.strokeStyle = 'lightgrey';
        ctx.stroke();
      }
    }
  }

  fill(col, cell) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i == cell[0] && j == cell[1]) {
          ctx.fillStyle = col;
          ctx.fillRect(
            i * this.width,
            j * this.height,
            this.width,
            this.height
          );
          //console.log("träff");
        }
        //console.log("start", cell);
        //console.log("cell", [i, j]);
      }
    }
  }
}
