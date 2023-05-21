package main

import "log"

func main() {
	test1 := []int{2,7,11,15}
	log.Println(twoSum(test1, 9))
	test2 := []int{3,2,4}
	log.Println(twoSum(test2, 6))
	test3 := []int{3,3}
	log.Println(twoSum(test3, 6))
	test4 := []int{3,2,3}
	log.Println(twoSum(test4, 6))
}

func twoSum(nums []int, target int) []int {
    for i := 0; i < len(nums); i++ {
        num := nums[i]
        nums2 := copy(nums, i)
        for i2 := 0; i2 < len(nums2); i2++ {
			numToAdd := nums2[i2]
			if num+numToAdd == target {
				return []int{i,i2+1}
			}
        }
    }
    return []int{0,0}
}

func copy(slice []int, index int) []int {
	newSlice := make([]int, 0)
	newSlice = append(newSlice, slice...)
    s := append(newSlice[:index], newSlice[index+1:]...)
	return s
}