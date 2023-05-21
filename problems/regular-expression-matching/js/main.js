/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let regex = new RegExp(`^${p}$`,'g');
    return regex.test(s);
};

console.log(isMatch("aa", ".*"));