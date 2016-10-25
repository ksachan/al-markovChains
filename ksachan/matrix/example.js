// load math.js
var math = require('./math.js');

console.log('create a matrix');
var p = math.matrix([[1, 0, 0, 0], 
					 [.5, 0, .5, 0],
					 [0, .5, 0, .5],
					 [0, 0, 0, 1]]);

var vector = math.matrix([0, 1, 0, 0]);

function power(x,matrix){
	var result = math.multiply(matrix, matrix);
		x -= 2;
		for (var i=0; i<x ; i++){
			result = math.multiply(result, matrix);

		}
		return result;		
}

var markov = power(50, p);
console.log("Result if I start from 25: ");
console.log(math.multiply(vector,markov));
