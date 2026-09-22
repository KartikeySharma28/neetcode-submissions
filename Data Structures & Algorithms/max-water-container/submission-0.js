class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0; 
        let right = heights.length-1; 
        let highestArea = 0 

        // for(let i = 0 ; i<heights.length-1; i++){
        //     const height = Math.min(heights[left],heights[right]);
        //     const width = right-left
        //     const area  = height*width
        //     if(area>highestArea){highestArea = area}
        //     if()
        // }
        while(left<right){
            const height = Math.min(heights[left],heights[right]);
            const width = right-left
            const area  = height*width
            if(area>highestArea){highestArea = area}
            heights[left]>heights[right]?right--:left++
        }
        return highestArea;
    }
}