const canvas = document.getElementById("gameBoard");
const gameBoard = canvas.getContext("2d");

const edges = {
	top : 0,
	left : 0,
	bottom : 138,
	right : 276
}

const square = {
	width: 24,
	height: 12,
	x : Math.floor(edges.right / 2),
	y : Math.floor(edges.bottom / 2),
	speed : 1,
	triggerMove : function(e) {
		if (e.keyCode === 119) {
            if (square.y > edges.top) {
                move(0, -1);
            }
		} else if (e.keyCode === 97) {
			if (square.x > edges.left) {
                move(-1, 0);
            }
		} else if (e.keyCode === 100) {
			if (square.x < edges.right) {
                move(1, 0);
            }
		} else if (e.keyCode === 115) {
            if (square.y < edges.bottom) {
                move(0, 1); 
            }
		} 
	}
}

placeSquare(); 
document.body.addEventListener("keypress", square.triggerMove);

function placeSquare() {
	gameBoard.fillStyle = "#a0f";
	gameBoard.fillRect(square.x, square.y, square.width, square.height);
}
 
function move(xDirection, yDirection) {
    gameBoard.clearRect(square.x, square.y, square.width, square.height);
    square.y += square.speed * yDirection; 
    square.x += 2 * square.speed * xDirection;
    gameBoard.fillRect(square.x, square.y, square.width, square.height);
}

