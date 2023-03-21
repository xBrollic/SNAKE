const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let start = [1, 1];
const fps = 1;

const grid = new Grid(0, 0, 15, 15);

grid.createGrid();
grid.drawGrid();


window.addEventListener("keydown", (e) => {
  sensor(e);
});

const player1 = new Snake(start, 15, 15);

function animate() {
  player1.draw(ctx);
  player1.getPosition();
  player1.check();
  move(start);


  console.log(usedPositions);

  //grid.fill("lightblue", start);

  setTimeout(() => {
    requestAnimationFrame(animate);
  }, 1000 / fps);
}

animate();
