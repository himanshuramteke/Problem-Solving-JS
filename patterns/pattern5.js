function pattern(n) {
    for(let row = 1; row <= n; row += 1) {
        let str = " ";
        for(let col = 1; col <= n-row+1; col += 1) {
            str += "*";
        }
        console.log(str);
    }
}
pattern(5)

/* output

 *****
 ****
 ***
 **
 *
 
*/