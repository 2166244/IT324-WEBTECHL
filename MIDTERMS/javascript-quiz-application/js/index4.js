/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */

var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "HTTP basic authentication support is configured by",
		"options" : [
			{"a": "Logout", 
			 "b":"http-basic",
			 "c":"http-basicauth", 
			 "d":"None of the choices"}
			],
		"answer":"http-basicauth",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "The http auto-config=” false” element automatically configures the basic security services that a typical web application needs",
		"options" : [
			{"a":"TRUE", 
			 "b":"FALSE", 
			 "c":"either TRUE or FALSE",
             "d": "neither TRUE nor FALSE"}
			],
		"answer":"TRUE",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "HTTP means",
		"options" : [
			{"a": "Hypertext Transport Protocol", 
			 "b":"Hypertext Transfer Port",
             "c":"Hyperlink Transfer Protocol",
             "d":"Hypertext Transfer Protocol"}
			],
		"answer":"Hypertext Transfer Protocol",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "HTTP's port is",
		"options" : [
			{"a":"port 78", 
			 "b":"port 79", 
			 "c":"port 80",
             "d":"port 81"}
			],
		"answer":"port 80",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "In HTTP, it has a simple text-based structure",
		"options" : [
			{"a":"Uniform Resource Identifier", 
			 "b":"Uniform Reference Identifier", 
			 "c":"Universal Reference Identifier",
             "d": "Universal Resource Identifier"}
			],
		"answer":"Uniform Resource Identifier",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "What does the server receive after receiving and interpreting a request message",
		"options" : [
			{"a":"HTTP response message", 
			 "b":"HTTP request message",
			 "c":"GET",
			 "d":"POST",
			}
			],
		"answer":"HTTP response message",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "It is the very first line in a response message that contains the version of the protocol followed by status code, etc",
		"options" : [
			{"a":"Read-Line", 
			 "b":"Break-Line",
			 "c":"Status-Line ",
			 "d":"State-Line",
			}
			],
		"answer":"Status-Line ",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" :"It is an element which has a 3-digit integer result code in attempting to understand and satisfy request",
		"options" : [
			{"a":"Base-Code", 
			 "b":"Request-Code",
			 "c":"Response-Code",
			 "d":"Status-Code",
			}
			],
		"answer":"Status-Code",
		"score":0,
		"status": ""
	},
	{
		"id" : 9, 
		"question" : "Which of the following is not a part of the Client Error",
		"options" : [
			{"a":"Bad Request", 
			 "b":"Found",
			 "c":"Unauthorized",
			 "d":"Request Timed Out"
			}
			],
		"answer":"Found",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "Which of the followng is not a server error?",
		"options" : [
			{"a":"OK", 
			 "b":"Not Modified",
			 "c":"Forbidden",
			 "d":"Service Unavailable",
			}
			],
		"answer":"Service Unavailable",
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