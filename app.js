/*Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn.
Lee este blog que explica cómo funciona el algoritmo de Luhn.
Consideraciones Específicas:
Tu código debe estar compuesto por 1 función: isValidCard
El usuario no debe poder ingresar un campo vacío*/

/* Creando la funcion CardNumberInArray para pasar los digitos del numero
de la tarjeta ingresada a una array en orden inverso*/
function CardNumberInArray(numberCard){
  if ( numberCard === ""){
   alert ("INGRESAR almenos un numero");
   } else {
     var cardNumberInArrayReverse = [];
     for( var i= 0; i < numberCard.length; i++){
      /*Accediendo a cada digito del numero ingresado(string),
      transformandolo en "numero"(parseInt) y agregando al nuevo array
      con "unshift"para que este en el orden invertido*/
     cardNumberInArrayReverse.unshift(parseInt(numberCard.charAt(i)));
     }
       return cardNumberInArrayReverse;//Retornamos el nuevo Array.
    }
}
do{
  var inPut = prompt("Ingrese su numero de tarjeta de credito");
   var newCard = CardNumberInArray(inPut);
 // console.log (newCard);
} while(inPut === "");
//Llamando a la funcion, y el array nuevo obtenido le agregamos a la variable"newCard".
//var newCard = CardNumberInArray(prompt("ingrese numero de tarjeta"));
/*Creando uuna funcion que devuelva un nuevo array con los digitos
duplicados de las posiciones pares del array"newCard".*/
function duplicateDigitCard(newCard){
  var array = [];
  for(var j = 0; j < newCard.length; j++){
    //Creando la condicion para ubicar las posiciones pares del array "newCard".
    if(j%2===1){
      //duplicando los digitos de las posiciones pares.
      var result = newCard[j]*2;
      // creando la condicion para sumar los digitos si esque el digito duplicado es mayor o igual a 10.
      if(result >= 10){
        var sum = 0;
        for (var i = 0; i < String(result).length; i++){
          sum += parseInt(String(result).charAt(i));
        }
        array.push(sum);///agregando al nuevo array la suma de los digitos del digito duplicado que es>=10.
    }else {array.push(result);//agregando al nuevo array los digitos duplicados <10.
     }
  }else{
    array.push(newCard[j]);//agregando al nuevo array los digitos de las posiciones impares.
  }
}
 return array; // Retornar el nuevo array
}
// Llamando a la funcion y colocando el nuevo array en la variable "modifiedCardNumber"
var modifiedCardNumber = duplicateDigitCard(newCard);

/* Creando una funcion (isValidCard)  que sume los digitos del nuevo array
" modifiedCardNumber" y ver si es divisible por 10 para verificar la validez
del numero de la tarjeta*/
function isValidCard(modifiedCardNumber){
 var sumTotal= 0;// crando variable sumTotal donde se sumara al final el total de digitos
 for(i=0; i< modifiedCardNumber.length; i++){
  sumTotal += modifiedCardNumber[i];
 }
/*Creando la condicion de que la suma total sea divisible por 10 para verificar
 la validez del numero de la tarjeta*/
 if(sumTotal % 10===0){
  alert("Su numero de tarjeta es valido");
 } else {
   alert("Su numero de tarjeta  no es valido");
   }
}
//Llamando la funcion
isValidCard(modifiedCardNumber);
