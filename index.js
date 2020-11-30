var readlineSync = require('readline-sync');
var score = 0;

console.log('Hi, welcome to the game - "Do you know Dheeraj", Whats your name? \n');
var name = readlineSync.question();
console.log(`\nHi ${name}, welcome to the game, lets start the quiz \n`);



function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer){
    console.log("RIGHT!");
    score = score + 1;
  }else {
    console.log("You dont know me :/ !")
  }
  console.log("Your current score is: ",score);
  }


var questions=[{
  question:`Which of the following is my home name? [answer in a or b] \n
a)Abrakadabra \t b)Salil\n
`,
  answer:"b",
},{
  question:`Do I want to be a  part of - 'I hate Rachel Green Club" from friends? [answer in a or b] \n
a)No \t b)Yes
`,
  answer:"b",
},{
  question:`Which of the following is my fav food? [answer in a or b] \n
a)Burger \t b)Chicken
`,
  answer:"b",
}]

for (var i =0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("YAY! Your final score is: ",score,"/ 3")
