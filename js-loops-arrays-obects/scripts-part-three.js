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

//Mixing and Matching Arrays and Objects