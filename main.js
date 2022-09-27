//  delete <script>
function quiz(){
	let score = 0;
	let num;
	let question;
    let answer;
	let quiz_questions = [
	  'How many moons does Earth have?',
	  'How many moons does Saturn have?',
	  'How many moons does Venus have?'] // add square bracket
	;
	let quiz_answers = [1, 82, 0];
	
	//get total number of questions
	let totalQuestion = quiz_questions.length; // use length
	
	//generate random number for question
	let = Math.floor(Math.random() * 3);
		
	for(num = 0; num < totalQuestion; num++){ // add ; inside ( ), add { after, change count to num, chage <= to <
		question = quiz_questions[num];
		answer = prompt(question); 
		if (answer == quiz_answers[num]) { //== instead of ===
			score++; // add another +
			alert("Correct!");
		} else {
			alert("Wrong");
		}
		//num++; don't
		if (num == totalQuestion-1) { //== instead of =
            //console.log("we have reached the last if");
			//num = 0; don't
            document.write(`You got ${score} out of ${totalQuestion} questions correct.`); //use ` instead of ' and take out <p>
        }
    } // add }
}; // add } and ;