//event listener

const p3 = document.querySelector(".p3");

//cara ini tidak bagus krna mixing html + js
function ubahWarna() {
  p2.style.backgroundColor = "lightblue";
  p2.style.fontSize = "50px";
}

//cara lain utk onclick
const p2 = document.querySelector(".p2");
p2.onclick = ubahWarna;

//Method 2
//addEventListener
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  //panngil parent which is ul
  const ul = document.querySelector("section#b ul");
  //create new element = li
  const liBaru = document.createElement("li");
  //create teks baru = iten baru
  const teksLiBaru = document.createTextNode("item baru");
  //letaks teks baru dalam li
  liBaru.appendChild(teksLiBaru);
  //create li baru
  ul.appendChild(liBaru);
});
