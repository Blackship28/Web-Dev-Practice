//array utk bas
var passanger = ["rifqi", "Abu", "ucup", "otong"];

//fungsi utk tambah penumpang
var addPassanger = function (namePassanger, passanger) {
  //kalau bas ada kerusi kosong
  if (passanger.length == 0) {
    //insert nama penumpang
    passanger.push(namePassanger);
    //kembalikan isi array & keluar dari fungsi
    return passanger;
  }
  //jika kerusi kosong != 0
  else {
    //it will iritate through the entire array
    for (var i = 0; i < passanger.length; i++) {
      //if ada penumpan yang turun which is undefined -> array kosong (penumpang turun)
      if (passanger[i] == undefined) {
        passanger[i] = namePassanger;
        return passanger;
      } else if (passanger[i] == namePassanger) {
        console.log(namePassanger + " sudah ada dalam bas");
        return passanger;
      } else if (i == passanger.length - 1) {
        passanger.push(namePassanger);
        return passanger;
      }
    }
  }
};
