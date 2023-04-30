const palindromes = function (str) {
	const re = /[\W_]/g;
	const lowRegStr = str.toLowerCase().replace(re, '');
	const reverseStr = lowRegStr.split('').reverse().join('');
	return reverseStr === lowRegStr;
	
};

// Do not edit below this line
module.exports = palindromes;
