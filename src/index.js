import _ from "lodash";
import "./style.css";
import "./normalize.css";

import  printMe  from './print.js';

import { importPics} from './renderPics.js';
import renderCarousel from "./renderCarousel.js";
import addArrowSymbols from "./addArrowSymbols.js";
import renderNavigation from "./navigationDots.js";
import { startInterval } from "./autoSlide.js";



// Where the carousel will load main on start
let main = 0;
//
let isStartup = true;
// Import pictures from pics folder
let images = importPics();
renderCarousel(images, main, isStartup);
let interval = startInterval(images, main);
addArrowSymbols(images, main, interval);
renderNavigation(images, main, interval);




/*function component() {
  const element = document.createElement("div");
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}*/



//document.body.appendChild(component());

