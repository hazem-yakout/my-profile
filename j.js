let w = document.querySelector(".w");
let head = document.querySelector("header");
let l = document.querySelector(".logo");
let ser = document.querySelector("#services");
let c = document.querySelector(".contact");
let p = document.querySelector("#projects");
let o = document.querySelector(".footer");
w.onclick = function () {
  ser.classList.toggle("color");
  head.classList.toggle("h");
  l.classList.toggle("l");
  p.classList.toggle("prj");
  c.classList.toggle("r");
  o.classList.toggle("o");
};
