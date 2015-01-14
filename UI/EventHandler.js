/// <reference path="jquery-1.8.2.js" />
/// <reference path="../Logic/Direction.js" />

var SnakeNS = SnakeNS || {};

SnakeNS.EventHandler = (function() {
	return {
		setupStyles: function(snake, fruit) {
			//$('.' + snake.name).css("background-color", snake.color);
			$('.fruit').css("background-image", 'url(' + fruit.img + ')');
		},

		setupEvents: function(snake) {
			$(document).keydown(function(e) {
				var key = e.keyCode || e.which;
				switch (key) {
					case snake.controls.left:
						e.preventDefault();
						if (snake.direction !== SnakeNS.DIRECTION.RIGHT) {
							snake.turnLeft();
						}
						break;
					case snake.controls.right:
						e.preventDefault();
						if (snake.direction !== SnakeNS.DIRECTION.LEFT) {
							snake.turnRight();
						}
						break;
					case snake.controls.up:
						e.preventDefault();
						if (snake.direction !== SnakeNS.DIRECTION.DOWN) {
							snake.turnUp();
						}
						break;
					case snake.controls.down:
						e.preventDefault();
						if (snake.direction !== SnakeNS.DIRECTION.UP) {
							snake.turnDown();
						}
						break;
				}
			});
		}
	};
}());