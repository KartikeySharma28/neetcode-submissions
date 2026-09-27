class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let leftHighArray = []
        let rightHighArray = []
        let high = 0
        let output = 0 
        for(let i = 0 ; i<height.length; i ++)
        {
            if (height[i]>high)
            {
                high=height[i]
            }
        leftHighArray.push(high);
        }
        high=0
        for(let i = height.length-1 ; i>=0 ; i --)
        {
            if (height[i]>high)
            {
                high=height[i]
            }
            rightHighArray.push(high);
        }
        rightHighArray.reverse()
        let left = 0
        let right = 0
        for(let i = 0 ; i<height.length; i ++)
        {

            const mininum = Math.min(leftHighArray[i],rightHighArray[i]) 
            const ans = mininum - height[i]
            output = output + ans
        }
    return output
    // return rightHighArray
    // return leftHighArray
    // return[0,0,0,0]
    // console.log(leftHighArray)
return 0
    }
}
