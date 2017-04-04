var user = {};

var user1 = {
	name: "Helen",
	age: 20
};

function isEmpty(obj){
	return Object.keys(obj).length == 0; 
}

console.log(isEmpty(user));
console.log(isEmpty(user1));