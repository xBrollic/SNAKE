const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let start = [1, 1];
const fps = 1;

const grid = new Grid(0, 0, 15, 15);

grid.createGrid();

window.addEventListener("keydown", (e) => {
  sensor(e);
});

const player1 = new Snake(start, 15, 15);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player1.draw(ctx);
  player1.getPosition();
  player1.check();
  move(start);
  grid.drawGrid();

  /*if (player1.position[0] * player1.width > canvas.width ||player1.position[1]* player1.height > canvas.height || player1.position[0] < 0 || player1.position[1] < 0) {
    window.location.reload();
  }*/

  //grid.fill("lightblue", start);

  setTimeout(() => {
    requestAnimationFrame(animate);
  }, 1000 / fps);
}

animate();
