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
