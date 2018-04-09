/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */

var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "What does AJAX means?",
		"options" : [
			{"a": "Available JavaScript Asynchronous XML", 
			 "b":"Asynchronous JavaScript and XML",
			 "c":"Asynchronous Java and XML", 
			 "d":"Asynchronous JavaScript Available XML"}
			],
		"answer":"Asynchronous JavaScript and XML",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "AJAX makes possible to update the web page without reloading it",
		"options" : [
			{"a":"TRUE", 
			 "b":"FALSE",}
			],
		"answer":"TRUE",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "What is the advantage of using AJAX?",
		"options" : [
			{"a": "Traffic will be lessened between the client and the server", 
			 "b":"Doesn’t need to reload the webpage if an action is done",
             "c":"It saves memory in using data from the same page",
             "d":"All of the choices are correct"}
			],
		"answer":"All of the choices are correct",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "All of the following are advantages of using AJAX except for",
		"options" : [
			{"a":"Traffic will be lessened between the client and the server", 
			 "b":"Doesn’t need to reload the webpage if an action is done", 
			 "c":"It saves memory in using data from the same page",
             "d":"Some users turn off their browser’s JavaScript functionality which will leave the AJAX useless"}
			],
		"answer":"Some users turn off their browser’s JavaScript functionality which will leave the AJAX useless  ",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "In what ways a request made through XMLHttpRequest can fetch the data",
		"options" : [
			{"a":"Asynchronous only", 
			 "b":"Synchronous only", 
			 "c":"Both a and b",
             "d": "Neither a nor b"}
			],
		"answer":"Both a and b",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "What will you use to get the content of the remote XML document",
		"options" : [
			{"a":"responseXML", 
			 "b":"XMLHttpResponse",
			 "c":"XMLHttpRequest",
			 "d":"XPath",
			}
			],
		"answer":"XMLHttpRequest",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "In using the XMLHttpRequest to get the content of the remote XML document, what property will the DOM object contained a parsed document",
		"options" : [
			{"a":"XMLSerializer", 
			 "b":"RegExp",
			 "c":"XPath ",
			 "d":"ResponseXML",
			}
			],
		"answer":"ResponseXML",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" :"This will return the DOMString that contains the response string returned by the HTTP server",
		"options" : [
			{"a":"XMLHttpRequest.responseURL", "b":"XMLHttpRequest.responseXML",
             "c":"XMLHttpRequest.statusText",
			 "d":"HMLHttpRequest.responseType",
			}
			],
		"answer":"XMLHttpRequest.statusText",
		"score":0,
		"status": ""
	},
	{
		"id" : 9, 
		"question" : "This method will override the MIME type that is returned by the server",
		"options" : [
			{"a":"XMLHttpRequest.openMimeType()", 
			 "b":"XMLHttpRequest.sendMimeType()",
             "c":"XMLHttpRequest.overrideMime()",
			 "d":"XMLHttpRequest.overrideMimeType()"
			}
			],
		"answer":"XMLHttpRequest.overrideMimeType()",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "This object represents a file-like object of immutable, raw data",
		"options" : [
			{"a":"Blob", 
			 "b":"BlobBuilder",
			 "c":"Blob()",
			 "d":"BlobEvent",
			}
			],
		"answer":"Blob",
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