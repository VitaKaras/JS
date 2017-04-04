function makeCounter(){
	var counter = 1;

	return function(){
		return counter++;
	}

}

var counter = makeCounter();

console.log( counter() );
console.log( counter() );
console.log( counter() );