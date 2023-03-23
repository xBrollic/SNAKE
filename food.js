class Food {
    constructor(rows,cols){
        this.cols = cols;
        this.rows = rows;
        this.position = [];
        this.width = canvas.width/this.rows
        this.height = canvas.height/this.rows
    }

    draw(ctx){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position[0]*this.width,this.position[1]*this.height,this.width,this.height )
        
    }

    randomPos(){
        this.position = [
          Math.floor(Math.random() * this.rows),
          Math.floor(Math.random() * this.cols)
        ];
    }
}