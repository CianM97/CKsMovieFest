function torf(){
		
			/*let randQuest = ["Question 1", "Question 2" , "Question 3", "Question 4" , "Question 5"]; */
			
			/* Cian - sets the array to hold the 10 questions that the user will see */
			var randQuest = ["Is Harrison Ford the main actor in Indiana Jones?", "No Kid Hungry is the charity we are supporting?" , "Land Before Time is on Friday?", "Dirty Dancing was released in 1987?" , "Here's Johnny is a quote from Die Hard?", "The Shining is based on a novel by Stephen King?", "Steven Spielberg was the director of Land Before Time?", "Michael Dunlop is the venue owner?", "You don't have to donate money to this event?", "This is an 80's themed event?"];
			
			/* Cian - defines the variable tempQuest to take the place of randQuest so the original array stays intact when spliced. */
			var tempQuest;
			
			/* Cian - for loop to show the a question 5 times and check their answers */
			for(i = 0, tempQuest = randQuest; i < 5; i++){
				

			
				
				// Cian - declare the variable randEle to hold the random value from the array
				var randEle;
				// Cian - chooses a random number and sets it to randEle, the number will be the same as the length of the array
				randEle = Math.floor(Math.random()*tempQuest.length);
				
				// Cian - an alert that will show the user the random question that was choosen
				alert(tempQuest[randEle]);
				
				
				
				
				// Cian - declare the variable uGuess to hold the users input
				var uGuess;
				//Cian - sends the user a prompt for their answer and sets the input to uGuess
				uGuess = parseInt(prompt("Please enter a 1 for true or 2 for false"));
				
				//Cian - declare the variable msge to hold the output message the user will see after each question
				var msge;
				
				// Cian - if statement that checks which question the user seen
				if(tempQuest[randEle] === "Is Harrison Ford the main actor in Indiana Jones?"){
					
					// Cian - if the users guess is 1 meaning true then set msge to correct 
					if(uGuess === 1){
						msge = "Correct, Nobody should get that Wrong";
						
					// Cian - if the users guess is 2 meaning false then set the msge to incorrect
					}else if(uGuess === 2){
						msge="Incorrect, of course Harrison Ford is the main Actor!";
						
					// Cian - if the users guess is anything else then sets the msge to incorrect, worng value entered
					}else{
						msge = "Incorrect, wrong value entered.";
					}
					
				}
				
				// Cian - Each if statement is the same only difference is checking that a different question was asked
				if(tempQuest[randEle] === "No Kid Hungry is the charity we are supporting?"){
					
					if(uGuess === 1){
						msge = "Correct, You can find a donate link on the about page";
						
				
					}else if(uGuess === 2){
						msge="No Kid Hungry is the charity!, go donate now!";
						
					}else{
						msge = "Incorrect, wrong value entered.";
					}
					
				}
				if(tempQuest[randEle] === "Land Before Time is on Friday?"){
					
					if(uGuess === 1){
						msge = "WRONG! This move is on Saturday!";
					
				
					}else if(uGuess === 2){
						msge="Correct, we will be showing it on Saturday!";
						
					}else{
						 msge = "Incorrect, wrong value entered.";
					}
					
				}
				if(tempQuest[randEle] === "Dirty Dancing was released in 1987?"){
					
					if(uGuess === 1){
						msge = "Correct, You really know your Movies!";
						
				
					}else if(uGuess === 2){
						msge="Incorrect, Go read our website again!";
						
					}else{
						 msge = "Incorrect, wrong value entered.";
					}
					
				}
				if(tempQuest[randEle] === "Here's Johnny is a quote from Die Hard?"){
					
					if(uGuess === 1){
						msge = "Incorrect! How did you manage to get that wrong?";
						
				
					}else if(uGuess === 2){
						msge="That one was a gimmie";
						
					}else{
						msge = "Incorrect, wrong value entered.";
					}
				}
				if(tempQuest[randEle] === "The Shining is based on a novel by Stephen King?"){
					
					if(uGuess === 1){
						msge = "Correct! Only someone as weird as him could write that";
						
				
					}else if(uGuess === 2){
						msge="No it wasn't the simpsons, it was Stephen King";
						
					}else{
						msge = "Incorrect, wrong value entered.";
					}
				}
				if(tempQuest[randEle] === "Steven Spielberg was the director of Land Before Time?"){
					
					if(uGuess === 1){
						msge = "InCorrect, That one was tough, you get half a point, if points were a thing";
						
				
					}else if(uGuess === 2){
						msge="Correct, he was an executive producer";
						
					}else{
						msge = "Incorrect, wrong value entered.";
					}
				}
				if(tempQuest[randEle] === "Michael Dunlop is the venue owner?"){
					
					if(uGuess === 1){
						msge = "Correct, If you got that one wrong may as well stay at home";
						
				
					}else if(uGuess === 2){
						msge="Incorrect, Dont bother coming to the event";
						
					}else{
						msge = "Incorrect, wrong value entered.";
					}
				}
				if(tempQuest[randEle] === "You don't have to donate money to this event?"){
					
					if(uGuess === 1){
						msge = "Incorrect, No money, No movies";
						
				
					}else if(uGuess === 2){
						msge="Correct, No Kid Goes Hungry needs your money";
						
					}else{
						msge = "Incorrect, wrong value entered.";
					}
				}
				if(tempQuest[randEle] === "This is an 80's themed event?"){
					
					if(uGuess === 1){
						msge = "Correct, Nice and simple";
						
				
					}else if(uGuess === 2){
						msge="You are just plain wrong";
						
					}else{
						msge = "Incorrect, wrong value entered.";
					}
				}
				
				// Cian - Prints the variable msge to the user after they answer the question to show if they are correct or not
				alert(msge);
				
				// Cian - removes the question from the array so that the user isn't asked the same question twice
				tempQuest.splice(randEle, 1);
				
				
				
			}
			
			
			
			
		}
		
// Cian - Example of manipulating the DOM, a button then when clicked will show/hide the tables		
function showHide(){
	// Cian - sets the variable doc to document.getElementById so i dont have to write it eacj time
	var doc = document.getElementById("tableOne");
	
	//Cian - if the table is shown on click will hide.
	if(doc.style.display === 'none'){
		doc.style.display = 'inline';	
	}else{
		doc.style.display = 'none';
	}
}

// Cian - Each table will have its own button
function showHide1(){
	var doc = document.getElementById("tableTwo");
	if(doc.style.display === 'none'){
		doc.style.display = 'inline';	
		
	// Cian - if the table is hidden on click will show
	}else{
		doc.style.display = 'none';
	}
}



function showHide2(){
	var doc = document.getElementById("tableThree");
	if(doc.style.display === 'none'){
		doc.style.display = 'inline';	
	}else{
		doc.style.display = 'none';
	}
}