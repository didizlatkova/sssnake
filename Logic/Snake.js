var SnakeNS = SnakeNS || {};

SnakeNS.Snake = function(name, coords, color, speed, controls, direction, renderer) {
	this.name = name;
	this.coords = coords;
	this.color = color;
	this.speed = speed;
	this.controls = controls;
	this.direction = direction;
	this.renderer = renderer;
};

SnakeNS.Snake.prototype = (function() {
	var update = function() {
		var i = 0;

		for (i = 0; i < this.coords.length; i++) {
			var cell = document.getElementById('block-'+ this.coords[i].x + '-' + this.coords[i].y);
			cell.className = this.name;
		}
	},

	checkForCollisions = function(field) {

	},

	crashIntoWall = function() {

	},

	eatFruit = function(fruit) {

	},

	accelerate = function(value) {

	},

	moveLeft = function() {

	},

	moveRight = function() {

	},

	moveUp = function(){

	},

	moveDown = function(){
		
	}

	return {
		update: update
	};
}());