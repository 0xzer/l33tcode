/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2).sort((a,b) => a-b);
    let index = Math.floor(arr.length/2);
    if (arr.length % 2) {
        return arr[index];
    } else {
        let firstNum = arr[index];
        let secondNum = arr[index-1];
        return (firstNum+secondNum)/2;
    };
};
console.log(findMedianSortedArrays([1], [2,3,4,5,6,7,8,9,10]));
console.log(findMedianSortedArrays([1], [-2,-1]));
console.log(findMedianSortedArrays([1,3], [2]));
console.log(findMedianSortedArrays([1,2], [3,4]));