package main

import (
	"log"
	"strings"
)

func main() {
	log.Println(lengthOfLongestSubstring("pwwkew"));
}

func lengthOfLongestSubstring(s string) int {
    if len(s) == 0 {
        return 0
    }
    if len(s) == 1 {
        return 1
    }
    maxLength := 0
    for c := 0; c < len(s); c++ {
        str := string(s[c])
        ss := s[c:]
        for i := 1; i < len(ss); i++ {
            char := string(ss[i])
            if strings.Contains(str, char) {
                break
            }
            str += char
        }
        if len(str) > maxLength {
            maxLength = len(str)
        }
    }
    return maxLength
}