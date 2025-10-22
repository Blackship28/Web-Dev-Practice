//shift + alt +a for /* */
//ctrl + / for //
//dom manipulation

//tambah elemenn
const newP = document.createElement("p");
const newTeks = document.createTextNode("new paragraph");

//simpan dalam para
newP.appendChild(newTeks);

//simpan newteks diakhir section A
const sectionA = document.getElementById("a");
sectionA.appendChild(newP);

//simpan li
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("item baru");
liBaru.appendChild(teksLiBaru);

//identify parents to li, which is = ul
const ul = document.querySelector("section#b ul"); //dia akan select section id B yang ada ul
const li2 = ul.querySelector("li:nth-child(2)"); //dia akan cari dari ul sampai anak ke 2

//ini akan masukkan before 2nd child
ul.insertBefore(liBaru, li2);

//remove link
//1 tgk kt mana parent
//2 element yang akan remove
const link = document.getElementsByTagName("a")[0];

//parent is section a
//link is child
sectionA.removeChild(link);

//1 cari parents
const sectionB = document.getElementById("b");
//cari dari section b, para P
const p4 = sectionB.querySelector("p");

//buat h2 baru
const H2Baru = document.createElement("h2");
//create teks baru utk h2
const teksH2Baru = document.createTextNode("Judul Baru!");

//teks baru tadi letak dalam H2baru
H2Baru.appendChild(teksH2Baru);
//tukar kpd h2baru drpd p4
sectionB.replaceChild(H2Baru, p4);

newP.style.backgroundColor = "green";
liBaru.style.backgroundColor = "green";
H2Baru.style.backgroundColor = "green";
