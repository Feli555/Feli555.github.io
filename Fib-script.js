//
// Fibonacci
//

$(document).ready(function() {

  var isPosReq = false;
  var isSecReq = false;
  var numSecArr = [];
  //var chk2D = [];

  $("#num").click(function() {
    isPosReq = false;
    var digitReq = $("#posT").val();
    var num = Fibonacci(digitReq);
    $("#numSw").html("El numero es " + num);
    console.log("Numero: " + num + ", " + "Posicion: " + digitReq);
    //var print = prompt("Numero: " + num);
    //print;
    //var printII = alert("Numero: " + num + ", " + "Posicion: " + 						digitReq);
    //printII;
  });

  $("#pos").click(function() {
    isPosReq = true;
    var digitReq = $("#numT").val();
    var pos = Fibonacci(digitReq);
    $("#posSw").html("La posicion es " + pos);
    //console.log("Numero: " + digitReq + ", " + "Posicion: " + pos);
  });

  $("#SeqSwB").click(function() {
    isSecReq = true;
    isPosReq = "";
    numSecArr = [];
    if ($("#posT").val() == "") {
      var digitReq = $("#numT").val();
    } else {
      var digitReq = $("#posT").val();
    }
    Fibonacci(digitReq);
    console.log(numSecArr);
    $("#SeqSw").html("La secuencia es " + numSecArr);
  });

  $("#chk").click(function() {
    //	Calculo posición y secuencia
    numSecArr = [];
    isPosReq = true;
    var digitReq = $("#numT").val();
    var pos = Fibonacci(digitReq);
    //	Calculo número usando la secuencia
    var num = numSecArr[(numSecArr.length - 1)];
    var numII = numSecArr[(numSecArr.length - 2)];
    console.log("Largo del Array: " + numSecArr.length);
    console.log(num); //Console.logs para comprobar la construcción de la secuencia	
    //	Comprobación del número contra la secuencia
    if (digitReq == num) {
      $("#chkSw").html("El número pertenece a la sucesión de Fibonacci, y es el " + pos + " número");
    } else {
      $("#chkSw").html("El número no pertenece a la sucesión de Fibonacci, pero el más cercano es el  " + (pos - 1) + " número, y es el " + numII);
    };
  });

  var Fibonacci = function(digitReq) {
    var lastDigit = 1;
    var currentDigit = 0;
    var nextDigit = 0;
    var cycles = 0;



    if (isPosReq === false) {
      while (digitReq > cycles) {
        nextDigit = lastDigit + currentDigit;
        lastDigit = currentDigit;

        currentDigit = nextDigit;
        cycles++;
      }
      return currentDigit
    } else if (isSecReq === true) {
      while (digitReq > cycles) {
        nextDigit = lastDigit + currentDigit;
        lastDigit = currentDigit;
        currentDigit = nextDigit;
        numSecArr.push(currentDigit);
        cycles++;
        //console.log(numSecArr);
      }

    } else {
      console.log("------Start-------");
      while (digitReq > currentDigit) {
        nextDigit = lastDigit + currentDigit;
        lastDigit = currentDigit;

        currentDigit = nextDigit;
        cycles++;
        numSecArr.push(currentDigit);
        console.log("--------------------");
        console.log("Ciclo: " + cycles);
        console.log("Número: " + currentDigit);
        console.log("Secuencia: " + numSecArr);
      }
      console.log("-------END----------")
      return cycles
    }

  }




});
