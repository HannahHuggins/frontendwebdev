// What is an array

//variable is a like a box that can only carry one item, array can carry many items at a time
//more flexible method of storing info 

// var arrayName = [
//     'random',
//     23,
//     true,
//     'etc'
// ];


// var scores = [10,20,30,40,50];

// var shoppingList = [
//     'banana',
//     'chocolate',
//     'washing liquid'
// ];


//--------------------------------------------------------------------------------------------------------------------------

// Accessing items in an array 

// var scores = [1,2,3];

// alert(scores[1]);

// var shopping = ['banana', 'chocolate', 'something else'];
// alert(shopping[0]);
//--------------------------------------------------------------------------------------------------------------------------

// adding data to arrays

// var numbers = [1,2,3,4,5,6,2,4,5];
// numbers[numbers.length]= 10; // this will add 10 to the end of the array 
// alert(numbers);

// // the push method can also add things to an array 

// numbers.push(11);

// // can also add more than one 

// numbers.push(11,12,12,12,12);

// alert(numbers);


// // the unshift method adds numbers to the beginning of the array 

// numbers.unshift(1,1);
// alert(numbers);


// var playList = []; // array literal, empty array 
// platList.push('random song');

// console.log(playList);

//--------------------------------------------------------------------------------------------------------------------------
// removing items from arrays

//pop and shift - pop removes the last  

// var numbers = [1,2,3,4,5,6];
// numbers.pop(); // this takes off the last item from the array 
// alert(numbers);

// // this can also be put ito a variable 

// var newNumber = numbers.pop();
// alert(newNumber); // 5

//shift method removes the first item from the array 


// var numbers = [12,12,12,1,1,2,4,34,3];
// alert(numbers.shift());


// var nums = [1,2,3,4,5];
// nums.length; //5
// nums.push(6); // 6 items in the array 

//--------------------------------------------------------------------------------------------------------------------------

// Using for loops with arrays 

// var students = ['ben', 'other', 'jerry', 'paul']; // array is created with 3 items 
// for (var i=0; i <students.length; i += 1){ // var i created and 0 stored. Condition tested, then variable is added to 
//     console.log(students[i]); }

//students.length means that the loop will execute for the amount of items in the array 
// e.g: array of quiz questions, ask one question after another 

// array created with 4 items 
// then the for loop 
// i counter used to count the iterations through the loop
// .length method used as a condition 
// counter added to each iteration 
// as soon as the counter hits the number of items in the array 
// the console will stop logging student names 

// var playList = [
//     'i did it my way',
//     'respect',
//     'imagine',
//     'born to run'
// ];
// // array with song names 
// function print(message){
//     document.write(message);

// //function to print songs to the html

// // function to print the html 
// function printList(list){
//     var listHtml = '<ol>';
//     for(var i = 0; i < list.length; i += 1){ 
//         listHtml += '<li>' + list[i] + '</li>';
//     }
//     listHtml += '</ol>';
//     print(listHtml); // previous function called, passed the '<ol>'
// }

// printList(playList); // passing the array in the function 

//array created 
//html printed 
//array printed 

//--------------------------------------------------------------------------------------------------------------------------

// useful array methods 

// join method 

// var daysInAWeek = [
//     'monday',
//     'tues',
//     'wed',
//     'thurs',
//     'fri'
// ];
// var daysString = daysInAWeek.join(', ');
// alert(daysInAWeek);
// alert(daysString);

// the join method passes any character to the array, you can also pass more than one characteer


// concat method - can be used to add one list to another
 
// var students = [
//     'henry',
//     'harry',
//     'ron'
// ];

// var newStudents = [
//     'joan',
//     'john',
//     'random'
// ];

// var allstudents = students.concat(newStudents);

// alert(allstudents);

// this will add the 2nd array to the first 


//indexOf method 

// var fruit = [
//     'apple',
//     'orange',
//     'bananas'
// ];

// var position = fruit.indexOf('apple');

// alert(position);

// var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
// var search;

// function print(message) {
//   document.write( '<p>' + message + '</p>');
// }

// while(true){
//     search = prompt("Search for a product in the store, type 'list' to list all of the items in the store and 'quit' to quit the program");
//     if (search === 'quit'){
//         break;
//     } else if (search === 'list'){
//         print(inStock.join(', '))
//     } else {
//         if (inStock.indexOf(search)){
//             print('yes we have ' + message)
//         } else {
//             print (message + ' is not in stock');
//         }
//     }
// }

//--------------------------------------------------------------------------------------------------------------------------

// Two-Dimensional arrays 