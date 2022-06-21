let usuario = prompt('¿Podrias ingresar tu nombre?')
while (usuario == "") {
    usuario = prompt("¿Podrias ingresar tu nombre?")
}
alert("Bienvenido" + " " + usuario)

alert("A continuacion le vamos a mostrar la lista de juegos")
let AWayOut = 2000
let asassinsCreedUnity = 3500
let asassinCreedValhalla = 5500
let battlefield5 = 3500
let callOfDutyColdWar = 7500
let callOfDutyWorldWar2 = 4800
let cyberpunk2077 = 2000
let dirt5 = 4000
let dyingLight = 5000
let eldenRing = 7500
let farCry6 = 7000
let fifa22 = 3000


let listaPrecios = [{
    nombre:'A way Out',
    precio: AWayOut
},
{
    nombre:'Asassins Creed Unity',
    precio: asassinsCreedUnity
},
{
    nombre:'Asassins Creed Valhalla',
    precio: asassinCreedValhalla
},
{
    nombre:'Battlefield 5',
    precio: battlefield5
},
{
    nombre:'Call of Duty Cold War',
    precio: callOfDutyColdWar
},
{
    nombre:'Call Of Duty World War 2',
    precio: callOfDutyWorldWar2
},
{
    nombre:'Cyberpunk 2077',
    precio: cyberpunk2077
},
{
    nombre:'Dirt 5',
    precio: dirt5
},
{
    nombre:'Dying Light',
    precio: dyingLight
},
{
    nombre:'Elden ring',
    precio: eldenRing
},
{
    nombre:'Far Cry 6',
    precio: farCry6
},
{
   nombre:'Fifa 22',
    precio: fifa22
}
]

console.log(listaPrecios.includes())
const IVA = 21
const sumaIva = (x) => x * 21 / 100
const suma = (a, b) => a + b

function solicitarSaldo() {
    let saldo = prompt("Ingrese su saldo disponible")
    return parseInt(saldo)
}

function solicitarJuego() {
    let titulo = prompt("Seleccione el juego que prefiera:\n1-AWayOut:$2000\n2-AsassinsCreedUnity:$3500\n3-AsassinCreedValhalla:5500\n4-Battlefield5:$3500\n5.-Call Of Duty Cold War:$7500\n6.-Call Of Duty World War 2:$4800\n7.-Cyberpunk 2077:$2000\n8.-Dirt 5:$4000\n9.-Dying Light:$5000\n10.-Elden Ring:$7500\n11.-Far cry6:$7000\n12.-Fifa22:$3000")
    return parseInt(titulo)
}

let juego = solicitarJuego()
while (juego == 0 || juego > 12) {
    juego = solicitarJuego()
}

alert("El subtotal de su juego es de $" + listaPrecios[juego - 1].precio + "\nEl total con iva seria de $" + suma(listaPrecios[juego - 1].precio, sumaIva(listaPrecios[juego - 1].precio)));



// -------------------------------------------------------Inicio Dom-----------------------------------------

document.getElementById("textoAseguraContraseña")


textoAseguraContraseña.innerText=(usuario+" "+"Ingresa tu fecha de nacimiento")

const passVuelva=document.getElementById("passVuelva")

passVuelva.setAttribute("type","date")
