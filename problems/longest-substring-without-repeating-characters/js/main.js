/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    if (s.length === 1) return 1;
    let values = new Set();
    for(let c = 0; c < s.length; c++) {
        let str = s[c];
        let ss = s.substring(c, s.length);
        for(let i = 1; i < ss.length; i++) {
            let char = ss[i];
            if (str.includes(char)) {
                break;
            };
            str += char;
        };
        values.add(str.length);
    };
    return Math.max(...values);
};
let input = "bbbbb";
console.log(lengthOfLongestSubstring(input));