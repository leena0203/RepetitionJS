var number = process.argv[2];
let flag = new Boolean(true);
for (let i = 2; i <= (Math.sqrt(number)); i++) {
    if (number % i == 0) {
        flag = false;
        break;
    }
}
if (number <= 2) {
    flag = false;
}
if (flag == true) {
    console.log("It is a prime number");
} else {
    console.log("Not a prime number");
} 