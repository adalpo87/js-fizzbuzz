//

//array dove inserisco il numero oppure fizz, buzz
var numeri = [];

for (var i = 1; i < 101; i++){
  if ( i%3 == 0){
    numeri.push("fizz");
  }
  if ( i%5 == 0){
    numeri.push("buzz");
  }
  else if ( i%3 != 0 && i%5 != 0){
    numeri.push(i);
  }
}

document.getElementById('lista').innerHTML = numeri;

