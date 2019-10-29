//  Created function to begin the game
$("#start").click(function() {
  for (var i = 0; i < questions.length; i++) {
    $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
    for (var j = 0; j < questions[i].answers.length; j++) {
      $("#subwrapper").append(
        "<input type ='radio' name = 'question-" +
          i +
          "'value='" +
          questions[i].answers[j] +
          "'>" +
          questions[i].answers[j]
      );
    }
  }
});
var questions = [
  {
    question:"What was the name of Nintendo's first portable video game system?",
    answers: ["Game Boy", "Nintendo DS", "Virtual Boy", "Game Boy Color"],
    correctAnswer: "Game Boy"
  },
  {
    question: "What was is the name of Zeldas alternate identity?",
    answers: ["Link", "Navi", "Cardi", " Sheikah"],
    correctAnswer: "Sheikah"
  },
  {
    question: "Which of these is not a shell used in Mariokart?",
    answers: ["Blueshell", "Redshell", "Greenshell", "Orangshell"],
    correctAnswer: "Orangeshell"
  },
  {
    question: "What is the best selling Nintendo Console?",
    answers: ["Game Boy", "Nintendo DS", "Wii", "PlayStation"],
    correctAnswer: "Nintendo Ds"
  },
  {
    question: "What is Mario's official job?",
    answers: ["Gardener", "Firefighter", "Pool Boy", "Plumber"],
    correctAnswer: "Plumber"
  },
  {
    question: "What was not on Fox McClouds squadron?",
    answers: ["Falco", "Peppy", "Wolfen", "Slippy"],
    correctAnswer: "Wolfen"
  },
  {
    question:
      "What was the name of Nintendo's first portable video game system?",
    answers: ["Game Boy", "Nintendo DS", "Virtual Boy", "Game Boy Color"],
    correctAnswer: "Game Boy"
  }
];
