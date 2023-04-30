const fibonacci = function(num) {
	if (num < 0) return 'OOPS';
	let a= 1;
	let b = 1;
	for (let i = 3; i <= num; i++)	{
		let c = a + b;
		a = b;
		b = c;
	}
	return b;
};

// Do not edit below this line
module.exports = fibonacci;
