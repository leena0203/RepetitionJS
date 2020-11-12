var start = parseInt(process.argv[2]);
var end = parseInt(process.argv[3]);
console.log("Prime Nos. between "+start+ " and "+end+ " : ");
for (let i = start; i <= end; i++) {
    let flag = new Boolean(true);
    for (let j = 2; j <= (Math.sqrt(i)); j++) {
        if (i % j == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true && i > 2) {
        console.log(i);
    }
}