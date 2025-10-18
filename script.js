//manipulate array

/*//menampilkan array
var arr = ["apple", "banana", "cherry", true, 42];
console.log(arr);
console.log(arr[3]);

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}*/

//method pada arry
//join -> gabung array menjadi string
var arr = ["apple", "banana", "cherry"];
console.log(arr.join());

//push pop -> menambah dan menghapus elemen di akhir array
//arr.push("ikan", "ayam");
//arr.pop();
//console.log(arr.join("-"));

//shift unshift -> menambah dan menghapus elemen di awal array
//arr.unshift("belom");
arr.shift();
console.log(arr.join("-"));
