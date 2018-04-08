(function() {
  var questions = [{
    question: "He is the British computer scientist who invented the World Wide Web?",
    choices: ["Sir Tim Berners-Lee", "Sir Tim Burners-Lee", "Sir Tim Berland-Lee", "Sir Tim Bergers-Lee"],
    correctAnswer: 0
  }, {
    question: "On this year, the inventor of WWW laid out his vision for what would become the web in a document called “Information Management: A Proposal”.?",
    choices: [1986, 1898, 1989, 1999],
    correctAnswer: 2
  }, {
    question: "World Wide Web is also known as W3",
    choices: ["TRUE", "FALSE"],
    correctAnswer: 1
  }, {
    question: "The World Wide Web began as a networked information project at what company?",
    choices: ["conCERN", "CERN", "TrendMicro", "Accenture"],
    correctAnswer: 1
  }, {
    question: "CERN means",
    choices: ["Council of European Resource Nuclear", "Counseil European Recherche Nucleare", "Conseil Europeen por la Recherche Nucleaire", "None of the choices"],
    correctAnswer: 2
  }, {
    question: "WWW means",
    choices: ["Wide World Web", "Web World Wide", "World Web Wide", "World Wide Web"],
    correctAnswer: 3
  }, {
    question: "Sir Tim Burners Lee invented this in 1989 at CERN",
    choices: ["WWW", "HTML", "HTTP", "None of the choices"],
    correctAnswer: 3
  }, {
    question: "Web can be accessed in",
    choices: ["Mobile", "Laptop", "PC", "All of the above"],
    correctAnswer: 3
  }, {
    question: "Sir Tim Berners-Lee is",
    choices: ["Asian", "British", "American", "African"],
    correctAnswer: 1
  }, {
    question: "The co-founder of world wide web is",
    choices: ["Steve Jobs", "Bill Gates", "Stephen Hawking", "None of the choices"],
    correctAnswer: 0
  }];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' out of ' +
                 questions.length + ' right!!!');
    return score;
  }
})();