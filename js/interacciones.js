const IVA = 21;
const sumaIva = (x) => (x * 21) / 100;
const suma = (a, b) => a + b;
//  Hago un llamado a los contenedores del html
let mostrarProductos = document.getElementById("mostrarProductos");
let mostrarTodoProductos = document.getElementById("mostrarTodoProductos");
const div = document.querySelector(".div");
let listaCarrito = document.getElementById("listaCarrito");
let precioTotal = document.getElementById("precioTotal");

let verCarrito = document.getElementById("productosCarrito");
let enElCarro = document.getElementById("enElCarro");

let carrito = []
let storage = JSON.parse(localStorage.getItem("Carrito"))

const EliminarDelCarrito=(prodId)=>{
  const item= carrito.find((prod)=prod===prodId)
  const indice= carrito.indexOf(item)
  carrito.splice(indice,1)
}
storage ? (carrito = storage, mostrarCarrito()) : carrito = []

// Hago la funcion para agregarlo al html
function listado() {
  listaPrecios.forEach((producto) => {
    let targeta = document.createElement("div");
    mostrarTodoProductos.append(targeta);
    targeta.setAttribute("class", "card col-md-3 articulo");
    let img = document.createElement("img");
    img.setAttribute("src", producto.img);
    let nombre = document.createElement("h3");
    nombre.innerText = producto.nombre;
    let precio = document.createElement("h4");
    precio.innerText = "$" + producto.precio;
    let botonDeCompra = document.createElement("button");
    botonDeCompra.innerText = "Agregar al carrito";
    botonDeCompra.setAttribute("class", "btn btn-dark");
    targeta.append(img, nombre, precio, botonDeCompra);

    botonDeCompra.onclick = () => {
      carrito.push(producto);
      localStorage.setItem("Carrito", JSON.stringify(carrito))
      let subtotal = carrito.reduce(
        (total, producto) => total + producto.precio,
        0
      );


      precioTotal.innerText = "Subtotal: $" + subtotal + "\nTotal: $" + suma(subtotal, sumaIva(subtotal));


      Swal.fire({
        icon: 'success',
        title: 'Excelente',
        text: 'Has añadido ' + producto.nombre + ' Al carrito\n' + ' te cuesta $' + producto.precio + '\nY con iva te sale en: $' + suma(producto.precio, sumaIva(producto.precio)),
        confirmButtonText: 'Vale!',
        confirmButtonColor: '#ff8836'
      })
        mostrarCarrito();
    };
  });
}

listado();

// Aca muestro para añadir los productos al carrito 
function mostrarCarrito() {
  listaCarrito.innerHTML = "";
  carrito.forEach((producto) => {
    let targeta = document.createElement("div");
    targeta.setAttribute("id", "productosCarrito");
    listaCarrito.append(targeta);
    targeta.setAttribute("class", "card col-md-3 articulo");
    let img = document.createElement("img");
    img.setAttribute("src", producto.img);
    let nombre = document.createElement("h3");
    nombre.innerText = producto.nombre;
    let precio = document.createElement("h4");
    precio.innerText = "$" + producto.precio;
    let botonConfirmar = document.createElement("button");
    botonConfirmar.innerText = "En el carrito!";
    botonConfirmar.setAttribute("class","btn btn-dark")
    targeta.append(img, nombre, precio,  botonConfirmar);

     botonConfirmar.onclick = () => {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Has seleccionado '+producto.nombre,
        showConfirmButton: false,
        timer: 1500
      })
    
    };
  });
}
// Aca creo un boton para vaciar carrito y limpiar el localStorage
let borrarCarrito = document.createElement("button");
borrarCarrito.innerText = "Vaciar Carrito";
borrarCarrito.setAttribute("class", "btn btn-dark vaciarCarrito");
verCarrito.append(borrarCarrito);


borrarCarrito.onclick = () => {
  carrito = [];
  localStorage.clear()
  listaCarrito.innerHTML = "";
  precioTotal.innerText = "Total: $0";

};