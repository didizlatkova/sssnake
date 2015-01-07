var SnakeNS = SnakeNS || {};

SnakeNS.Renderer = function (field, score, colors) {
	var field = field,
		score = score,
		COLORS = colors;
};

SnakeNS.Renderer.prototype = function(){
	renderField = function(){
		var table = document.createElement("table"),
			row,
			cell;

		table.id = "field";
		document.body.appendChild(table);

		for (var i = 0; i < field.length; i++) {
			row = document.createElement('tr');		
				for (var j = 0; j < field[i].length; j++) {
					cell = document.createElement('td');
					cell.className = COLORS[field[i][j]];
					cell.id = 'block-' + i + '-' + j;
					row.appendChild(cell);
				};

		table.appendChild(row);
		};
	},

	renderBlock = function(block, color){
		var cell = document.getElementById('block-'+ fruit.x + fruit.y);
		cell.className = color;
	},

	renderPoints = function(points){

	},

	eraseBlock = function(block){
		var cell = document.getElementById('block-'+ block.x + block.y);
		cell.className = COLORS[BLANK];
	},

}();