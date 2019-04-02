//Introducing functions vid 

//start by declaring the function (providing instructions)
//then place a set of parenthesis, this is how functions are identified
//then braces, forming the code block 
//js inside the braces is run whenever the function is activated
//to activate, you 'call' the function 

// function goToCoffeeShop(){

// }

// goToCoffeeShop(); //calling the function 


// function alertRandom(){
//     var randomNumber = Math.floor(Math.random()*6)+1;
//     alert(randomNumber);
// }

// alertRandom();


// // function expression - assign a function to a variable

// var alertRandom = function() {
//     var randonNumber= math.foor(Math.random()*6)+1;
//     alert(randomNumber);
// };

//---------------------------------------------------------------------------------------------------------------------------------//


//Functions change the flow of your program vid 

/*
good idea to put the functions at the top of the script. 
*/ 

//---------------------------------------------------------------------------------------------------------------------------------//

// Getting information from a function vid

// function goToCoffeeShop(){
//     return "Espresso is on its way.";
// }

// alert(goToCoffeeShop());
// the function is returning a String value 

// function getRandomNumber(){
//     var randomNumber = Math.floor(Math.random()*6)+1;
//     return randomNumber;
// }

// alert(getRandomNumber());
// console.log(getRandomNumber);

// creating a function that returns a value so it can be used in other way or for more calculations. 


// function isMailEmpty(){
//     var field = document.getElementById('email'); 
//     if (field.value === ''){    //conditional statement is checking the condition
//         return true;
//     } else {
//         return false;
//     }
// }

// var fieldTest = isMailEmpty();
// if (fieldTest === true){
//     alert('please provide your email address.');
// }


//the return statement should be the last thing in a function 

// function noAlert(){
//     return 5;
//     alert("what");
// }

// noAlert();
// alert("this will appear!");
//---------------------------------------------------------------------------------------------------------------------------------//

// Giving information to functions vid 


// function goToCoffeeShop(drink){
//     alert(drink + ' is on its way');
// }


// goToCoffeeShop('hot chocolate');
//parameter is expecting info, so we need to pass it info 


// function getRandomNumber(upper){
//     var randomNumber = Math.floor(Math.random()* upper)+1;
//     return randomNumber;
// }

// console.log(getRandomNumber(100));
// console.log(getRandomNumber(10));

/*passing an arguement to the function to control how it works. 
the function stores the value within the parameter and uses that value 
you can pass multiple arguements
*/

// function goToCoffeeShop(drink, pastry){
//     alert(drink +  'and' + pastry + ' is on its way');
// }

// goToCoffeeShop('hot chocolate', 'cheese pastry');

// function getRandomNumber(upper){
//     var randomNumber = Math.floor(Math.randon()* upper)+1;
//     return randomNumber;
// }

// function areaOfARectangle(width, length, unit){
//     var area = width * length;
//     return area + ' ' + unit;
// }


// console.log(areaOfARectangle(10,4, 'sq ft'));


// try not to pass more than 4/5 arguements to a function, as this can make it complicated to use 

//---------------------------------------------------------------------------------------------------------------------------------//

// function compareNumbers(oneNumber, twoNumber){
//     if (oneNumber < twoNumber){
//         return oneNumber;
//     }else{
//         return twoNumber;
//     }
// }
// alert(compareNumbers(3,2))
//---------------------------------------------------------------------------------------------------------------------------------//

// variable scope vid

// function greeting(){
//     var person = 'Lilah';
//     alert(person);
// }

// var person = 'george';
// greeting();
// alert(person);
// greeting();

//each variable lives in a different scope 
//global scope is outside of the function - all functions can access the global scope
//always use the var keyword when creating a variable inside a function

//---------------------------------------------------------------------------------------------------------------------------------//

// random number challenge vid

// function randomNumberGenerator(numberOne){
//     var randomNumber = Math.floor(Math.random()*numberOne)+1;
//     return randomNumber;
// }

// console.log(randomNumberGenerator(100));

// random number challenge sol vid 
//---------------------------------------------------------------------------------------------------------------------------------//

// random number challenge, part 2 vid


// function randomNumberGenerator(numberOne){
//     var randomNumber= Math.floor(Math.random()*numberOne) + 1;
//     if (isNaN(numberOne)){
//         throw new Error('error message');
//     } else {
//     return randomNumber;
// }
// }

// alert(randomNumberGenerator(86));

// isNaN(9)  // false
// isNaN('nine')//true 

//---------------------------------------------------------------------------------------------------------------------------------//

//Introducing the practice vid

function areaOfARectangle(width, height){
    var area = width * height;
    return "The area of the rectangle is " + area; 
}

alert(areaOfARectangle(5,22))

function volumeOfAPrism(width, height, length){
    var volume = width * height * length; 
    return "The volume of the prism is " + volume;
}

alert(volumeOfAPrism(4.5,12.5,17.4));

function areaOfACircle(radius){
    var area = 3.16 * (radius * radius);
    return "The area of the circle is " + area;
}

alert(areaOfACircle(7.2));

function volumeOfASphere(radius){
    var volume = (radius * radius * radius) * 3.16 * 4 / 3;
    return "The volume of the sphere is " + volume;
}

alert(volumeOfASphere(7.2));