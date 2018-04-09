/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */

var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "He is the British computer scientist who invented the World Wide Web?",
		"options" : [
			{"a": "Sir Tim Berners-Lee", 
			 "b":"Sir Tim Burners-Lee",
			 "c":"Sir Tim Burgers-Lee", 
			 "d":"Sir Tim Bergers-Lee"}
			],
		"answer":"Sir Tim Berners-Lee",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "On this year, the inventor of WWW laid out his vision for what would become the web in a document called “Information Management: A Proposal”.",
		"options" : [
			{"a": "1986", 
			 "b":"1898", 
			 "c":"1989",
             "d": "1999"}
			],
		"answer":"1989",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "World Wide Web is also known as W3",
		"options" : [
			{"a": "TRUE", 
			 "b":"FALSE"}
			],
		"answer":"TRUE",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "The World Wide Web began as a networked information project at what company?",
		"options" : [
			{"a":"conCERN", 
			 "b":"CERN", 
			 "c":"TrendMicro",
             "d": "Accenture"}
			],
		"answer":"CERN",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "CERN means",
		"options" : [
			{"a":"Council of European Resource Nuclear", 
			 "b":"Counseil European Recherche Nucleare", 
			 "c":"Conseil Europeen por la Recherche Nucleaire",
             "d": "None of the choices"}
			],
		"answer":"Conseil Europeen por la Recherche Nucleaire",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "WWW means.",
		"options" : [
			{"a":"Wide World Web", 
			 "b":"Web World Wide",
			 "c":"World Web Wide",
			 "d":"World Wide Web",
			}
			],
		"answer":"World Web Wide",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "Sir Tim Burners Lee invented this in 1989 at CERN.",
		"options" : [
			{"a":"WWW", 
			 "b":"HTTP",
			 "c":"HTML",
			 "d":"URL",
			}
			],
		"answer":"WWW",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" :"Web can be accessed in",
		"options" : [
			{"a":"Mobile", 
			 "b":"Laptop",
			 "c":"PC",
			 "d":"All of the above",
			}
			],
		"answer":"All of the above",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "What is the Nationality of Sir Tim Berners-Lee",
		"options" : [
			{"a":"Asian", 
			 "b":"British",
			 "c":"American",
			 "d":"African"
			}
			],
		"answer":"British",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "The co-founder of the WWW is",
		"options" : [
			{"a": "Steve Jobs", 
			 "b":"Bill Gates",
			 "c":"Stephen Hawkings",
			 "d":"None of the choices",
			}
			],
		"answer":"None of the choices",
		"score":0,
		"status": ""
	}
	]
}



var quizApp = function() {

	this.score = 0;		
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.JS.length;

	
	this.displayQuiz = function(cque) {
		this.currentque = cque;
		if(this.currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.JS[this.currentque].id + '.');
	
			
			$("#question").html(quiz.JS[this.currentque].question);	
			 $("#question-options").html("");
			for (var key in quiz.JS[this.currentque].options[0]) {
			  if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
		
				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
							  "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
								  quiz.JS[this.currentque].options[0][key] +
							 "</span></label>"
				);
			  }
			}
		}
		if(this.currentque <= 0) {
			$("#previous").attr("disabled", true);	
		}
		if(this.currentque >= totalque) {
				$('#next').attr('disabled', true);
				for(var i = 0; i < totalque; i++) {
					this.score = this.score + quiz.JS[i].score;
				}
			return this.showResult(this.score);	
		}
	}
	
	this.showResult = function(scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr  + '/' + totalque + "</h1>");
		for(var j = 0; j < totalque; j++) {
			var res;
			if(quiz.JS[j].score == 0) {
					res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
			'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
			'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
			'<div class="last-row"><b>Score:</b> &nbsp;' + res +
			
			'</div>' 
			
			);
			
		}
	}
	
	this.checkAnswer = function(option) {
		var answer = quiz.JS[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   //for <
		option = option.replace(/\>/g,"&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if(option ==  quiz.JS[this.currentque].answer) {
			if(quiz.JS[this.currentque].score == "") {
				quiz.JS[this.currentque].score = 1;
				quiz.JS[this.currentque].status = "correct";
		}
		} else {
			quiz.JS[this.currentque].status = "wrong";
		}
		
	}	
	 
	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);	
			
	}
	
}


var jsq = new quizApp();

var selectedopt;
	$(document).ready(function() {
			jsq.displayQuiz(0);		
		
	$('#question-options').on('change', 'input[type=radio][name=option]', function(e) {

			//var radio = $(this).find('input:radio');
			$(this).prop("checked", true);
				selectedopt = $(this).val();
		});
		
			
			 
	});

	
	
	
	$('#next').click(function(e) {
			e.preventDefault();
			if(selectedopt) {
				jsq.checkAnswer(selectedopt);
			}
			jsq.changeQuestion(1);
	});	
	
	$('#previous').click(function(e) {
		e.preventDefault();
		if(selectedopt) {
			jsq.checkAnswer(selectedopt);
		}
			jsq.changeQuestion(-1);
	});