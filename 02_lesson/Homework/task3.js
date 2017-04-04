function add(value1){
	return function(value2){
		return value1 + value2;
	}

}

console.log( add(3)(4) );