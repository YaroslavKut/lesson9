number1 = parseFloat(prompt('Enter number1'));
number2 = parseFloat(prompt('Enter number2'));
number3 = parseFloat(prompt('Enter number3'));
if ((number1 >= number2) && (number1 >= number3)) {
alert ('Max number is: '+number1);
}
else if ((number2 >= number1) && (number2 >= number3)) {
alert ('Max number is: '+number2);
}
else alert ('Max number is: '+number3);

