/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function aleatorio(datos) {
    return datos[Math.floor(Math.random() * datos.length)];
  }

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let excuse = [
    aleatorio(who) +
      " " +
      aleatorio(action) +
      " " +
      aleatorio(what) +
      " " +
      aleatorio(when)
  ];

  let pExcuse = document.querySelector(".js-excuse");
  pExcuse.innerHTML = excuse;
  console.log(pExcuse);
};
