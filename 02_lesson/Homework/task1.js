function sum(param){
	var result = param;
	var sum2 = function(){
		var arg = arguments[0] ? arguments[0] : 0;
		return result += arg;
	};
	sum = sum2;
	return sum2();
}

var result = 0;

function sum(a, b) {
	return a + b;
}

trickySum = (a) => result = sum(result, a) ;

function SumCalc() {
	this.result = 0;
	this.sum = function(a) {
		this.result += a;
		return this.result;
	}

} 

var calc = new SumCalc();
console.log(calc.sum(3));
console.log(calc.sum(8));
console.log(calc.sum(10));


