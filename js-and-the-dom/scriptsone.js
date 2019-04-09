import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

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


// const input = document.querySelector('input');
// const p = document.querySelector('p.description');
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     p.innerHTML = input.value + ':';
// });



// title attribute has been set 
//---------------------------------------------------------------------------