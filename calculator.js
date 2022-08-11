var num1 = prompt("Enter number1");
var num2 = prompt("Enter number2");
num1 = parseFloat(num1);
num2 = parseFloat(num2);
var sum = num1 + num2;
alert('Sum of these numbers: '+sum);
if (num2 ==0) {
    alert('Sorry, we can`t divide on zero, enter another number2');
    num2 = prompt("Enter number2");
    num2 = parseFloat(num2);
   }

var division = num1 /num2;
alert ('Division of these numbers: '+division);
