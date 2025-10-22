const butangWarna = document.getElementById("warna");
//const body = document.getElementsByTagName("body")[0];
/* for above, kalau takda const body pon takpa sebab ada :

document.body

*/
butangWarna.addEventListener("click", function () {
  //body.style.backgroundColor = "yellow";

  //bila diclick jd biru muda
  //body.setAttribute("class", "biru-muda");

  //classList utk manipulasi class
  document.body.classList.toggle("biru-muda");
});

//buat tombol
const tRandom = document.createElement("button");
const teksTombol = document.createTextNode("random color");

tRandom.appendChild(teksTombol);
tRandom.setAttribute("type", "button");
butangWarna.after(tRandom);

tRandom.addEventListener("click", function () {
  //Math.random() * 255 + 1 =>nak bagi nilai 255
  //nak bagi no deci => Math.round
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  //console.log(r);

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");
//change x real time
//input untuk real time
sMerah.addEventListener("input", function () {
  //console.log(sMerah.value);
  const r = sMerah.value;
  const g = sHijau.value;

  document.body.style.backgroundColor = "rgb(" + r + ", 100, 100)";
});
sHijau.addEventListener("input", function () {
  //console.log(sHijau.value);
  const r = sMerah.value;
  const g = sHijau.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", 100)";
});
sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

//trace mouse
//clientX kekanan makin besar

document.body.addEventListener("mousemove", function (event) {
  //posisi mouse
  //console.log(event.clientY);
  //check ukuran lebar window
  //console.log(window.innerWidth);
  //console.log("listener added");

  //nak bagi makin ke kiri makin kecil nilai
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerWidth) * 255);

  document.body.style.backgroundColor = "rgb(" + xPos + " , " + yPos + ", 100)";
  console.log(xPos);
});
