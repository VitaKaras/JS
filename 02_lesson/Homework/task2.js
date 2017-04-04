function strCount(obj){
	var counter = 0;

	for( var prop in obj){
		if(isString(obj[prop])) 
			counter++;
		else 
			counter += strCount(obj[prop]);
	}

	return counter;
}

function isString(str){
	return typeof str === "string" || str instanceof String;
}

console.log(strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })); //3
