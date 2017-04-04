function find(arr, value){
	if(arr.indexOf){
		return array.indexOf(value);
	}

	for(var i = 0; i < arr.length; i++ ){
		if(arr[i] === value) return i;
	}

	return -1;
}

var array = [1, 90, "Hi", 56, 45, 678, 78, -90, -6, 5, 3, 6];

console.log( find(array, 1) );              
console.log( find(array, "Hi") );
console.log( find(array, "Hello") );
console.log( find(array, 0) );
