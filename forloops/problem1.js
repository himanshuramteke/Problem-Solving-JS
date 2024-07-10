// print all the even numbers which is greater than 1 and less than 25

for (let i = 1;i <= 25; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// another way of doing this 

for (let i = 2; i <= 25; i += 2) {
    console.log(i);
}