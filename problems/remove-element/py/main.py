class Solution:
    def removeElement(self, nums, val) -> int:
        while val in nums:
            nums.remove(val)
        return len(nums)

nums = [0,1,2,2,3,0,4,2]
val = 2
s = Solution()
print(s.removeElement(nums,val))