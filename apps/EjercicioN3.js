/*
Ejercicio Nº3:
Realizar una aplicación que permita ingresar “n”cantidad de nombres de equipos de futbol mediante una ventana prompt. Cuando desee terminar de ingresar equipos deberá ingresar  la  palabra “terminado”.  Al  finalizar  el  ingreso,  deberá  informar  por pantalla mediante una variable la cantidad total de equipos que fueron infresados.
*/

//    Desarrollo

var Equipos = " "
var nEquipos = 0
var variosEq = []

/* OPTION 1
do {
    Equipos = window.prompt("Ingresa el Nombre del Equipo de Futbol:    ")
    variosEq[nEquipos] = Equipos;
    ++nEquipos

    console.log(variosEq)
} while (Equipos != "terminado")

alert("Gracias por ingresar los Nombres de los Equipos")
console.log("Proceso finalizado. Muchas Gracias ", nEquipos)
console.log(variosEq)
*/



while (Equipos != "terminado") {
    Equipos = window.prompt("Ingresa el Nombre del Equipo de Futbol:    \n")
    variosEq[nEquipos] = Equipos;
    ++nEquipos
}

alert("Gracias por ingresar los Nombres de los Equipos")
console.log("Proceso finalizado. Muchas Gracias. ", --nEquipos, " datos fueron ingresados")
variosEq.pop()
alert(variosEq.join("\n"))
console.log(variosEq)