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

var person = {
    name: 'Dave',
    age: 24
};

alert(person['name']);
// provide the propertys name as a string

//can also use dot notation, easier 

alert(person.name);