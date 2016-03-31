$(function() {
  console.log(romans(parseInt(prompt("type a number"))));

  function romans(num) {
    var numArray = [[1000, "M"], [500, "D"], [100, "C"], [50, "L"], [10, "X"], [5, "V"], [1, "I"]];
    var results = []; //try removing

    for (var i = 0; i < numArray.length; i++) {
      if (num / numArray[i][0] >= 1) { //if roman numeral value is in the number
        var n = Math.floor(num / numArray[i][0]); //number of times symbol occurs
        if (n < 4) {
          for (var j = 0; j < n; j++) { //push roman numeral symbols to results array
            results.push(numArray[i][1]);
          }
        } else if (n === 4){
          results.push(numArray[i][1]);
          results.push(numArray[i-1][1]);
        } else {
          alert("I am so confused");
        }
        var remainder = num % numArray[i][0]; //remainder
        num = remainder;
        //console.log(results + " " + remainder);
      }
    }
    return(results.join(""));
  }

});
