const num = parseInt(prompt('enter the number of the Fibonacci sequence number '));
var fib = function(num){
if (num === 1) {
return 1;
}
if (num === 2){
	return 1;
}
return fib(num-1) + fib(num-2);
}

alert("The number of Fibonacci is " +fib(num));

