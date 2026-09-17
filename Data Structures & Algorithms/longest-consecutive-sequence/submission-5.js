class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length===0) {return 0}
        const set = new Set()
        let highCounter = 1; 
        for ( let num of nums )
        {
            if(set.has(num)){continue}
            set.add(num)
        }
            for ( let num of nums )
            {
                let counter = 1; 
                if(!set.has(num-1))
                {
                    while(set.has(num+1))
                    {
                        counter++
                        num++
                    }
                }
                if(counter>highCounter)
                {
                    highCounter = counter
                }
        }
        return highCounter
    }
}
