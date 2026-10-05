class Solution {
    lengthOfLongestSubstring(s) 
    {
        if(s.length===0){return 0}
        const stringSet = new Set([s[0]]);

        let max = stringSet.size;
        let left = 0;
        let right = 1;
        // for(let i = 0 ; i<s.length;i++)
        while(right<s.length)
        {
            // if(left === right )
            // {
            //     right++

            // }   

            if(stringSet.has(s[right]))
            {
                stringSet.delete(s[left])
                left++
            }
            else
            {
                stringSet.add(s[right])
                right++
            }
            max = Math.max(max,stringSet.size)
        }
        return max;

    }
}
