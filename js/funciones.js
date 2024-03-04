import {mostrarTodoProductos,div,precioTotal,verCarrito,carrito} from './variables.js'

const sumaIva = (x) => (x * 21) / 100;
const suma = (a, b) => a + b;


async function listado() {
    try {
      const response = await fetch('../json/data.json');
      const data = await response.json();
  
      data.forEach((producto) => {
        const tarjeta = document.createElement("div");
        mostrarTodoProductos.append(tarjeta);
        tarjeta.classList.add("card", "col-md-3", "articulo");
  
        tarjeta.innerHTML = `
          <img src="${producto.img}">
          <h3>${producto.nombre}</h3>
          <p class="product-price">$${producto.precio}</p>
          <button class="btn-shop bx bx-shopping-bag"></button>
        `;
  
        const botonDeCompra = tarjeta.getElementsByClassName("btn-shop");

for (let i = 0; i < botonDeCompra.length; i++) {
    botonDeCompra[i].onclick = function() {
        carrito.push(producto);
        localStorage.setItem("Carrito", JSON.stringify(carrito));

        const subtotal = carrito.reduce((total, producto) => total + producto.precio, 0);
        const totalConIva = suma(subtotal, sumaIva(subtotal));

        precioTotal.innerText = `Subtotal: $${subtotal}\nTotal: $${totalConIva}`;

        Swal.fire({
            icon: 'success',
            title: 'Excelente',
            text: `Has añadido ${producto.nombre} al carrito\nTe cuesta $${producto.precio}\nCon IVA: $${suma(producto.precio, sumaIva(producto.precio))}`,
            confirmButtonText: 'Vale!',
            confirmButtonColor: '#ff8836'
        });

        mostrarCarrito();
    };
}

      });

    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  }
  
  listado();
  // Aca muestro para añadir los productos al carrito 
  function mostrarCarrito() {
    div.innerHTML = "";
    carrito.forEach((producto) => {
      const divCart = document.createElement('div')
      divCart.setAttribute("class", "card col-md-3 articulo")
      divCart.innerHTML += ` 
        <img src="${producto.img}">
        <h3>${producto.nombre}</h3>
        <h3>$${producto.precio}</h3>`
  
  
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

  export{listado,mostrarCarrito};