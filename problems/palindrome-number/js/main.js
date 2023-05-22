/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let x2 = x.toString();
    return x2 === x2.split("").reverse().join("");
};

console.log(isPalindrome(1211))