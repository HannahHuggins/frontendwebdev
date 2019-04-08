//The Object Literal







//------------------------------------------------------------------

// var student = {
//     name: 'Dave',
//     grades: [80, 85, 90]
// };


//key isn't in quotes, acts like a variable name 

// var person = {
//     name : 'Sarah',
//     country : 'US',
//     age : 35,
//     treeHouseStudent : true,
//     skills : ['JavaScript', 'HTML']
// };

//------------------------------------------------------------------

//Accessing object properties

//arrays use an index number to access the value, objects use keys

// var person = {
//     name: 'Dave',
//     age: 24
// };

// alert(person['name']);
// provide the propertys name as a string

//can also use dot notation, easier 

// alert(person.name);


// to change the name of the person object, you just assign a new value 

// person.name = 'Bobby';

// alert(person.name);

// person.country = 'Brazil';

// alert(person.country);

// var person = {
//     name: 'sarah',
//     country: 'us',
//     age: 35,
//     treehouse: true,
//     skills : ['javascript', 'html', 'css']
// };

// the object has 5 properties 

// function print(message){
//     var div = document.getElementById('ouput');
//     div.innerHTML = message;
// }

// var message = 'hello my name is ' + person.name;
// message += 'i live in the ' + person.country;
// person.name = 'rainbow dash';
// message += 'but i really wish my name was ' + person.name;
// person.age += 1;
// message += 'my age is now ' + person.age;
// message += 'i have ' + person.skills.length + ' skills: ';
// message += person.skills.join(', ');
// alert(message);

//------------------------------------------------------------------

//Using `for in` to Loop Through an Object's Properties

// lot of similarities between arrays and objects 

// because array value has a numeric index, for loops are an easy way to
// access each item in the array 

// you can access each value in an object using a for-in loop. (only applies to objects).

// loops through each key (property name) in the object. 


// var student = {
//     name:'dave',
//     age:25
// };


// for(var age in student){
//     //do something 
//     alert(student.name);
// }
// for each key in student, do something 

//for - the loop 
//var - the variable (key name)
// in - in the object 

// access property in the for in loop using brackets, can't use dot notation 


// var person = {
//     name:'sarah',
//     country:'us',
//     age: 35,
//     treehouse: true,
//     skills: ['js', 'css','html']

// };

// for (prop in person){
//     console.log(prop, ': ', person[prop]);
// }


//for - keyword introducing the loop
//prop acts like a paramete in a function 
//just like a variable, name it whatever you want 

//------------------------------------------------------------------

// //Mixing and Matching Arrays and Objects

// var questions = [
//     { question:'How many states are there in the US?', answer:50},
//     { question:'How many continents are there?', answer:7 },
//     { question:'How many legs does an insect have?', answer:6 }
// ];

// // turning the prior 2 dimensional array into objects within an array 

// var correctAnswers = 0;
// var question;
// var answer;
// var response;

// function print(message){
//     document.write(message)
// }

// for(var i = 0; i < questions; i += 1){
//     question = questions[i].question;
//     answer = questions[i].answer;
//     response = prompt(question);
//     response = parseInt(response);
//     if (response === answer){
//         correctAnswers += 1;
//     }
// }
// // looping through the array, each time through the loop accessing one of the objects in the array 
// html = "You got " + correctAnswers + " question(s) right."
// print(html);

//------------------------------------------------------------------

//JavaScript object notation 

// objects are the model for JSON
//JS object notation 
//used with ajax to exchange info between the browser and server
 
// json format can easily be converted to a javascript object 

//
//------------------------------------------------------------------

// The build an object challenge, part 1 

// create a script that creates a bunch of student records and prints the records to a webpage 

// create a data structure to hold info about students 


// var students = [
//     {name: 'dave', track: 'javaScript', achievements: 'js', points:50},
//     {name: 'henry', track: 'java', achievements: 'j', point: 100},
//     {name: 'hannah', track: 'javaScript', achievements: 'js', points: 200},
//     {name: 'dave', track: 'javascript', achievements: 'js', points: 500},
//     {name: 'jo', track: 'css', achievements: 'c', points: 1000}
// ];

// for (var prop in students){
//     document.write("name: " + students[prop].name + ", track: " + 
//     students[prop].track + ", achievements: " + students[prop].achievements
//     + ", points: " + students[prop].points)
// }

// the build an object challenge, part 1 solution 
// build an object challenge part 2 
// the build an object challenge, part 2 solution 

// the student record search challenge 

// make the records searchable 
// prompt method to request the name of a student 


// var students = [
//     {name: 'dave', track: 'javaScript', achievements: 'js', points:50},
//     {name: 'henry', track: 'java', achievements: 'j', point: 100},
//     {name: 'hannah', track: 'javaScript', achievements: 'js', points: 200},
//     {name: 'dave', track: 'javascript', achievements: 'js', points: 500},
//     {name: 'jo', track: 'css', achievements: 'c', points: 1000}
// ];

// for (var prop in students){
//     document.write("name: " + students[prop].name + ", track: " + 
//     students[prop].track + ", achievements: " + students[prop].achievements
//     + ", points: " + students[prop].points)
// }

// function searchStudents(){
//     studentName = prompt("what is the students name?");
//         if (studentName === 'dave'){
//             alert("student name: " + students[0].name + ", track: " +  
//             students[0].track + ", achievements: " + students[0].achievements
//             + ", points: " + students[0].achievements);
//         } else if (studentName === 'henry'){
//             alert("Student name: " + students[1].name + ", track: " + 
//             students[1].track + ", achievements: " + students[1].achievements
//             + ", points:" + students[1].points)
//         } else if (studentName === 'hannah'){
//             alert("Student name: " + students[2].name + ", achievements: " + students[2].achievements
//             + ", track: " + students[2].track + ", points: " + students[2].points)

//         }
//     }


// searchStudents();

// the sudent record search challenge solution

// ---------------------------------------------------------------------

// practice object literals in javascript 

// introducing the practice vid 

// var book = [
//     {title: 'harry potter', author: 'jk', year: 1993},
// ];

// for (prop in book){
//     console.log(book[prop]);
// }


