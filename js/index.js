let usuario = prompt('¿Podrias ingresar tu nombre?')
alert("Hola" + " " + usuario)

let respuesta = prompt(usuario + " ¿Cuantos años tienes?")

while (respuesta < 18) {

    let answer = prompt("Ingresaste bien tu edad?")

    if (answer == "si") {
        alert("No puedes ingresar")
    } else {
        respuesta = prompt('Ingresa tu edad')
    }
}

alert("Bienvenido" + " " + usuario)

alert("Le haremos unas cuantas preguntas para calcular que titulos puede comprar")


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let AWayOut = 2000
let asassinsCreedUnity = 3500
let asassinCreedValhalla = 5500
let battlefield5 = 3500
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const suma = (a, b) => {
    return a + b
}

function solicitarPrecio() {
    let numero = prompt("Ingresa un monto")
    return parseInt(numero)
}

let pregunta = prompt("Esta compra es individual o en pareja?")
if (pregunta == "En pareja" || pregunta == "en pareja") {
    let persona1 = solicitarPrecio()
    let persona2 = solicitarPrecio()
    let dineroDisponible = suma(persona1, persona2)
    alert("El total recaudado entre su amigo y usted es: $" + dineroDisponible)
} else {
    let solo = prompt("Cuanto dinero dispones?")
    alert("Su total recaudado es de: $" + solo)
}
alert('Estos juegos tenemos disponibles\n' + "A way out: $" + AWayOut + "\nAsassins Creed Unity: $" + asassinsCreedUnity + "\nAsassins creed Valhalla: $" + asassinCreedValhalla + "\nBattlefield5: $" + battlefield5);

let comprar = prompt("Cuanto era su dinero recaudado?")
if (comprar < AWayOut) {
    alert("Lo siento, no te alcanza para obtener ningun juego")
} else if (comprar>=battlefield5) {
    alert("te alcanza solo para:\nA way out\nAssasins creed unity\nBattlefield5")
} else if (comprar>=asassinCreedValhalla) {
    alert("te alcanza para: \nA way out\nAssasins creed unity\nAssasins creed valhalla\nBattlefield5")
} else {
    alert("Puedes elegir el juego que quieras!!")
}