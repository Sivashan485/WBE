
module.exports = {power}



function power(b, n) {

    assert(typeof b === 'number', "b must be a number");

    if(typeof b === 'bigint' && typeof n === 'bigint') {
        if (n === 0n) {
            return 1n; 
        } if (n % 2n === 0n) {
            let number = power(b, n / 2n);
            return number * number;
        }
        return b * power(b, n - 1n);
    }

    assert(n >=0, "n must be greater than or equal to 0");
    assert(Number.isInteger(n), "n must be an integer");
    

    if (n === 0) {
        return 1; 
    } if (n % 2 === 0) {
        let number = power(b, n / 2);
        return number * number;
    }
    return b * power(b, n - 1);   
}


function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failed")
    }
}
console.log(power(2, -3)); // 8