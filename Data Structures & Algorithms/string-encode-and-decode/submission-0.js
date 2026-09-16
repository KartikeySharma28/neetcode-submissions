class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        const parts = []

        for ( const str of strs){
            const length = str.length 
            const part = `${length}#${str}`
            parts.push(part)
        }
        return parts.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0; 
        const strs =[]
        while(i<str.length)
        {
            const start = str.indexOf("#",i);
            const endValue = parseInt(str.substring(i,start))
            i  = start + endValue + 1
            const value = str.substring(start+1,start + 1 + endValue)
            strs.push(value)
        }
    return strs
    }
}
