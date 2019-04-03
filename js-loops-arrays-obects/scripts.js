// Introducing loops, arrays and objects vid


//What are loops vid


// function randomNumber(upper){
//     return Math.floor(Math.random()* upper) +1;
// }
// var counter = 0;
// while (counter < 10000) {  //test condition 
//     var randNum = randomNumber(6);
//     document.write(randNum + ' ');
//     counter += 1;

// }



//----------------------------------------------------------------------------------------------

// A closer look at loop conditions 

// var counter = 0;
// while (counter < 100){
//     console.log(counter);
//     counter +=1;
// }

// var upper = 10000;
// var randomNumber = getRandomNumber(upper);
// var guess;
// var attempts = 0;

// function getRandomNumber(upper){
//     return Math.floor(Math.random() * upper) + 1;
// }

// while (guess !== randomNumber){
//     guess = getRandomNumber(upper);
//     attempts += 1;
//     console.log("The random number is " + randomNumber + ", and the guess was " + guess);
//     if (guess == randomNumber){
//         alert("It took " + attempts + " attempts for the computer to guess the number!");
//     }
// }

// if the test condition is true at the beginning the loop won't run 
// break condition allows you to exit the loop 


//----------------------------------------------------------------------------------------------

// do while loops 

// do {

// } while ()

// do it over and over again as long as the condition is true 
// difference between this and while loop - always executes the code block at least once, because the condition is tested after the loop
// while loop: condition tested at beginning
// do while: condition tested at the end 

// var randomNumber = getRandomNumber(10);
// var guess;
// var guessCount = 0;
// var correctGuess = false; 

// function getRandomNumber(upper){
//     var num = Math.floor(Math.random()* upper) + 1;
//     return num;
// }

// do {
//     guess= prompt("i'm thinking of a number between 1 and 10");
//     guessCount += 1;
//     if (parseInt(guess) === randomNumber) {
//     correctGuess = true;
// }

// } while (! correctGuess)  // not operator 
//     alert("you got it!");

//----------------------------------------------------------------------------------------------

// For loops 

// used for actions that need to run a particular number of times
// commonly used with arrays 


// var counter = 0;

// while (counter < 10){
//     document.write(counter);
//     counter += 1;
// }
// // This is the same as 

// for (var counter = 0; counter < 10; counter +=1){
//     document.write(counter);
// }

// declare the variable, condition, result 

// for (var i = 11; i < 500; i += 2){
//     console.log(i);
// }
// fast way to write loops 


// var html = ''; 
// for (var i = 1; i <= 10; i += 1){
//     html += i + i;
// }
// console.log(html);



//----------------------------------------------------------------------------------------------

// Exiting loops - break statement 

// var randomNumber = getRandomNumber(10);
// var guess;
// var guessCount = 0;
// var correctGuess = false;

// function getRandomNumber( upper ) {
//   var num = Math.floor(Math.random() * upper) + 1; 
//   return num;
// }

// while(guessCount < 10){
//   guess = prompt('I am thinking of a number between 1 and 10. What is it?');
//   guessCount += 1;
//   if (parseInt(guess) === randomNumber) {
//     correctGuess = true;
//     break; // stops an infinite loop 
//   }  
// }
// if (correctGuess){ 
// document.write('<h1>You guessed the number!</h1>');
// document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);
// } else {
//     document.write("you suck");
// }


//----------------------------------------------------------------------------------------------


// The refactor challenge 

// DRY -don't repeat yourself 

// var html = '';
// var red;
// var green;
// var blue;
// var rgbColor;
// var counter = 0;

// while (counter < 10){

// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';
// counter += 1;
// }

// document.write(html);

// the refactor challenge solution vid - could have used a for loop 