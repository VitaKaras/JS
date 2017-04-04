var leader = {
  name: "Василий Иванович",
  age: 35
};

var strJSON = JSON.stringify(leader);
console.log(strJSON);

leader = JSON.parse(strJSON);
console.log(leader);