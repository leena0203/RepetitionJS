var number = process.argv[2];
var output = 0;
for (var i = 1; i <= number; i++) {
    output += 1/i;
}
console.log("Harmonic Number is: "+output);