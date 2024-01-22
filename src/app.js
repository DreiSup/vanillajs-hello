import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#bttn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = tellExcuse();
  });
  document.querySelector("#excuse").innerHTML = tellExcuse();
};
let tellExcuse = () => {
  let who = ["My grandma", "A cow", "My cousin", "My neighbor"];
  let action = ["ate", "peed on", "broke", "burned up"];
  let what = [
    "my homework",
    "my pc",
    "my monitor",
    "the electric cables of my house"
  ];
  let when = [
    "quarter a second ago",
    "last decade",
    "few months ago",
    "yesterday"
  ];

  let whoIndx = Math.floor(Math.random() * who.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);

  return (
    who[whoIndx] +
    " " +
    action[actionIndx] +
    " " +
    what[whatIndx] +
    " " +
    when[whenIndx]
  );
};
