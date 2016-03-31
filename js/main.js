$(function() {
  $("#romans").click(function(){
  console.log(romans(parseInt(prompt("type a number"))));
  });


  $("#in").keydown(function() {
   setTimeout(function() {
      results = crypt($("#in").val());
      console.log(results[0]);
      $("p#output").text(results[0]);
      grid = results[1];
     //display grid in html
     $("table").empty();
     for (var r = 0; r < grid.length; r++){
       $("table").append("<tr></tr>");
       for (var c = 0; c < grid[r].length; c++){
         if (grid[r][c]) {
         $("table tr:nth-child(" + (r + 1)  + ")").append("<td>" + grid[r][c] + "</td>");
         } else {
         $("table tr:nth-child(" + (r + 1)  + ")").append("<td> </td>");
         }
       }
     }
   }, 100);
 });


  // $("#crypt").click(function(){
  //    results = crypt(prompt("type a sentence"));
  //    console.log(results[0]);
  //    $("p#output").text(results[0]);
  //    grid = results[1];
  //   //display grid in html
  //   for (var r = 0; r < grid.length; r++){
  //     $("table").append("<tr></tr>");
  //     for (var c = 0; c < grid[r].length; c++){
  //       if (grid[r][c]) {
  //       $("table tr:nth-child(" + (r + 1)  + ")").append("<td>" + grid[r][c] + "</td>");
  //       } else {
  //       $("table tr:nth-child(" + (r + 1)  + ")").append("<td> </td>");
  //       }
  //     }
  //   }
  // });


  $("table").append("<tr></tr>");
  //CRYPT BIZ
  function crypt(str) {
    var str = str.toLowerCase().replace(/\W/g, "").split("");
    var rows = Math.ceil(Math.sqrt(str.length));
    var columns = Math.ceil(str.length/rows);
    var results = [];
    var encrypted = [];
    var i = 0;

    //for (var i = 0; i < str.length; i++) {
      for (var r = 0; r < rows; r++){
        results.push([]);
        for (var c = 0; c < columns; c++){
          results[r].push(str[i]);
          i++;
        }
      }

      for (var a = 0; a < columns; a++){
        encrypted.push(" ");
        for (var b = 0; b < rows; b++){
          encrypted.push(results[b][a]);
        }
      }

      // var col = i % columns;
      // var row = Math.floor(i / columns);
      // results[row][col] = str[i];
    //}

    return [encrypted.join(""), results]
  }

  //ROMAN BIZ
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
