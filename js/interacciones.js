const IVA = 21;
const sumaIva = (x) => (x * 21) / 100;
const suma = (a, b) => a + b;
//  Hago un llamado a los contenedores del html
let mostrarProductos = document.getElementById("mostrarProductos");
let mostrarTodoProductos = document.getElementById("mostrarTodoProductos");
const div = document.querySelector(".mostrarCarrito");
let listaCarrito = document.getElementById("listaCarrito");
let precioTotal = document.getElementById("precioTotal");

let verCarrito = document.getElementById("productosCarrito");
let enElCarro = document.getElementById("enElCarro");

let carrito = []
let storage = JSON.parse(localStorage.getItem("Carrito"))

storage ? (carrito = storage, mostrarCarrito()) : carrito = []

// Hago la funcion para agregarlo al html
function listado() {
  listaPrecios.forEach((producto) => {
    const catalogoProductos = document.createElement('div')
    catalogoProductos.setAttribute("class", "card col-md-3 articulo")
    catalogoProductos.innerHTML += ` 
      <img src="${producto.img}">
      <h3>${producto.nombre}</h3>
      <h3>${producto.precio}</h3>
      <button class="btn btn-dark " id=${producto.id}>Agregar al carrito</button>`
    mostrarTodoProductos.appendChild(catalogoProductos)

    // let botonComprar= document.getElementById("agregar")
    
    document.addEventListener("click", (e) => {
      if(e.target && e.target.matches("button#agregar")){
          e.preventDefault();
          carrito.push(producto);
      localStorage.setItem("Carrito", JSON.stringify(carrito))
      let subtotal = carrito.reduce((total, producto) => total + producto.precio, 0);


      precioTotal.innerText = "Subtotal: $" + subtotal + "\nTotal: $" + suma(subtotal, sumaIva(subtotal));

      Swal.fire({
        icon: 'success',
        title: 'Excelente',
        text: 'Has añadido ' + producto.nombre + ' Al carrito\n' + ' te cuesta $' + producto.precio + '\nY con iva te sale en: $' + suma(producto.precio, sumaIva(producto.precio)),
        confirmButtonText: 'Vale!',
        confirmButtonColor: '#ff8836'
      })
      }
      mostrarCarrito();
      
  })
    
      
      

  });
}


listado();
const eliminarProd = (id) => {
  carrito = carrito.filter(value => value.id != id);
}

// Aca muestro para añadir los productos al carrito 
function mostrarCarrito() {
  div.innerHTML = "";
  carrito.forEach((producto) => {
    const divCart = document.createElement('div')
    divCart.setAttribute("class", "card col-md-3 articulo")
    divCart.innerHTML += ` 
      <img src="${producto.img}">
      <h3>${producto.nombre}</h3>
      <h3>$${producto.precio}</h3>
      <button class="eliminar btn btn-dark" data-id=${producto.id}>X</button>`


    div.appendChild(divCart)
  })
}

// Aca creo un boton para vaciar carrito y limpiar el localStorage
let borrarCarrito = document.createElement("button");
borrarCarrito.innerText = "Vaciar Carrito";
borrarCarrito.setAttribute("class", "btn btn-dark vaciarCarrito");
verCarrito.append(borrarCarrito);


borrarCarrito.onclick = () => {
  carrito = [];
  localStorage.clear()
  div.innerHTML = "";
  precioTotal.innerText = "Total: $0";

};



