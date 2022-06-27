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
    
        botonDeCompra.addEventListener("click",function (){
            carrito.push(producto)
        alert("Has añadido "+ producto.nombre+" Al carrito\n"+" te cuesta $"+producto.precio+"\nY con iva te sale en: $"+suma(producto.precio,sumaIva(producto.precio)))
        })
    
    
    })




}


console.log(carrito)
listado()




// let botones = document.getElementsByClassName("addToCart");

// for (let botoncitos of botones) {
//   botoncitos.addEventListener("click", () => {
//     alert(
//       "El precio de este articulo es $" +
//         productos.find((p) => p.ID == botoncitos.id).precio +
//         "\nEl total seria: $" +
//         suma(
//           productos.find((p) => p.ID == botoncitos.id).precio,
//           sumaIva(productos.find((p) => p.ID == botoncitos.id).precio)
//         )
//     );
//   });
// }


