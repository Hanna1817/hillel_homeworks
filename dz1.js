function notNumber(x) {
    if ((x !== x) || ((x >= 0) === false)) 
	{
		return true;
		} 
	else { 
		return false; 
	}
} 
console.log (notNumber(NaN)); 
console.log (notNumber(15)); 
console.log (notNumber(" ")); 
console.log (notNumber("37.5")); 
console.log (notNumber("37,5")); 
console.log (notNumber("ggg12")); 
console.log (notNumber(null)); 
console.log (notNumber(true)); 
console.log (notNumber(false)); 
console.log (notNumber({})); 
console.log (notNumberq(undefined));

