class Solution:
    def kthDistinct(self, arr, k) -> str:
        if k < 1:
            return ""
        pos = 0
        for i in range(len(arr)):
            m = list(filter(lambda x: x == arr[i], arr))
            if len(m) == 1:
                pos += 1
                if k == pos:
                    return m[0]
        return ""