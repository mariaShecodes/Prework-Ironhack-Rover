let rover = {
  name: 'R1',
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: []
};

const position = ['N', 'E', 'S', 'W'];

var board = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'O', ' ', ' ', ' ', ' ', ' ', ' ', 'O'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'O', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'O', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];

function draw(rover) {
  board[rover.y][rover.x] = rover.name;
  console.log(board.join('\n') + '\n\n');
  board[rover.y][rover.x] = ' ';           //Borramos rover
}

draw(rover); 

function turnLeft(rover) {
  console.log("turnLeft was called!");
  if(rover.direction === 'N') {
    rover.direction = position[3];
  } else {
    rover.direction = position[position.indexOf(rover.direction)-1];
  }
  console.log(`The current facing of rover is ${rover.direction}`);
}

function turnRight(rover) {
  console.log("turnRight was called!");
  if(rover.direction === 'N') {
    rover.direction = position[1];
  } else {
    rover.direction = position[position.indexOf(rover.direction)+1];
  }
  console.log(`The current facing of rover is ${rover.direction}`);
}

// Declaramos la detección de obstáculos:
function checkObstacle(coordinateY, coordinateX) {
  if(board[coordinateY][coordinateX] === 'O') {
    alert('OBSTACLE!');
    console.log('You can´t move to this position! There is an OBSTACLE');
    return true;
  }
  return false;
}

function moveForward(rover) {
  console.log("moveForward was called!");
  switch(rover.direction) {
    case 'N':
      if(rover.y > 0 && rover.y < 11) {
        if(checkObstacle((rover.y - 1), rover.x) === true) {
          break;
        } else {
          rover.y --;
          console.log(`The rover's coordinates: x = ${rover.x} y = ${rover.y}`);
        } 
      } else {
          console.log('Your position doesn`t allow you to advance!');
      }
      break;
    case 'E':
      if(rover.x >= 0 && rover.x < 10) {
        if(checkObstacle((rover.y), rover.x + 1) === true) {
          break;
        } else {
          rover.x ++;
          console.log(`The rover's coordinates: x = ${rover.x} y = ${rover.y}`);
        }
      } else {
        console.log('Your position doesn`t allow you to advance!');
      }
      break;
    case 'S':
      if(rover.y >= 0 && rover.y < 10) {
        if(checkObstacle((rover.y + 1), rover.x) === true) {
          break;
        } else {
          rover.y ++;
          console.log(`The rover's coordinates: x = ${rover.x} y = ${rover.y}`);
        }
      } else {
        console.log('Your position doesn`t allow you to advance!');
      }
      break;
    case 'W':
      if(rover.x > 0 && rover.x < 11) {
        if(checkObstacle(rover.y, (rover.x - 1)) === true) {
          break;
        } else {
          rover.x --;
          console.log(`The rover's coordinates: x = ${rover.x} y = ${rover.y}`);
        }
      } else {
        console.log('Your position doesn`t allow you to advance!');
      }
      break;
    default:
      break;
  }
}

function moveBackward(rover) {
  console.log("moveBackward was called!");
  switch(rover.direction) {
    case 'N':
      if(rover.y >= 0 && rover.y < 10) {
        if(checkObstacle((rover.y + 1), rover.x) === true) {
          break;
        } else {
          rover.y ++;
          console.log(`The rover's coordinates: x = ${rover.x} y = ${rover.y}`);
        }
      } else {
          console.log('Your position doesn`t allow you to advance!');
      }
      break;
    case 'E':
      if(rover.x > 0 && rover.x < 11) {
        if(checkObstacle(rover.y, (rover.x - 1)) === true) {
          break;
        } else {
          rover.x --;
          console.log(`The rover's coordinates: x = ${rover.x} y = ${rover.y}`);
        }
      } else {
        console.log('Your position doesn`t allow you to advance!');
      }
      break;
    case 'S':
      if(rover.y > 0 && rover.y < 11) {
        if(checkObstacle((rover.y - 1), rover.x) === true) {
          break;
        } else {
          rover.y --;
          console.log(`The rover's coordinates: x = ${rover.x} y = ${rover.y}`);
        }
      } else {
        console.log('Your position doesn`t allow you to advance!');
      }
      break;
    case 'W':
      if(rover.x >= 0 && rover.x < 10) {
        if(checkObstacle(rover.y, (rover.x + 1)) === true) {
          break;
        } else {
          rover.x ++;
          console.log(`The rover's coordinates: x = ${rover.x} y = ${rover.y}`);
        }
      } else {
        console.log('Your position doesn`t allow you to advance!');
      }
      break;
    default:
      break;
  }
}

function commands(list) {
  for (var i=0; i < list.length; i++) {
    if(list[i] === 'f') {
      moveForward(rover);
      rover.travelLog.push(`direction: ${rover.direction} x: ${rover.x} y: ${rover.y}`);
    } 
     else if(list[i] === 'r') {
      turnRight(rover);
      rover.travelLog.push(`direction: ${rover.direction} x: ${rover.x} y: ${rover.y}`);
    } 
    else if(list[i] === 'l') {
      turnLeft(rover);
      rover.travelLog.push(`direction: ${rover.direction} x: ${rover.x} y: ${rover.y}`);
    }
    else if(list[i] === 'b') {
      moveBackward(rover);
      rover.travelLog.push(`direction: ${rover.direction} x: ${rover.x} y: ${rover.y}`);
    }
    else {
      console.log('INCORRECT COMMAND!!');
    }
  }
}

var list = 'brfflb7';
commands(list);

console.table(rover.travelLog);

draw(rover);
