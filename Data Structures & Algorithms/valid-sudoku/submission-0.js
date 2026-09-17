class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        let b=0;
        const arraySets= new Array(3).fill(null).map(()=> new Array(9).fill(null))
        for(let i = 0 ; i<9 ; i ++){
            arraySets[0][i]= new Set
            arraySets[1][i]= new Set
            arraySets[2][i]= new Set
        }

        for( let i = 0;i<board.length; i++  )
        {
            // if (i > 5) {
            //     b = 6;
            // } else if (i > 2) {
            //     b = 3;
            // } else {
            //     b = 0;
            // }
            const row = board[i]
            for(let j = 0;j < row.length; j ++ )
            {
                if (row[j] === ".") {
                continue;
            }
                                if (j > 5) {
                        b = 2 + (Math.floor(i / 3) * 3);
                    } else if (j > 2) {
                        b = 1 + (Math.floor(i / 3) * 3);
                    } else {
                        b = Math.floor(i / 3) * 3;
                    }   

                if (arraySets[0][i].has(row[j]))
                {
                    return false
                }
                else if (arraySets[1][b].has(row[j]))
                {
                    return false
                }
                else if (arraySets[2][j].has(row[j]))
                {
                    return false
                }
                else 
                {
                    
                    arraySets[0][i].add(row[j])
                    arraySets[1][b].add(row[j])
                    arraySets[2][j].add(row[j])
                    const k = j+1
             }
            }
        }
        return true
    }
}
