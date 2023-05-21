/**
 * @param {number} x
 * @return {number}
 */

const lRange = -2147483648;
const hRange = 2147483647;

var reverse = function(x) {
    let y = x.toString().split("").reverse().join("");
    let v;
    if (y.includes("-")) {
        v = -parseInt(y)
    } else {
        v = parseInt(y)
    };
    return v > hRange || v < lRange ? 0 : v;
};