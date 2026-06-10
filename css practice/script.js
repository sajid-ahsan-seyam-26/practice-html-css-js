/*
====================================
1. Message show function
====================================
Ei function button click korle alert show korbe.
*/

function showMessage(topic) {
  alert("You clicked on " + topic + " button!");
}

/*
====================================
2. Change card layout
====================================
Ei function card layout change korbe.
Normal: side by side
After click: one by one vertically
*/

function changeLayout() {
  let container = document.querySelector(".container");

  container.classList.toggle("vertical-layout");
}

/*
====================================
3. Change website title
====================================
Ei function h1 text change korbe.
*/

function changeTitle() {
  let title = document.getElementById("main-title");

  title.innerText = "I am Learning JavaScript!";
}

/*
====================================
4. Dark mode function
====================================
Ei function body te dark-mode class add/remove korbe.
*/

function darkMode() {
  let body = document.body;

  body.classList.toggle("dark-mode");
}
