
var filterMap = {
  "all" : $('.filterImage div img'),
  "webDesign" : $('.web img'),
  "graph" : $('.graphic img'),
  "photo" : $('.photography img'),
  "illustration" : $('.illustration img') 
};

var filterButtons = $('.filterMenu li');

filterButtons[0].onclick = function() {
  [].forEach.call(filterMap["all"], function(element) {
    element.style.display = 'block';
  });
}

filterButtons[1].onclick = function() {
  [].forEach.call(filterMap["all"], function(element) {
    element.style.display = 'none';
  });
  [].forEach.call(filterMap["webDesign"], function(element) {
    element.style.display = 'block';
  });
}

filterButtons[2].onclick = function() {
  [].forEach.call(filterMap["all"], function(element) {
    element.style.display = 'none';
  });
  [].forEach.call(filterMap["graph"], function(element) {
    element.style.display = 'block';
  });
}

filterButtons[3].onclick = function() {
  [].forEach.call(filterMap["all"], function(element) {
    element.style.display = 'none';
  });
  [].forEach.call(filterMap["photo"], function(element) {
    element.style.display = 'block';
  });
}

filterButtons[4].onclick = function() {
  [].forEach.call(filterMap["all"], function(element) {
    element.style.display = 'none';
  });
  [].forEach.call(filterMap["illustration"], function(element) {
    element.style.display = 'block';
  });
}

