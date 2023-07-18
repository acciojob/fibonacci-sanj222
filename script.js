function fibonacci(num) {
// your code here
	if(num === 1)
	{
		return 0;
	}
	else if(num === 2)
	{
		return 1;
	}
    
	let fib1 = 0 , fib2 = 1;
	
	for(let i = 1 ; i <= num-2 ; i++)
		{
			let ans = fib1 + fib2;
			fib1 = fib2;
			fib2 = ans;
		}
	return fib2;
}

module.exports = fibonacci;