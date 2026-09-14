class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        
        const dupnums = {}
        for ( let value of nums){
            if (dupnums[value])
            {
                return true
            }
            else{  
            dupnums[value] = 1;
            }
        }
        return false

    }
}
