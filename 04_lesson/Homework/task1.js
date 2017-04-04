function call(){
	var context = arguments[0],
    args = [].slice.apply(arguments, [1]);

    return this.apply(context, args);
};

function print(a, b) {
    return this[a] + " " + this[b];
};

var user = {
	name: "Helen",
	age: 20
};


console.log(print.call(user, 'name', 'age'));