function upperTriangle(n) {
    for(let row = 1; row <= n; row += 1) {
        let str = "";
        let spaces = n - row;
        for(let j = 1; j <= spaces; j += 1) {
            str += " ";
        }
        let stars = 2*row - 1;
        for(let col = 1; col <= stars; col += 1) {
            str += "*";
        }
        console.log(str);
    }
}

function lowerTriangle(n) {
    for (let row = 1; row <= n-1; row += 1) {
        let str = "";
        let spaces = row;
        for (let j = 1; j <= spaces; j += 1) {
           str += " ";
        }
        let stars = 2*(n - row) - 1;
        for (let k = 1; k <= stars; k += 1) {
            str += "*";
        }
        console.log(str);
    }
}

function pattern(n) {
    upperTriangle(n);
    lowerTriangle(n);
}

pattern(5)

/* output
     *
    ***
   *****
  *******
 *********
 *********
  *******
   *****
    ***
     *
*/