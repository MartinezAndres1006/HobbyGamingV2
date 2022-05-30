let usuario = prompt('Buenas! ¿Podrias ingresar tu nombre?')
alert("Bienvenido" +" " + usuario)

let respuesta = prompt(usuario + " ¿Cuantos años tienes?")

while (respuesta <= 18) {

    let answer = prompt("Ingresaste bien tu edad?")

    if (answer =="si") {
        alert("No puedes ingresar")
    } else {
        respuesta = prompt('Ingresa tu edad')
    }
}

alert("Bienvenido"+" "+ usuario)