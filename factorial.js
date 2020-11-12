var number = process.argv[2];
let factorial = 1;
if (number < 0) {
    console.log("You entered negative number")
} else {
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    console.log("Factorial of "+number+ " = " + factorial);
}