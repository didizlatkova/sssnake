/// <reference path="Direction.js" />
/// <reference path="BlockType.js" />

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
	var checkForCollisions = function(field) {

	},

	crashIntoWall = function() {

	},

	eatFruit = function(fruit) {

	},

	accelerate = function(value) {

	},

	move = function(){
		var lastBlock = this.coords[this.coords.length - 1];
		var newBlock;

		this.renderer.eraseBlock(this.coords[0]);
		this.coords.shift();

		switch(this.direction) {
		    case SnakeNS.DIRECTION.LEFT:		    
				newBlock = {x:lastBlock.x - 1, y: lastBlock.y};				        
		        break;
		    case SnakeNS.DIRECTION.RIGHT:
		    	newBlock = {x:lastBlock.x + 1, y: lastBlock.y};
		        break;
		    case SnakeNS.DIRECTION.UP:
		    	newBlock = {x:lastBlock.x, y: lastBlock.y - 1};
		        break;
	        case SnakeNS.DIRECTION.DOWN:
	    		newBlock = {x:lastBlock.x, y: lastBlock.y + 1};
	        	break;
		} 
		
		this.coords.push(newBlock);
		this.renderer.renderBlock(newBlock, this.name);
	},

	turnLeft = function() {
		this.direction = SnakeNS.DIRECTION.LEFT;
	},

	turnRight = function() {
		this.direction = SnakeNS.DIRECTION.RIGHT;
	},

	turnUp = function(){
		this.direction = SnakeNS.DIRECTION.UP;
	},

	turnDown = function(){
		this.direction = SnakeNS.DIRECTION.DOWN;
	}

	return {
		move: move,
		turnLeft: turnLeft,
		turnRight: turnRight,
		turnUp: turnUp,
		turnDown: turnDown
	};
}());