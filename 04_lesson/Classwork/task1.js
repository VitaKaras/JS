
function sumArgs(){
	return [].reduce.call(arguments, (a, b) => a + b);
}

console.log(sumArgs(4, 2, 3));