class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map();
        let max=0
        let left = 0
        let result = 0

        for(let i = 0 ; i <s.length ;i++){
            map.set(s[i],(map.get(s[i])||0) + 1)

            // right ++
            if(map.get(s[i])>max){
                max = map.get(s[i])
            }
            if( (i-left+1)-(max + k) >0 )  
            { 
                map.set(s[left],map.get(s[left])-1)
                left ++
            }
                // result = Math.max(result,i-left+)
                result = Math.max(result, i - left + 1);
        }
// 
        return result
    }
}
