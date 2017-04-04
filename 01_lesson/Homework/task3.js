function bigToSmall(array){
	var newArray =[];
	
	for(var i = 0; i < array.length; i++){
		for(var j = 0; j < array[i].length; j++){
			newArray.push(array[i][j]);
		}
	}	

	newArray.sort(compareNumber);
	newArray = newArray.join(">");
		
	return newArray;
}

function compareNumber(el1, el2){
	return el2 - el1;
}

console.log( bigToSmall([[1,2],[3,4],[5,6]]) );  /*"6>5>4>3>2>1"*/
console.log( bigToSmall([[1,3,5],[2,4,6]]) );    /*"6>5>4>3>2>1"*/
console.log( bigToSmall([[1,1],[1],[1,1]]) );    /*"1>1>1>1>1"*/

