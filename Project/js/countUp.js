
function checkInView(){
    var pos = document.getElementById("rowOfNumbers").getBoundingClientRect();
    return pos.top > 40 && pos.top < 452 ? true : false;
}

var timerNumber = setInterval( function(){
     if (checkInView()) {
        printNumbersInterval();
        clearInterval(timerNumber);
    }
}, 200);


 function printNumbersInterval(){
    var i = 0, j = 0, k = 0,  l = 0;
    var timerId1 = setInterval(function() {
        clientsCounter.innerHTML = '';
        i += 10;
        clientsCounter.innerHTML = i;
        if(i == document.getElementById("clientsCounter").getAttribute('data-count')) 
            clearInterval(timerId1);
    }, 10);
    
    var timerId2 = setInterval(function() {
        projectCounter.innerHTML = '';
        j += 20;
        projectCounter.innerHTML = j;
        if(j == document.getElementById("projectCounter").getAttribute('data-count')) 
            clearInterval(timerId2);
    }, 10);

    var timerId3 = setInterval(function() {
        awardCounter.innerHTML = '';
        k += 1;
        awardCounter.innerHTML = k;
        if(k == document.getElementById("awardCounter").getAttribute('data-count')) 
            clearInterval(timerId3);
    }, 40);

    var timerId4 = setInterval(function() {
        coffeeCounter.innerHTML = '';
        l += 125;
        coffeeCounter.innerHTML = l;
        if(l == document.getElementById("coffeeCounter").getAttribute('data-count')) 
            clearInterval(timerId4);
    }, 10);

}        




