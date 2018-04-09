/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */

var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "This declaration is needed to be defined for a document to be a HTML.",
		"options" : [
			{"a": "&lt;!DOCTYPE html&gt;", 
			 "b":"&lt;html&gt;",
			 "c":"&lt;head&gt;", 
			 "d":"&lt;!DOCTYPE&gt;"}
			],
		"answer":"&lt;<!DOCTYPE html&gt;",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "What element in HTML is the root element?",
		"options" : [
			{"a": "&lt;head&gt; section", 
			 "b":"&lt;body&gt; section", 
			 "c":"&lt;html&gt; section",
             "d": "&lt;title&gt; section"}
			],
		"answer":"&lt;html&gt; section",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "What element in HTML that contains the visible page content?",
		"options" : [
			{"a": "&lt;head&gt; section", 
			 "b":"&lt;body&gt; section", 
			 "c":"&lt;html&gt; section",
             "d": "&lt;title&gt; section"}
			],
		"answer":"&lt;body&gt; section",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "What element in HTML specified a title?",
		"options" : [
			{"a": "&lt;head&gt; section", 
			 "b":"&lt;body&gt; section", 
			 "c":"&lt;html&gt; section",
             "d": "&lt;title&gt; section"}
			],
		"answer":"&lt;title&gt; section",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "What element in HTML contains the meta information?",
		"options" : [
			{"a": "&lt;head&gt; section", 
			 "b":"&lt;body&gt; section", 
			 "c":"&lt;html&gt; section",
             "d": "&lt;title&gt; section"}
			],
		"answer":"&lt;head&gt; section",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "All HTML documents must start with a document type declaration: &lt;!DOCTYPE html&gt;.",
		"options" : [
			{"a": " TRUE", 
			 "b": " FALSE",
			}
			],
		"answer":"TRUE",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "Sir Tim Berners Lee invented the Hypertext Markup Language in 1989.",
		"options" : [
			{"a": " TRUE", 
			 "b": " FALSE",
			}
			],
		"answer":"FALSE",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "What versions were HTML developed from 1991-1994?",
		"options" : [
			{"a": "version 2.0 -  version 4", 
			 "b":"version 1 -  version 4",
			 "c":"version 1.5 -  version 4",
			 "d":"version 1 -  version 2.0",
			}
			],
		"answer":"version 1 -  version 4",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "What version of HTML was defined by the HTML working group at 1995?",
		"options" : [
			{"a": "HTML 3", 
			 "b":"HTML 4",
			 "c":"HTML 1.5.",
			 "d":"HTML 2.0"
			}
			],
		"answer":"HTML 2.0",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "Which of the following syntax is correct?",
		"options" : [
			{"a": "&lt;div CLASS = “menu”&gt;", 
			 "b":"&lt;div&gt class = “menu”  &lt;/div&gt;",
			 "c":"&lt;div class=“menu”&gt",
			 "d":"&lt;div class=menu&gt",
			}
			],
		"answer":"&lt;div class=“menu”&gt",
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