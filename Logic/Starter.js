/// <reference path="jquery-1.8.2.js" />
/// <reference path="../UI/Renderer.js" />
/// <reference path="../UI/EventHandler.js" />
/// <reference path="BlockType.js" />
/// <reference path="Snake.js" />
/// <reference path="Direction.js" />
/// <reference path="Engine.js" />

var SnakeNS = SnakeNS || {};

$(document).ready(function() {
	console.log( "ready!" );

	var CLASS_NAMES = [];
	CLASS_NAMES[SnakeNS.BLOCK_TYPE.BLANK] = 'blank';
	CLASS_NAMES[SnakeNS.BLOCK_TYPE.WALL] = 'wall';
	CLASS_NAMES[SnakeNS.BLOCK_TYPE.FRUIT] = 'fruit';

	var field = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
				];

	var renderer = new SnakeNS.Renderer(CLASS_NAMES);
	var snakeName = "anaconda";
	var snakeBlock = {x:1, y:1};	
	var fruitBlock = {x:5, y:5};	
	var snake = new SnakeNS.Snake(snakeName, [snakeBlock], "#004A7F", 1, {left:37, right:39, up: 38, down:40}, SnakeNS.DIRECTION.LEFT, renderer);
	var fruit = new SnakeNS.Fruit("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQf9vdIFkIrxbLdNFeg3_HWWmlM3-IvNSQ9ho28jHvrNg6q5r3C", 10, fruitBlock);

	renderer.renderField(field);
	renderer.renderBlock(snakeBlock, snakeName);
	renderer.renderBlock(fruitBlock, CLASS_NAMES[SnakeNS.BLOCK_TYPE.FRUIT])

	SnakeNS.EventHandler.setupStyles(snake, fruit);

	SnakeNS.Engine.start(snake);
});