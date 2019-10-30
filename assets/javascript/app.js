//  Created function to begin the game
$("#start").click(function() {
  game.start();
});
// created variable to hold questions and answers
var questions = [
  {
    question:
      "What was the name of Nintendo's first portable video game system?",
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
    question: "Who was not on Fox McClouds squadron?",
    answers: ["Falco", "Peppy", "Wolfen", "Slippy"],
    correctAnswer: "Wolfen"
  },
  {
    question: "What was the n64's 1st first person shooter game?",
    answers: ["Turok", "Goldeneye 007", "Jet Force Gemini", "Duke Nukem"],
    correctAnswer: "Turok"
  }
];
// created timer variable and function
var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function() {
    game.counter--;
    $("#counter").html(game.counter);
    if (game.counter <= 0) {
      console.log("Time is up!");
      game.done();
    }
  },
  // created start game function
  start: function() {
    timer = setInterval(game.countdown, 1000);

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
  }
};
