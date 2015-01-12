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
				newBlock = {x:lastBlock.x + 1, y: lastBlock.y};					        
		        break;
		    case 2:
		        break;
		    default:
		        console.log("AS");
		} 
		this.coords.push(newBlock);
		this.renderer.renderBlock(newBlock, this.name);
	},

	turnLeft = function() {

	},

	turnRight = function() {

	},

	turnUp = function(){

	},

	turnDown = function(){
		
	}

	return {
		move: move
	};
}());