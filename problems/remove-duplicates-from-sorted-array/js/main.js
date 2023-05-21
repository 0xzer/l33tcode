/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let s = new Set();
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (s.has(num)) {
            nums.splice(i,1);
            i--;
        };
        s.add(num);
    };
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([1,1,2]));