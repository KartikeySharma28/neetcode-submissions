class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        function createFingerPrint(str){
            const fingerPrint = new Array(26).fill(0)

            for (const char of str){
             const value = char.charCodeAt(0) - 97
                fingerPrint[value]++ 
            }
            return fingerPrint
        }

        const map = new Map();
        for(let i = 0 ; i<strs.length ; i++){
            const str = strs[i]
            const fingerPrint = createFingerPrint(str)
            const key = fingerPrint.join("#");
            if (map.has(key))
                map.get(key).push(str)
            else{
                map.set(key,[str])
            }

        }
return Array.from(map.values())
    }

}
