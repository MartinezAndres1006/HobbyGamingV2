const IVA = 21;
const sumaIva = (x) => (x * 21) / 100;
const suma = (a, b) => a + b;

let mostrarProductos= document.getElementById("mostrarProductos")
let mostrarTodoProductos= document.getElementById("mostrarTodoProductos")
const div = document.querySelector(".div")

let carrito=[]

function listado(){
    listaPrecios.forEach((producto)=>{
        let targeta= document.createElement("div")
        mostrarTodoProductos.append(targeta)
        targeta.setAttribute("class","card col-md-3 articulo")
        let img=document.createElement("img")
        img.setAttribute("src",producto.img)
        let nombre= document.createElement("h3")
        nombre.innerText=(producto.nombre)
        let precio=document.createElement("h4")
        precio.innerText=("$"+producto.precio)
        let botonDeCompra= document.createElement("button")
        botonDeCompra.innerText=("Agregar al carrito")
        botonDeCompra.setAttribute("class","btn btn-dark")
        targeta.append(img,nombre,precio,botonDeCompra)  
    
        botonDeCompra.onclick=() => {
            carrito.push(producto)
        alert("Has añadido "+ producto.nombre+" Al carrito\n"+" te cuesta $"+producto.precio+"\nY con iva te sale en: $"+suma(producto.precio,sumaIva(producto.precio)))

        mostrarCarrito()
        }
     
    
    })




}


console.log(carrito)
listado()


let verCarrito= document.getElementById("productosCarrito")
let enElCarro= document.getElementById("enElCarro")
let listaCarrito= document.getElementById("listaCarrito")

let avisoCarrito= document.createElement("h2")

if(!carrito.length){
    avisoCarrito.innerText=("El carrito esta vacio")
}
avisoCarrito.setAttribute("class","subtitulo")

function mostrarCarrito(){
    avisoCarrito.remove()
    carrito.forEach((producto)=>{
        let targeta= document.createElement("div")
        targeta.setAttribute("id","productosCarrito")
        listaCarrito.append(targeta)
        targeta.setAttribute("class","card col-md-3 articulo")
        let img=document.createElement("img")
        img.setAttribute("src",producto.img)
        let nombre= document.createElement("h3")
        nombre.innerText=(producto.nombre)
        let precio=document.createElement("h4")
        precio.innerText=("$"+producto.precio)
        let botonEliminar= document.createElement("button")
        botonEliminar.innerText=("X")
        botonEliminar.setAttribute("class","btn btn-dark eliminar")
        targeta.append(img,nombre,precio,botonEliminar)}
        )}

let eliminarIte =document.getElementsByClassName("eliminar")


const total = carrito.map((item)=>item.precio)
// .reduce((precioTotalCarrito,precioProducto)=>precioTotalCarrito+precioProducto,0) 

console.log(total)

let totalCompra= document.createElement("h4")
totalCompra.innerText=("Total: "+total)
verCarrito.append(totalCompra)


let borrarCarrito= document.createElement("button")
borrarCarrito.innerText=("Vaciar Carrito")
borrarCarrito.setAttribute("class","btn btn-dark")
verCarrito.append(borrarCarrito)

borrarCarrito.onclick= ()=>{
    carrito=[]
    listaCarrito.innerHTML=""
}