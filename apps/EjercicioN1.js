/*
Ejercicio Nº1:
Realizar una aplicación que permita el ingreso mediante dos ventanas “prompt”de dos números para realizar una suma. Almacenar estos números en dos variables, realizar la correspondiente suma y mostrar el resultado tanto por consola como una ventana alert. TENER EN CUENTA:cuando se asigna un dato ingresado por prompt a una variable, este está como un “String”. Utilizar los métodos de casteo/parseocorrespondientes (parseInto parseFloat)para convertir los números ingresados en tipo entero o flotante (double).
*/


//  Desarrollo:
var numero1 = parseFloat(window.prompt("Por favor Indicanos un numero: "))
var numero2 = parseFloat(window.prompt("Por favor Indicanos otro numero: "))

var resultado = numero1 + numero2

console.log(resultado)
alert(resultado)