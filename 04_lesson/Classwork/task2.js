function bind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

var user = {
  firstName: "Вася",
  sayHi: function() {
    console.log( this.firstName );
  }
}; 

var f = user.sayHi.bind(user);
f(); 

