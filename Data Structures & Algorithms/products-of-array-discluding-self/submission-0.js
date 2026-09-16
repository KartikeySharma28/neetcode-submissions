class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const left = [1];
        let sum = 1
        for( let i = 1 ; i< nums.length ; i++){
            sum = sum * nums[i-1]
            left.push(sum)
        }
        sum=1
        const right = new Array(nums.length).fill(1);
        for( let i = nums.length-2 ; i>=0 ; i--){
            sum = sum * nums[i+1]
            right[i]=sum
        }
        const product = []
        for(let i=0; i<nums.length; i ++){
            product.push(left[i] * right[i])
        } 
        return product
    }
}
