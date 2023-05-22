def lengthOfLongestSubstring(s):
    if len(s) == 0:
        return 0
    if len(s) == 1:
        return 1
    values = set()
    for c in range(len(s)):
        str = s[c]
        ss = s[c:]
        for i in range(1, len(ss)):
            char = ss[i]
            if char in str:
                break
            str += char
        values.add(len(str))
    return max(values)

print(lengthOfLongestSubstring("pwwkew"))