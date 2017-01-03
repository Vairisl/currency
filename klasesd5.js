// VIDEJAIS SKAITLIS
// LIELAKAIS SKAITLIS


let array = [12,15,24,11,9,25,99,11,32,12,52,55,3,9,89,111,85]

let mazcipars = array[0];
for (var i = 0; i < array.length; i++) {
  if (array[i] < mazcipars) {
    mazcipars = array[i];
  }
}

let lielcipars = array[0];
for (var j = 0; j < array.lenght; j++) {
  if (array[j] > lielcipars) {
    lielcipars = array[j]
  }
}
 
let total = 0;
for (var x = 0; x < array.lenght; x++) {
  total = total + array[i];
}
skaitlis = total / array.lenght
