// Introducing conditional statements vid

// if else statement


// var answer = prompt("What programming language is the name of a gem");
// if ( answer.toUpperCase === 'RUBY'){
//     document.write("Correct!"); 
// } else {
//     document.write("You're wrong.")
// }

// if the condition is correct then the code runs 

//---------------------------------------------------------------------------------------------------------------------------------//

// Comparison operators vid - conditional statements

// ('apple'<'bear')
// true, because a comes before b in the alphabet 
/*
> 
>=
<
<=
==
===
!=
!==
*/
// ("3" == 3)
//true, the js interpreter converts the string to 3 

// ("3" === 3)  // false, the value strictly isn't the same.
// === is strict equality 
// == is type equality 

//---------------------------------------------------------------------------------------------------------------------------------//

// Build a random number generator game vid 

// var randomNumber = Math.floor(Math.random()*6)+1;
// var guess = prompt("Guess the number between 1 and 6");

// if (parseInt(guess) === randomNumber){
//     console.log("you got it!");
// } else {
//     console.log("you suck!")
// }


//---------------------------------------------------------------------------------------------------------------------------------//

// Boolean values vid
// if ( true ){
//     document.write("the condition is true");
// } else {
//     document.write("the condition is false");
// }
// helps to keep track of a certain condition throughout the program 

// var randomNumber = Math.floor(Math.random()*6)+1;
// var guess = prompt("Guess the number between 1 and 6");

// var correctGuess = false;
// var randomNumber = Math.floor(Math.random()*6)+1;
// var guess = prompt ("guess the number");
// if (parseInt(guess) === randomNumber){
//     correctGuess = true;
// }
// if (correctGuess){
//     document.write("you guessed right!");

// }else {
//     document.write("sorry you guessed wrong")
// }

//---------------------------------------------------------------------------------------------------------------------------------//

// programming multiple outcomes vid - else if 

// var ten = 10;
// var two = 2;
// var one = 1; 

// if (one>ten){
//     console.log("one is more than ten")
// }else if (two > ten){
//     console.log("two is more than ten")
// } else{
//     console.log("you're a dumbass mate")
// }

//---------------------------------------------------------------------------------------------------------------------------------//

// improving the random number guessing game vid 

// var number = Math.floor(Math.random()*6)+1;
// var guess = prompt("guess the number between 1 and 6")

// function numberGame(){
//     if (parseInt(number) < guess){
//         console.log("you guessed too low")
//     } else if (parseInt(number) > guess){
//         console.log("you guessed too high");
//     } else {
//         console.log("woooo")
//     }
// }

// numberGame();

//---------------------------------------------------------------------------------------------------------------------------------//

// Document code with comments

// single line 
/* 
Multi-line  - it's common to add a multi-line comment at the start of a program explaining what it does 
*/


//---------------------------------------------------------------------------------------------------------------------------------//

//Combining multiple tests into a single condition vid 

// &&, 2 conditions are evalutated separately but work together to create one boolean

var age = 25;

if (20 < age && age < 30){
    console.log(age)
}
// and operator


var agree = prompt("do you agree?");

if (agree === 'yes' || agree === 'ys' || agree === 'y'){
    console.log("yes!")
}


//  || or operator = whole thing is true if one condition is true