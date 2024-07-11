function pattern(n) {
    //logic for printing the pattern 
    //write a loop to repeat task for n rows 
    for (let row = 1; row <= n; row += 1) {
        let str = "";
        for (let col = 1; col <= n; col += 1) {
            str += "*";
        }
        console.log(str);
    }
}

pattern(10)