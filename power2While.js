var num = parseInt(process.argv[2]);
let i = 0;
while (i <= 8 && i <= num) {
    console.log("2^" + i + " = " + (2 ** i));
    i++;
}