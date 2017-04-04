var array = [1,2,31,24,-67,5,3,555, 555,79,-4,21,33,89,-90];

var max = array.reduce((el1, el2) => max(el1, el2), array[0]);
var min = array.reduce((el1, el2) => min(el1, el2), array[0]);

function max(el1, el2){
	return (el1 > el2) ? el1 : el2;
}

function min(el1, el2){
	return(el1 < el2) ? el1 : el2;
}

var newArray = array.filter((el) => el > 0 && el % 2 == 0);

console.log(array);
console.log("min: " + min + "\nmax: " + max);
console.log("New Array: [ "+ newArray.join(", ") + " ]");



