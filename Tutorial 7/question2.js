 

var A=parseInt(prompt("Enter mark 1"));
var B=parseInt(prompt("Enter mark 2"));
var C=parseInt(prompt("Enter mark 3"));
var D=parseInt(prompt("Enter mark 4"));
var E=parseInt(prompt("Enter mark 5"));

var total = A + B + C + D + E;
var average = total / 5;


alert('Average: ' + average.toFixed(2));

  
    if (average > 30) {
        alert('Congrats, you passed!');
        }
    else{
        alert('better luck next time!');
        }
 