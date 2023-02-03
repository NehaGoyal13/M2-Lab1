/*eslint-env browser*/

//STEP 1
function halfNumber(number){
    "use strict";
    var result = number / 2 ;
    window.document.write("Half of " + number + " is " + result + ".<br><br>");
}
halfNumber(5);

//STEP 2
function squareNumber(number){
    "use strict";
    var result = number * number ;
    window.document.write("The result of squaring the number " + number + " is " + result + ".<br><br>");
}
squareNumber(3);

//STEP 3
function percentOf(num1, num2){
    "use strict";
    var result = (num1 / num2) * 100 ;
    window.document.write(num1 + " is " + result + "% of " + num2 +".<br><br>");
}
percentOf(2,4);

//STEP 4
function findModulus(num1, num2){
    "use strict";
    var result = num1 % num2;
    window.document.write(result + " is the modulus of " + num2 + " and " + num1 + ".<br><br>");
}
findModulus(10,4);

//STEP 5
var i;
var base, temp;
var total=0; 
var num = window.prompt("Enter numbers using commas:");

function sum(numbers){
    "use strict";
    base = numbers.split(',');   
    for(i = 0 ; i < base.length ; i+=1){
       temp = Number(base[i]);
        if(!isNaN(temp)){
           total += temp;
        }
    }
    return total;   
}
window.document.write("the sum of numbers is "+ sum(num));