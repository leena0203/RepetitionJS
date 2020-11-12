var headWins = 0;
var tailWins = 0;
var num = 0;
while (headWins < 11 && tailWins < 11) {
  num = Math.floor(Math.random() * 2);
  if (num == 0) {
    headWins++;
  }
  else {
    tailWins++;
  }
}
console.log("Head wins: " +headWins);
console.log("Tail wins: "+tailWins); 