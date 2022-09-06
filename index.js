var readLineSync = require('readline-sync'); 

var score  = 0;

console.log("Give the Country name from which the respective Bike brand is there")

function riverQuiz(bikeName, originCountry){
  var userAnswer = readLineSync.question(bikeName);

  if(userAnswer.toUpperCase() === originCountry.toUpperCase()){
    console.log("Right!");
    score++;
  }else{
    console.log("Wrong!");
  }
  console.log("----------------");
}

//Questions

var ques = [{
  bikeName: "BMW",
  originCountry: "Germany"
},
{
  bikeName: "Yamaha",
  originCountry: "Japan"
},
{
  bikeName: "Bajaj",
  originCountry: "India"
},
{
  bikeName: "Aprilia",
  originCountry: "Italy"
},
{
  bikeName: "Hero",
  originCountry: "India"
}];


for(var i=0; i<ques.length; i++){
  riverQuiz(ques[i].bikeName, ques[i].originCountry);
}

console.log("You scored "+score+" correct answers out of " + ques.length);