'use strict'
/*
Ejercicio Nº1:
Realizar una aplicación que permita el ingreso mediante dos ventanas “prompt”de dos números para realizar una suma. Almacenar estos números en dos variables, realizar la correspondiente suma y mostrar el resultado tanto por consola como una ventana alert. TENER EN CUENTA:cuando se asigna un dato ingresado por prompt a una variable, este está como un “String”. Utilizar los métodos de casteo/parseocorrespondientes (parseInto parseFloat)para convertir los números ingresados en tipo entero o flotante (double).
*/
var nombre = ""

nombre = window.prompt("Hola por favor indicanos tu nombre a continuación:   ", "My name is JohnDoe")
console.log(nombre)
class UX {
    writename(nombre) {
        const name = document.getElementById('name')
        const insert = document.createElement('div')
        insert.innerHTML = `<h4><st(rong> Hola, Bienvenid@ ${nombre}</strong></h4>`
        name.appendChild(insert);
    }

    sumas(numero1, numero2) {
        const resultado = numero1 + numero2
        alert(resultado)
        console.log(resultado)
    };
}
const ux = new UX()

ux.writename(nombre)

alert("Realicemos la suma de 2 numeros")
const numero1 = parseFloat(window.prompt("Por favor Indicanos un numero: "))
const numero2 = parseFloat(window.prompt("Por favor Indicanos otro numero: "))
ux.sumas(numero1, numero2)