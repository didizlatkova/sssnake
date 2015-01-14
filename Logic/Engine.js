var SnakeNS = SnakeNS || {};

SnakeNS.Engine = function() {};

SnakeNS.Engine = (function() {
	var game;

	return {
		run: function(snake) {
			snake.move();
		},

		start: function(snake){
			game = setInterval(this.run.bind(this, snake), 1000);
		},

		end: function(){
			clearInterval(game);
		}
	};
}());