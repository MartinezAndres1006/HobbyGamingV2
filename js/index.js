let usuario = prompt('¿Podrias ingresar tu nombre?')
while (usuario == "") {
    usuario = prompt("¿Podrias ingresar tu nombre?")
}
alert("Bienvenido" + " " + usuario)

alert("A continuacion le vamos a mostrar la lista de juegos")

let listaPrecios = [{
        precio: 2000
    },
    {
        precio: 3500
    },
    {
        precio: 5500
    },
    {
        precio: 3500
    }
]
const IVA = 21
const sumaIva = (x) => x * 21 / 100
const suma = (a, b) => a + b
let AWayOut = 2000
let asassinsCreedUnity = 3500
let asassinCreedValhalla = 5500
let battlefield5 = 3500

function solicitarSaldo() {
    let saldo = prompt("Ingrese su saldo disponible")
    return parseInt(saldo)
}

function solicitarJuego() {
    let titulo = prompt("Seleccione el juego que prefiera:\n1-AWayOut:$2000\n2-AsassinsCreedUnity:$3500\n3-AsassinCreedValhalla:5500\n4-Battlefield5:$3500")
    return parseInt(titulo)
}

let juego = solicitarJuego()
while (juego == 0 || juego > 5) {
    juego = solicitarJuego()
}

alert("El subtotal de su juego es de $" + listaPrecios[juego - 1].precio + "\nEl total con iva seria de $" + suma(listaPrecios[juego - 1].precio, sumaIva(listaPrecios[juego - 1].precio)));


let saldoSolicitado = solicitarSaldo() 

if(saldoSolicitado<AWayOut){
    alert("Lo siento"+" "+usuario+", pero en este momento no te alcanza para ningun juego!!!")
}else if(saldoSolicitado<asassinCreedValhalla){
    alert(usuario+" "+"En este momento te alcanza para:\n A way out\nAssasins creed Unity\n Battlefield5 ")
}else{
    alert(usuario+" "+"Felicidades, te alcanza para todos los juegos")
}