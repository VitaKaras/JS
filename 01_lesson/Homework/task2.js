var arr = [1, 90, 789, 56, 45, 34, 678, 78, -90, -6, 5, 3, 6];

function sortBubble(array) {	
    var tmp; 

    for (var i = array.length - 1; i > 0; i--) {  
        var counter = 0;

        for (var j = 0; j < i; j++) {

            if (array[j] > array[j + 1]) {

                tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;

                counter++;
            }
        }  

        if(counter == 0) break;
    }

  return data;
 };

console.log(arr);
sortBubble(arr);
console.log(arr);	