'use strict';

const allElements = document.getElementsByTagName('*');
const elemData = [];
const myBtn = document.getElementById("myBtn");
let flag = false;
let fontState = "css";

function toggleFont() {
  if (!flag) {
    for (const elem of allElements) {
      let font = window.getComputedStyle(elem,null).getPropertyValue("font-family");
      elemData.push([elem, font])
    }
    flag = true;
  }

  if (fontState === "css") {
    fontState = "openDys";
    myBtn.innerText = "Change fonts back";
    for (const elem of allElements) {
      elem.style.fontFamily = "openDys";
    }
  } else {
    fontState = "css";
    myBtn.innerText = "Use Open Dyslexic Font"
    for (const elem of elemData) {
      if (elem.id !== "myBtn") {
        elem[0].style.fontFamily = elem[1];
      }
    }
  }
}


function resizeFont(multiply) {
  let sz = document.body.style.fontSize;
  sz = parseFloat((sz === '' ? "1rem" : sz)) + (multiply * .5);
  if (sz > 0.2 && sz < 4) {
    document.body.style.fontSize = `${sz}rem`;
  }
}   
