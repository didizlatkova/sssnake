/// <reference path="../Logic/BlockType.js" />

var SnakeNS = SnakeNS || {};

SnakeNS.Renderer = function (colors) {
	this.COLORS = colors;
};

SnakeNS.Renderer.prototype = (function () {
	var renderField = function (field) {
		var table = document.createElement("table"),
			row,
			cell,
			i,
			j;

		table.id = "field";
		document.body.appendChild(table);

		for (i = 0; i < field.length; i++) {
			row = document.createElement('tr');
				for (j = 0; j < field[i].length; j++) {
					cell = document.createElement('td');
					cell.className = this.COLORS[field[i][j]];
					cell.id = 'block-' + i + '-' + j;
					row.appendChild(cell);
				}

		table.appendChild(row);
		}
	},

	renderBlock = function (block, color) {
		var cell = document.getElementById('block-'+ block.x + block.y);
		cell.className = color;
	},

	renderPoints = function (points) {

	},

	eraseBlock = function (block) {
		var cell = document.getElementById('block-'+ block.x + block.y);
		cell.className = this.COLORS[BlockType.BLANK];
	};

}());