class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // let  right=null
        // let  left = null 
        // if(s.length % 2===0)
        // {
        //     right = s.length/2
        //     left = s.length/2
        // }
        // else 
        // {
        //     right = left = Math.floor(s.length/2)
        // }
        let left = 0
        let right = s.length-1
        while(left < right ){
            // if(s[left] > a && s[left] < z && s[left] )
            if(! /[a-zA-Z0-9]/.test(s[left])){left ++; continue;}
            if(! /[a-zA-Z0-9]/.test(s[right])){right --; continue;}

            if(s[left].toLowerCase() !== s[right].toLowerCase())
            {
                return false
            }
            else
            {
                left++
                right--
            }
        }
        return true
    }
}
