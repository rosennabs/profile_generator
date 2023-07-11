const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your name? Nicknames are also acceptable :",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower?"
];

const answers = [];
let questionIndex = 0;

function askQuestion() {
  rl.question(questions[questionIndex] + " ", (answer) => {
    answers.push(answer);

    questionIndex++

    if (questionIndex < questions.length) {
      askQuestion();
    }
    else {
      console.log(`Here is a short intro to use for your online profile: "${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}".`);
      
      rl.close();
    }

  });

};

askQuestion();

