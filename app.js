/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



 function scroll1(){
    document.getElementById("section1").scrollIntoView({block: "end", behavior: "smooth"});
 }
 function scroll2(){
    document.getElementById("section2").scrollIntoView({block: "end", behavior: "smooth"});
 }
 function scroll3(){
    document.getElementById("section3").scrollIntoView({block: "end", behavior: "smooth"});
 }
 function scroll4(){
    document.getElementById("section4").scrollIntoView({block: "end", behavior: "smooth"});
 }

lis = document.getElementsByTagName("li");
lis[0].addEventListener("click",scroll1,false);
lis[1].addEventListener("click",scroll2,false);
lis[2].addEventListener("click",scroll3,false);
lis[3].addEventListener("click",scroll4,false);


function change1(){
    lis[0].style.backgroundColor='teal';
}
function change2(){
    lis[1].style.backgroundColor='teal';
}
function change3(){
    lis[2].style.backgroundColor='teal';
}
function change4(){
    lis[3].style.backgroundColor='teal';
}

function change5(){
    lis[0].style.backgroundColor='#02103E';
}
function change6(){
    lis[1].style.backgroundColor='#02103E';
}
function change7(){
    lis[2].style.backgroundColor='#02103E';
}
function change8(){
    lis[3].style.backgroundColor='#02103E';
}
var sec1 = document.getElementById("section1");
var sec2 = document.getElementById("section2");
var sec3 = document.getElementById("section3");
var sec4 = document.getElementById("section4");

sec1.addEventListener("mouseover",change1, false);
sec2.addEventListener("mouseover",change2, false);
sec3.addEventListener("mouseover",change3, false);
sec4.addEventListener("mouseover",change4, false);

sec1.addEventListener("mouseout",change5, false);
sec2.addEventListener("mouseout",change6, false);
sec3.addEventListener("mouseout",change7, false);
sec4.addEventListener("mouseout",change8, false);






/*
function doStuff() {
    alert( this.innerHTML );
}
*/
