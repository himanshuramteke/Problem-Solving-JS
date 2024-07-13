function sumOfDigits(x) {
    let sum = 0;
    while (x > 0) {
        let lastDigit = x % 10;  //4136 % 10 = 6(last digit)
        sum += lastDigit;
        x = Math.floor(x / 10);  //4136 / 10 -> 413.6 -> Math.floor(413.6) -> 413
    }
    return sum;
}
console.log(sumOfDigits(4136));