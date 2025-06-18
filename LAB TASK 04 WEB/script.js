


// Js for Table
function multiTable() {
	const num = parseInt(document.getElementById("number").value);
	const result = document.getElementById("result");
				
	if (isNaN(num) || num < 1 || num > 12) {
		result.innerText = "Please enter a valid number 1 -12.";
		return;
	}
				
	let table = "<h3><br><br>Multiplication Table for " + num + "</h3>";
	for (let i = 1; i <= 12 ; i++){
		table += i + "  x  " + num + " =  " + (i * num) + "<br>";
	}
				
	result.innerHTML = table;
}


	
// Quiz
	let num1 , num2, correctAnswer;
	const questionElement = document.getElementById('question');
	const answerInput = document.getElementById('answer');
	const sumitbutton = document.getElementById('sumbit');
	const feedback = document.getElementById('result');

function generateQuestion(){
	/*initliazi the value*/
	feedback.textContent = '';
	feedback.className = '';
	answerInput.value = '';
		
	num1 = Math.floor(Math.random() * 12) + 1;
	num2 = Math.floor(Math.random() * 12) + 1;
	correctAnswer = num1 * num2;
		
	questionElement.textContent = `${num1} x ${num2} = ?`;
	answerInput.focus();
}

function checkAnswer(){
	const UserAnswer = parseInt(answerInput.value);
		
	if (isNaN(UserAnswer)) {
		feedback.textContent = "Please enter a valid number!";
		feedback.className = "wrong";
		return;
	} 
		
	if (UserAnswer === correctAnswer){
		feedback.textContent = "✅Correct!";
		feedback.className = "correct"
	} else {
		feedback.textContent = `❌Wrong, that answer is ${correctAnswer}`;
		feedback.className = "wrong";
	}	
		
	setTimeout (generateQuestion, 2500);
}

document.addEventListener('DOMContentLoaded', function() {
    // Check which page we're on
    if (document.getElementById('quiz')) {
        alert("Welcome to the Multiplication Quiz Page!");
        generateQuestion();
        document.getElementById('submit').addEventListener('click', checkAnswer);
    } 
    else if (document.getElementById('table')) {
        alert("Welcome to the Multiplication Table Page!");
    }
});


