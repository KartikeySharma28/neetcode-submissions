    class Solution {
        /**
         * @param {number[]} nums
         * @param {number} k
         * @return {number[]}
         */
        topKFrequent(nums, k) {

            const map = new Map(); 
            // for( const i=0 ; i<num.length ; i ++){
            // }

            for(const num of nums)
            {
                if(map.has(num)){
                    map.set(num,map.get(num)+1)
                }
                else{
                    map.set(num,1);
                }
            }
            const bucket = new Array(nums.length+1).fill(null).map(()=>[])
            for(const [num,values] of map)
            {
                bucket[values].push(num)
            }
            const result = []

            for( let i = bucket.length-1 ; i>=0 ; i --)
            {
                for(const num of bucket[i]){
                    result.push(num)
                    if(result.length === k )
                    return result
                }
            }
            
        }
    }
