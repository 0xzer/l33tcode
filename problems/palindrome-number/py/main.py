class Solution:
    def isPalindrome(self, x: int) -> bool:
        x2 = str(x)
        return x2 == "".join(reversed(x2))
        
s = Solution()
print(s.isPalindrome(11211))