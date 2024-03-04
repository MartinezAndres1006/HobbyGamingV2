import { carrito, storage } from './variables.js';
import { listado,mostrarCarrito } from './funciones.js';

if (storage) {
   carrito = storage;
  mostrarCarrito();
} else {
  carrito;
}

listado();
