module.exports = { factorial }

function factorial(n) {
	if(typeof n === "bigint"){
		n = BigInt(n)
		if (n <= 1n) {
			return 1n;
		} else {
			return n * factorial(n - 1n);
		}
	}else{
		if (n <= 1) {
			return 1;
		} else {
			return n * factorial(n - 1);
		}
	}
   
}

console.log(factorial(50n));