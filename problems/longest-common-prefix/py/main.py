import re

class Solution:
    def longestCommonPrefix(self, strs) -> str:
        if len(strs) <= 1:
            return strs[0]
        elif len(strs) == 0:
            return ""
        joint = " "+" ".join(strs)
        curr = {"str": "", "matches": 0}
        for s in strs:
            for i in range(0, len(s)+1):
                seq = s[:i]
                regex = r" "+seq
                result = re.findall(regex, joint)
                resultLength = len(result)
                if resultLength <= 1:
                    break
                if resultLength >= curr["matches"] and len(seq) >= len(curr["str"]):
                    curr["str"] = seq
                    curr["matches"] = resultLength
        if curr["matches"] < len(strs):
            return ""
        return curr["str"]