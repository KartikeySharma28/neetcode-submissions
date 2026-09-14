class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for( let i = 0 ; i< nums.length ; i ++){
            const current = nums[i]
            const needed = target - current; 
            if(map.has(needed)){
                
                return[i,map.get(needed)]
            }
            else{
                map.set(current,i)
            }
        }
    }
}
