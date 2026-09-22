class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let left = 0; 
        let right = nums.length-1;
        const newNums = []
        nums.sort((a,b)=>(a-b));
        for(let i = 0 ; i<(nums.length-2); i ++){
                if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
    }

            left = i+1; 
            let right = nums.length-1;
            while(left<right)
            {
if (nums[i] + nums[left] + nums[right] === 0) {
    newNums.push([nums[i], nums[left], nums[right]]);

    left++;
    right--;

    while (left < right && nums[left] === nums[left - 1]) {
        left++;
    }

    while (left < right && nums[right] === nums[right + 1]) {
        right--;
    }
}
                else if(nums[i]+nums[left]+nums[right] > 0){
                    right--
                }
                else if(nums[i]+nums[left]+nums[right] < 0){
                    left++
                }                
            }
        }
        return newNums;
    }
}
