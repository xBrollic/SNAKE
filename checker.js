function checker(object,food){
    if(object.position[0] == food.position[0] && object.position[1] == food.position[1]){
        food.position = [
          Math.floor(Math.random() * food.rows),
          Math.floor(Math.random() * food.cols),
        ];
          
        object.age = object.age + 1

    }
    ;
}