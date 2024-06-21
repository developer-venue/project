//Global variables
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
const myImage = document.querySelector("img");

//image change on click function
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "G:/My Drive/html/test-site/images/test-image.png") {
    myImage.setAttribute("src", "G:/My Drive/html/test-site/images/test-image2.png");
  } else {
    myImage.setAttribute("src", "G:/My Drive/html/test-site/images/test-image.png");
  }
};

  
// Personalized welcome message code

let  myButton = document.querySelector('button');
//let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}