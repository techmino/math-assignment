//feet to mile
console.log(" ");
console.log("Question:1")
console.log("feet to Mile conversion")


function feetToMile(feet) {
   var number = (feet / (1760 * 3));
   return number;
}
var result = feetToMile(10000);
var resultRound = Math.round(result);
console.log(result, resultRound);


//wood calculator
console.log(" ");
console.log("Question:2")
console.log("wood calculator")


function woodCalculator(chair, table, bed) {
   var total = chair * 1 + table * 2 + bed * 3;
   return total;
}
var requirement = woodCalculator(20, 2, 3);
console.log("Total wood requirement is", requirement, "cft");

//brick calculator
console.log(" ");
console.log("Question:3")
console.log("brick calculator")


function brickCalculator(floor) {
   if (floor > 20) {

      var bricks = 10 * 15 * 1000 + 10 * 12 * 1000 + (floor - 20) * 10 * 1000;
      return bricks;
   }

   if (floor > 10 && floor <= 20) {
      var bricks = 10 * 15 * 1000 + (floor - 10) * 12 * 1000;
      return bricks;
   }

   if (floor <= 10) {
      var bricks = floor * 15 * 1000;
      return bricks;
   }

}

var result = brickCalculator(27);
console.log("Number of bricks required for the mentioned floors =", result, "piece");



//find tiny friend considering name length
console.log(" ");
console.log("Question:4");
console.log("find tiny friend considering name length");


function tinyFriend(name) {
   var tiny = name[0]
   for (var i = 0; i < name.length; i++) {
      var currentName = name[i];
      if (currentName.length < tiny.length) {
         tiny = currentName;
      }
   }
   return tiny;
}
var friendsName = ["kawsar", "pulok", "hojaifa", "nurhossain", "babu"];
var tinyName = tinyFriend(friendsName);
console.log("The tiny name of my  friend list is: ", tinyName);











