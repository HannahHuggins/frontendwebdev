
//welcome and overview vid

// Thinking globally vid 

//What is the DOM

//document object model - representation of a webpage that javascript can use
//map of a webpage that js can use
//live entity - changes that js makes to the dom alter the webpage 

//webpage as a tree-like structure 

//recap - global scope - window object 
//document, property of the window object
//---------------------------------------------------------------------------

// a simple example vid 

// const myHeading = document.getElementById('myHeading');

// myHeading.addEventListener('click', () => {
//     myHeading.style.color = 'red';
// });

//---------------------------------------------------------------------------
//select a page element by it's id 

//selection is a way to identify an element for the browser, so the browser can find it and make it available for us to do something with it using js 

// const myHeading = document.getElementById('myHeading');
// const myButton = document.getElementById('myButton');
// const myTextInput = document.getElementById('myTextInput');

// myButton.addEventListener('click', ()=>{
//     myHeading.style.color = myTextInput.value;
// });


//---------------------------------------------------------------------------

//select all elements of a particular type video 

//using document.getElementsByTagName()

// might want to select all of the items inside a list to make a todo list 

//document.getElementsByTagName() - returns a collection of elements

// const myList = document.getElementsByTagName('li');

// for(let i = 0; i < myList.length; i +=1){
//     myList[i].style.color = 'purple';
// }
// myList[2].style.color = 'purple';

//---------------------------------------------------------------------------

//Selecting elements with the same class name 

// using document.getElementsByClassName() 

// const myList = document.getElementsByTagName('li');

// for(let i =0; i < myList; i += 1){
//     myList[i].style.color = 'purple';
// }

// const errorNotPurple = document.getElementsByClassName('error-not-purple');

// for(let i = 0; i < errorNotPurple.length; i += 1){
//     myList[i].style.color = 'red';
// }

//---------------------------------------------------------------------------
// Using CSS queries to select page elements 

// document.querySelector()
//document.querySelectorAll()

// document.querySelectorAll('li'); - returns all elements that match the selector
// document.querySelector('li') - returns the first one that matches 

//how to select by type = 
// id =  #   document.querySelectorAll('#myHeading');
// class = .    document.querySelectorAll('.error-not-purple');
// html attribute = []  document.querySelector('[title=random]');

// css psuedo class selector nth - zebra stripe the list

// const evens = document.querySelectorAll('li:nth-child(even)');

// for(let i = 0; i < evens.length; i += 1){
//     evens[i].style.backgroundColor = 'lightgray';
// }


//css pesudo classes 

//every other list item has a light gray background 
//---------------------------------------------------------------------------

// practice selecting DOM elements 

//---------------------------------------------------------------------------

// getting and setting text with textContent and innerHTML 

// textContent method - use this to read or set text values of elements 

// innerHTML method - can read and alter elements on a webpage 


// const input = document.querySelector('input');
// const p = document.querySelector('p.description');
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     p.textContent = input.value + ':';
// });


// const input = document.querySelector('input');
// const p = document.querySelector('p.description');
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     p.innerHTML = input.value + ':';
// });

//---------------------------------------------------------------------------

//changing element atributes 

// element.attribute 

// const input = document.querySelector('input');
//input.type   - //text \

// const toggleList = document.getElementById("toggle-list");
// const listDiv = document.querySelector('.list');
// const descriptionInput = document.querySelector('input.description');
// const descriptionP = document.querySelector('p.description');
// const descriptionButton = document.querySelector('button.description');
// const addItemInput = document.querySelector('input.addItemInput');
// const addItemButton = document.querySelector('button.addItemButton');
// const removeItemButton = document.querySelector('button.removeItemButton');

// toggleList.addEventListener('click', () => {
//     if (listDiv.style.display == 'none') {
//         toggleList.textContent = 'Hide list';
//         listDiv.style.display = 'block';
//     } else {
//         toggleList.textContent = 'Show list';
//         listDiv.style.display = 'none';
//     }
// });


// descriptionButton.addEventListener('click', () => {
//     descriptionP.innerHTML = descriptionInput.value + ':';
//     descriptionInput.value = '';
// });

// addItemButton.addEventListener('click', () => {
//     let ul = document.getElementsByTagName('ul')[0];
//     let li = document.createElement('li');
//     li.textContent = addItemInput.value;
//     ul.appendChild(li);
//     addItemInput.value = '';
// });

// removeItemButton.addEventListener('click', () => {
//     let ul = document.getElementsByTagName('ul')[0];
//     let li = document.querySelector('li:last-child');
//     ul.removeChild('li');
// });



// title attribute has been set 
//---------------------------------------------------------------------------

// Creating new DOM elements 

// how to insert content into the DOM - appending nodes vid .appendChild() method 

// nodes belong to the dom, elements - HTML 

// eg <ul> parent, <li> child 

//-------------------------

//Removing nodes vid 

//removing elements from the page  e.g - when a user wants to delete a note/photo 

// .removeChild() method takes the arguement of the elemenet you want to remove 

//-------------------------

// practice 
//what is an event 

//something you do on the webpage, clicking, scrolling, moving through the page 

//when you interact with the page you may trigger events 

// function as parameters vid 

// function say(something){
//     console.log(something);
// }

// function exec(func, arg){
//     func(arg);
//}
//2 parameters ar very different data types, one is a function and the other is a string, but both can be passed as arguements 

// exec(say, "hi there!");

//passing a function into a function 



// we can oass a function directly into another function 

// function exec(func, arg){
//     func(arg);
// }

// exec((something) => {
//     console.log(something);
// }, 'great'); //anonymous function 

//-------------------------

// Delaying execution with setTimeout();

// window.setTimeout((something) => {
//     console.log(something);
// }, 3000, 'greetings, everyone!');

//method expects a function to be the first parameter 

//-------------------------

// listening for events with addEventListener();
//making a site interactive:
// selecting elements on a page
// manipulating elements 
//listening for user actions 

//the event target can be an element, a document or window object. 



// event type, callback function (event handler) 

