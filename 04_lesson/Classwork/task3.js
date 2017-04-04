
function joinArgs(){
	arguments.join = [].join;
	console.log(arguments.join('*'));
};


joinArgs(1,2,3) // 1*2*3 
joinArgs('hello', 'world', '!') // hello*world*!