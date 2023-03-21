let direction = "right";


function sensor(e) {
  if (e.code == "KeyW" && direction != 'down') {
    direction = 'up';
  } else if (e.code == "KeyA" && direction != "right") {
    direction = "left";
  } else if (e.code == "KeyS" && direction != "up") {
    direction = "down";
  } else if (e.code == "KeyD" && direction != "left") {
    direction = "right";
  }
}

function move(object){
    if(direction == 'up'){
    object[1] = object[1] - 1;
  } else if(direction == 'left'){
    object[0] = object[0] - 1;
  } else if(direction == 'down'){
    object[1] = object[1] + 1;
  } else if(direction == 'right'){
    object[0] = object[0] + 1;
  }
}
