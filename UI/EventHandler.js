/// <reference path="jquery-1.8.2.js" />

var SnakeNS = SnakeNS || {};

SnakeNS.EventHandler = (function() {
	return {
		setupStyles: function(snake, fruit) {			
			//$('.' + snake.name).css("background-color", snake.color);
			$('.fruit').css("background-image", 'url('+ fruit.img +')');
		},

		setupEvents: function(turnLeftCB, turnRightCB, turnUpCB, turnDownCB) {

		}
	};
}());