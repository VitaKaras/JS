
function compose(){
    var arg = arguments[0];
    for (var i=0; i<arguments.length; i++) {
        if (typeof arguments[i] === "function") {
            arg = arguments[i](arg);
        }
    }
    return arg;        
}

var doubleTheValue = function(val) { return val * 2; }
var addOneToTheValue = function(val) { return val + 1; }

console.log(compose(5, doubleTheValue)); //10
console.log(compose(5, doubleTheValue, addOneToTheValue)); //11