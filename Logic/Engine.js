var SnakeNS = SnakeNS || {};

SnakeNS.Engine = function() {};

SnakeNS.Engine = (function() {
	var game,
		snake;

	return {
		run: function() {
			snake.move();
		},

		start: function(s){
			snake = s;
			game = setInterval(this.run, 1000);
		},

		end: function(){
			clearInterval(game);
		}
	};
}());