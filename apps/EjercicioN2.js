/*
Ejercicio Nº2:
Realizar una aplicación queconsulte a un usuario mediante una ventana “confirm”si está de acuerdo con salir de la página donde se encuentra actualmente. Si el usuario acepta,  debe  aparecer  unmensaje  mediante  una  alerta  que  le  informe  que  será redirigido. En caso que cancele, deberá notificarleque permanecerá en la web que se encuentra actualmente
*/


//    Desarrolo
const confirme = window.confirm(`${nombre}, por favor confirme si desea cerrar la página actual`)

if (confirme == true) {
    alert(`Gracias    ${nombre} por visitar esta página, ahora serás redirigido a HOME`)
} else {
    alert(`Gracias por permanecer en esta página    ${nombre}`)
}