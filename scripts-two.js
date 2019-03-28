// Numbers vid

// whole numbers = integers 
// decimal numbers = floating point numbers

// ---------------------------------------------------------------------------------------------------------------------------------//

// Doing math vid 

// var secondsPerMin = 60;
// var minsPerHour = 60;
// var hoursPerDay = 24;
// var daysPerWeek = 7;
// var weeksPerYear = 52;
// var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
// var secondsPerYear = secondsPerDay * daysPerWeek * weeksPerYear;
// var year = 25;

// var secondsIHaveBeenAlive = year * secondsPerYear;
// document.write("There are " + secondsPerDay + " seconds in a day.")
// document.write("I have been alive for " + secondsIHaveBeenAlive + " seconds! Jeesusssss")

//---------------------------------------------------------------------------------------------------------------------------------//

// Numbers and strings

// var HTMLBadges = prompt("how many HTML badges do you have lol ");
// var CSSBadges = prompt("how many css?");
// var totalBadges = HTMLBadges + CSSBadges;
// alert(totalBadges);

// this will concatenate the strings, not helpful when adding numbers 

// var HTMLBadges = prompt("How many HTML badges?")
// var CSSBadges = prompt("how many CSS?");
// var totalBadges = parseInt(CSSBadges) + parseInt(HTMLBadges);
// alert(totalBadges);
// this will add the numbers together

// parse float - this can convert strings to a number   
// parseFloat('3.14');
//3.14

//---------------------------------------------------------------------------------------------------------------------------------//

// The Mad Libs Challenge Revisited vid

// var questions = 3;
// var questionsLeft = '[' + questions + 'questions left]';
// var adjective = prompt('Please type an adjective' + questionsLeft);
// questions -= 1;
// questionsLeft = '[' + questions + 'questions left]';
// var verb = prompt('Please type a verb' + questionsLeft);
// questions -= 1;
// questionsLeft = '[' + questions + 'questions left]';
// var noun = prompt('Please type a noun' + questionsLeft);
// alert('All done. Ready for the message?');
// var sentence = "<h2>There once was a " + adjective;
// sentence += ' programmer who wanted to use JavaScript to ' + verb;
// sentence += ' the ' + noun + '.</h2>';
// document.write(sentence);

//DRY - never repeat the same code twice. 

//---------------------------------------------------------------------------------------------------------------------------------//

// The math object vid

// js is made up of objects, numbers are one and strings are another. Objects have properties, just like variables 

// Math.round(2.2); // rounds to the nearest whole number 

//---------------------------------------------------------------------------------------------------------------------------------//

// Create a random number vid

// alert(Math.random()); 
// Math.random() * 6;

// Math.floor // rounds down
// Math.ceil // rounds up 

// alert(Math.floor(Math.random()* 6)); // always returns a value between 0 and 5
// alert(Math.floor(Math.random()* 6) + 1); // this will return a number between 1 and 6 

// var dieRoll = Math.floor(Math.random() * 6) + 1;
// alert('You rolled a  ' + dieRoll);

//---------------------------------------------------------------------------------------------------------------------------------//

// The random challenge vid 

// Collect a number from a user and print a random number from 1 to the user's provided number.

// var usersNumber = parseInt(prompt("Please type a number"));
// alert(Math.floor(Math.random() * usersNumber) + 1);

// Further challenge = create a program that asks for 2 numbers and generate a random number between the first and the second

// var usersFirstNumber = parseInt(prompt("Please type your first number"));
// var usersSecondNumber = parseInt(prompt("please type your second number"));
// alert(Math.floor(Math.random() * usersSecondNumber) + usersFirstNumber);

// Random challenge solution vid 

//---------------------------------------------------------------------------------------------------------------------------------//

// Practice javascript math methods vid

// should open an alert dialog introducing the program 
// then two prompt boxes asking for numbers
// document.write to page 

alert("lets do some math!");
var firstNumber = prompt("please type your first number")
var secondNumber = prompt("Please type the second number");

var add = parseInt(firstNumber) + parseInt(secondNumber);
var multiply = parseInt(firstNumber) * parseInt(secondNumber);
var divide = parseInt(firstNumber) / parseInt(secondNumber);
var sub = parseInt(firstNumber) - parseInt(secondNumber);

document.write(firstNumber + '+' + secondNumber + '=' + add +
" " + firstNumber + '*' + secondNumber + '=' + multiply +
" " + firstNumber + '/' + secondNumber + '=' + divide +
" " + firstNumber + '-' + secondNumber + '=' + sub);
// + * / - results of both 