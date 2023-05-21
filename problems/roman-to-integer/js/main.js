/**
 * @param {string} s
 * @return {number}
*/

const values = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}
var romanToInt = function(s) {
   let arr = s
   .replaceAll("IV", "IIII")
   .replaceAll("XC", "LXXXX")
   .replaceAll("CM", "DCCCC")
   .replaceAll("IX", "VIIII")
   .replaceAll("XL", "XXXX")
   .replaceAll("CD", "CCCC")
   .split("");
   return arr.reduce((p, c) => p+values[c], 0);
};

console.log(romanToInt("MCMXCIV"))